import { useQuery, useQueryClient } from '@tanstack/react-query'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { Button, CenterBox, Input, Scaffold, Select } from '../components'
import { useTimer } from 'react-timer-hook'
import {
  GameType,
  GameType_ExactNumber,
  GameType_ExactOption,
  GameType_HighScore,
  GameType_LowScore,
  GameType_Timed,
  V1Service,
} from '../openapi'

export const Game = () => {
  const navigate = useNavigate()

  const [value, setValue] = useState<string>('')

  const queryClient = useQueryClient()

  const [start, setStart] = useState(false)
  const [count, setCount] = useState(0)
  const [time, setTime] = useState('00:00:00')

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

  var initTime = new Date()

  const showTimer = (ms: number) => {
    const milliseconds = Math.floor((ms % 1000) / 10)
      .toString()
      .padStart(2, '0')
    const second = Math.floor((ms / 1000) % 60)
      .toString()
      .padStart(2, '0')
    const minute = Math.floor((ms / 1000 / 60) % 60)
      .toString()
      .padStart(2, '0')
    // const hour = Math.floor(ms / 1000 / 60 / 60).toString();
    setTime(
      // hour.padStart(2, "0") +
      // ":" +
      minute + ':' + second + ':' + milliseconds,
    )
  }

  const clearTime = () => {
    setTime('00:00:00')
    setCount(0)
  }

  useEffect(() => {
    if (!start) {
      return
    }
    var id = setInterval(() => {
      var left = count + (new Date().getTime() - initTime.getTime())
      setCount(left)
      showTimer(left)
      if (left <= 0) {
        setTime('00:00:00:00')
        clearInterval(id)
      }
    }, 1)
    return () => clearInterval(id)
  }, [start])

  if (!data || !player) {
    return null
  }

  const resultsLocked =
    data.game.config.maxTries !== undefined && data.results.length >= data.game.config.maxTries

  return (
    <Scaffold backgroundImage="/background-4.png" hideLogo>
      <CenterBox
        style={{
          width: '100%',
          maxWidth: 400,
          height: 500,
          alignItems: 'flex-start',
          gap: 8,
        }}
      >
        <h1>{data.game.title}</h1>
        <p style={{ marginBottom: 'auto' }}>{data.game.description}</p>

        {resultsLocked && (
          <p style={{ color: 'red', fontSize: 12, marginTop: 8 }}>
            You have reached the maximum number of attempts
          </p>
        )}

        {!resultsLocked && (
          <>
            {data.game.config.type === GameType_ExactOption.EXACT_OPTION && (
              <Select options={data.game.config.options} value={value} onChange={setValue} />
            )}

            {data.game.config.type === GameType_Timed.TIMED && (
              <>
                <h3
                  style={{
                    width: '100%',
                    textAlign: 'center',
                    fontSize: 56,
                    opacity: time === '00:00:00' ? 0.2 : 1,
                    marginBottom: 16,
                    fontFamily: 'Menlo',
                  }}
                >
                  {time.slice(0, 8)}
                </h3>
                {!start && count === 0 && (
                  <Button
                    label="Start Timer"
                    onClick={() => {
                      setStart(true)
                    }}
                    style={{
                      width: '100%',
                      marginBottom: 'auto',
                    }}
                  />
                )}
                {start && (
                  <Button
                    label="Stop"
                    onClick={() => {
                      setStart(false)
                    }}
                    style={{
                      width: '100%',
                      marginBottom: 'auto',
                    }}
                  />
                )}
                {!start && count > 0 && (
                  <Button
                    label={'Submit'}
                    onClick={() => {
                      V1Service.submitResult({ value, time: count })
                        .then((results) => {
                          toast.success('Result submitted')
                          queryClient.setQueryData(['game', gameId], (p: any) => {
                            return {
                              ...p,
                              results,
                            }
                          })
                        })

                        .catch((e) => {
                          toast.error(e.message)
                        })

                      setTime('00:00:00')
                      setCount(0)
                    }}
                    style={{
                      width: '100%',
                      marginBottom: 'auto',
                    }}
                  />
                )}
              </>
            )}

            {[
              GameType_HighScore.HIGH_SCORE,
              GameType_LowScore.LOW_SCORE,
              GameType_ExactNumber.EXACT_NUMBER,
            ].includes(data.game.config.type as any) && (
              <Input
                value={value}
                onChange={setValue}
                placeholder="Enter..."
                type="number"
                pattern="\d*"
              />
            )}

            {![GameType.TIMED].includes(data.game.config.type as any) && (
              <Button
                label={data.results.length > 0 ? 'Complete' : 'Submit'}
                style={{
                  marginTop: 8,
                  width: '100%',
                }}
                disabled={data.results.length > 0 || value === ''}
                onClick={() => {
                  V1Service.submitResult({ value, time: null })
                    .then((results) => {
                      queryClient.setQueryData(['game', gameId], (p: any) => {
                        return {
                          ...p,
                          results,
                        }
                      })
                    })
                    .catch((e) => {
                      toast.error(e.message)
                    })
                }}
              />
            )}
          </>
        )}

        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            gap: 8,
            width: '100%',
            marginTop: 12,
            borderTop: '1px solid rgba(0,0,0, 0.1)',
            paddingTop: 16,
          }}
        >
          <div style={{}}>
            <p style={{ fontSize: 12, opacity: 0.7, marginTop: 4 }}>Team: {player.team.name}</p>
            <p style={{ fontSize: 12, opacity: 0.7, marginTop: 4 }}>Player: {player.me.name}</p>
          </div>
          <div style={{}}>
            <p style={{ fontSize: 12, opacity: 0.7, marginTop: 4 }}>Attempts: {data.results.length}</p>
            <p style={{ fontSize: 12, opacity: 0.7, marginTop: 4 }}>
              Max attempts: {data.game.config.maxTries || 1}
            </p>
          </div>

          <p>{data.results.length > 0 ? data.results[0].value : ''}</p>
        </div>
      </CenterBox>
    </Scaffold>
  )
}
