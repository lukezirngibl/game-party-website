import { useQuery, useQueryClient } from '@tanstack/react-query'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { Button, CenterBox, Input, Scaffold, Select } from '../components'
import { GameType, GameType_ExactOption, V1Service } from '../openapi'

export const Game = () => {
  const navigate = useNavigate()

  const [value, setValue] = useState<string>('')
  const queryClient = useQueryClient()

  const gameId = localStorage.getItem('x-game-id')
  const playerId = localStorage.getItem('x-player-id')

  const { data: player } = useQuery({
    queryKey: ['player', playerId],
    retry: 0,
    queryFn: () => {
      return V1Service.getPlayer()
    },
    onError: () => {
      navigate('/404')
    },
  })

  const { data } = useQuery({
    queryKey: ['game', gameId],
    retry: 0,
    queryFn: () => {
      return V1Service.getGame()
    },
    onError: () => {
      navigate('/404')
    },
  })

  if (!data || !player) {
    return null
  }

  return (
    <Scaffold backgroundImage="/background-4.png" hideLogo>
      <CenterBox
        style={{
          width: '100%',
          maxWidth: 400,
          height: 400,
          marginTop: 144,
          alignItems: 'flex-start',
          gap: 8,
        }}
      >
        <h1>{data.game.title}</h1>

        <p style={{ marginBottom: 'auto' }}>{data.game.description}</p>

        {data.game.config.type === GameType_ExactOption.EXACT_OPTION && (
          <Select options={data.game.config.options} value={value} onChange={setValue} />
        )}

        {[GameType.HIGH_SCORE, GameType.LOW_SCORE, GameType.EXACT_NUMBER].includes(
          data.game.config.type as any,
        ) && <Input value={value} onChange={setValue} placeholder="Enter..." type="number" />}

        <Button
          label={data.results.length > 0 ? 'Complete' : 'Submit'}
          style={{
            marginTop: 8,
            width: '100%',
          }}
          disabled={data.results.length > 0 || value === ''}
          onClick={() => {
            V1Service.submitResult({ value })
              .then(() => {
                queryClient.setQueryData(['game', gameId], (p: any) => {
                  return {
                    ...p,
                    results: [...p.results, value],
                  }
                })
              })
              .catch((e) => {
                toast.error(e.message)
              })
          }}
        />
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 16,
            marginTop: 12,
          }}
        >
          <p style={{ fontSize: 12, opacity: 0.7 }}>Team: {player.team.name}</p>
          <p style={{ fontSize: 12, opacity: 0.7 }}>Player: {player.me.name}</p>
          <p style={{ fontSize: 12, opacity: 0.7 }}>Attempts: {data.results.length}</p>
          <p>{data.results.length > 0 ? data.results[0].value : ''}</p>
        </div>
      </CenterBox>
    </Scaffold>
  )
}
