import { useQueryClient } from '@tanstack/react-query'
import { useState } from 'react'
import { toast } from 'react-toastify'
import styled from 'styled-components'
import { Button, Input, Select, TextArea } from '../components'
import {
  GameType,
  GameType_ExactNumber,
  GameType_ExactOption,
  GameType_Free,
  GameType_HighScore,
  GameType_LowScore,
  GameType_Timed,
  GameType_TimedWithOption,
  GameType_TimedWithTarget,
  V1Service,
} from '../openapi'

const options = [
  { label: 'Exact Number', value: GameType_ExactNumber.EXACT_NUMBER },
  { label: 'Exact Option', value: GameType_ExactOption.EXACT_OPTION },
  { label: 'Free', value: GameType_Free.FREE },
  { label: 'High Score', value: GameType_HighScore.HIGH_SCORE },
  { label: 'Low Score', value: GameType_LowScore.LOW_SCORE },
  { label: 'Timed', value: GameType_Timed.TIMED },
  { label: 'Timed with target', value: GameType_TimedWithTarget.TIMED_WITH_TARGET },
  { label: 'Timed with option', value: GameType_TimedWithOption.TIMED_WITH_OPTION },
]

const initialState = {
  title: '',
  description: '',
  options: '',
  target: '',
  maxTries: '',
  maxScore: '',
  minTime: '',
  maxTime: '',
  hidden: 'true',
  minScore: '',
  points: '',
  type: String(GameType.HIGH_SCORE),
}

export const NewGameForm = () => {
  const queryClient = useQueryClient()

  const adminCode = localStorage.getItem('x-party-admin-key')

  const [config, setConfig] = useState(initialState)

  return (
    <NewGame>
      <h3 style={{ textAlign: 'left', width: '100%', fontSize: 24, marginBottom: 12 }}>Add Game</h3>
      <Input
        placeholder="Title"
        value={config.title}
        onChange={(title) => setConfig((c) => ({ ...c, title }))}
      />
      <TextArea
        placeholder="Description"
        aria-multiline
        value={config.description}
        onChange={(description) => setConfig((c) => ({ ...c, description }))}
      />
      <Select
        options={[
          {
            label: 'Value is hidden',
            value: 'true',
          },
          {
            label: 'Value is shown',
            value: 'false',
          },
        ]}
        value={config.type}
        onChange={(hidden) => setConfig((c) => ({ ...c, hidden }))}
      />
      <Select
        options={options}
        value={config.type}
        onChange={(type) => setConfig((c) => ({ ...c, type }))}
      />
      {[GameType.EXACT_OPTION, GameType.TIMED_WITH_OPTION].includes(config.type as any) && (
        <Input
          placeholder="Options (comma separated)"
          value={config.options}
          onChange={(options) => setConfig((c) => ({ ...c, options }))}
        />
      )}
      {[
        GameType.EXACT_OPTION,
        GameType.EXACT_NUMBER,
        GameType.TIMED_WITH_TARGET,
        GameType.TIMED_WITH_OPTION,
      ].includes(config.type as any) && (
        <Input
          placeholder="Target value"
          value={config.target}
          onChange={(target) => setConfig((c) => ({ ...c, target }))}
        />
      )}

      {[GameType.TIMED, GameType.TIMED_WITH_OPTION, GameType.TIMED_WITH_TARGET].includes(
        config.type as any,
      ) && (
        <>
          <Input
            placeholder="Min time (seconds) (optional)"
            value={config.minTime}
            type="number"
            pattern="\d*"
            onChange={(minTime) => setConfig((c) => ({ ...c, minTime }))}
          />
          <Input
            placeholder="Max time (seconds) (optional)"
            value={config.maxTime}
            type="number"
            pattern="\d*"
            onChange={(maxTime) => setConfig((c) => ({ ...c, maxTime }))}
          />
        </>
      )}

      {[GameType.HIGH_SCORE, GameType.LOW_SCORE, GameType.EXACT_NUMBER].includes(config.type as any) && (
        <>
          <Input
            placeholder="Min Score (optional)"
            value={config.minScore}
            type="number"
            pattern="\d*"
            onChange={(minScore) => setConfig((c) => ({ ...c, minScore }))}
          />
          <Input
            placeholder="Max Score (optional)"
            value={config.maxScore}
            type="number"
            pattern="\d*"
            onChange={(maxScore) => setConfig((c) => ({ ...c, maxScore }))}
          />
        </>
      )}

      <Input
        placeholder="Max tries (empty = infinity)"
        value={config.maxTries}
        type="number"
        pattern="\d*"
        onChange={(maxTries) => setConfig((c) => ({ ...c, maxTries }))}
      />
      <Input
        placeholder="Points (e.g 100)"
        value={config.points}
        type="number"
        pattern="\d*"
        onChange={(points) => setConfig((c) => ({ ...c, points }))}
      />
      <Button
        label="Add"
        disabled={!config.title}
        style={{ width: '100%', marginTop: 72 }}
        onClick={() => {
          V1Service.createGame({
            title: config.title,
            description: config.description,
            config: {
              ...config,
              type: config.type as GameType,
              hidden: config.hidden === 'true',
            },
          })
            .then(({ game }) => {
              setConfig(initialState)
              queryClient.setQueryData(['admin', adminCode], (p: any) => {
                return {
                  ...p,
                  games: [...p.games, game],
                }
              })
            })
            .catch((e) => {
              toast.error(e.message)
            })
        }}
      />
    </NewGame>
  )
}

const NewGame = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: center;
  padding: 24px;
  width: 360px;
  box-shadow: 0 0 8px 8px rgba(0, 0, 0, 0.05);
  background: white;
  border-radius: 12px;
`
