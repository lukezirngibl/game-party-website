import { useQuery, useQueryClient } from '@tanstack/react-query'
import queryString from 'query-string'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button, CenterBox, Input, Scaffold, Select } from '../components'
import { COLORS } from '../constants'
import { V1Service } from '../openapi'

export const JoinTeam = () => {
  const navigate = useNavigate()

  const parsed = queryString.parse(window.location.search)

  const [tab, setTab] = useState<string | null>(null)
  const [team, setTeam] = useState<string>('')
  const [name, setName] = useState<string>('')
  const [teamName, setTeamName] = useState<string>('')
  const [loading, setLoading] = useState(false)

  const joinCode = parsed?.code as string

  const playerId = localStorage.getItem('x-player-id')

  const { data: party } = useQuery({
    queryKey: ['party', joinCode],
    queryFn: () => {
      localStorage.setItem('x-party-code', joinCode!)
      return V1Service.getParty(joinCode!)
    },
    enabled: !!joinCode,
  })

  useEffect(() => {
    if (playerId) {
      navigate('/party')
    }
  }, [playerId])

  useEffect(() => {
    if (!joinCode) {
      navigate('/404')
    }
  }, [joinCode])

  if (!party) {
    return null
  }

  return (
    <Scaffold backgroundImage="/background-4.png">
      <CenterBox
        style={{
          maxWidth: 500,
          width: '100%',
          height: 320,
          gap: 8,
        }}
      >
        {tab === null && (
          <>
            <h1>{party.party.name}</h1>
            <Button
              label="Join existing team"
              style={{ marginTop: 'auto', width: '100%' }}
              onClick={() => {
                setTab('join')
              }}
            />
            <Button
              label="Create new team"
              style={{ marginTop: 16, width: '100%', background: COLORS.Blue }}
              onClick={() => {
                setTab('new')
              }}
            />
          </>
        )}
        {tab === 'join' && (
          <>
            <h1>{party.party.name}</h1>
            <Select
              style={{
                marginTop: 'auto',
              }}
              onChange={setTeam}
              options={party.teams.map((team) => ({
                label: team.name,
                value: team._id,
              }))}
              value={team}
            />
            <Input style={{}} placeholder="My name" onChange={setName} value={name} />
            <Button
              label="Join"
              disabled={loading || !team || name.length < 3}
              style={{ marginTop: 16, width: '100%', background: COLORS.Blue }}
              onClick={() => {
                setLoading(true)
                V1Service.joinTeam({ name, teamId: team })
                  .then(({ player }) => {
                    setLoading(false)
                    localStorage.setItem('x-player-id', player._id)
                    new Promise((resolve) => setTimeout(resolve, 1000)).then(() => {
                      navigate('/party')
                    })
                  })
                  .catch((e) => {
                    setLoading(false)
                    alert(e.message)
                  })
              }}
            />
          </>
        )}
        {tab === 'new' && (
          <>
            <h1>{party.party.name}</h1>
            <Input
              style={{
                marginTop: 'auto',
              }}
              placeholder="My name"
              onChange={setName}
              value={name}
            />
            <Input style={{}} placeholder="Team name" onChange={setTeamName} value={teamName} />
            <Button
              label="Create"
              disabled={loading || name.length < 3 || teamName.length < 3}
              style={{ marginTop: 16, width: '100%', background: COLORS.Blue }}
              onClick={() => {
                setLoading(true)
                V1Service.createTeam({ name, teamName })
                  .then(({ team, player }) => {
                    setLoading(false)
                    localStorage.setItem('x-player-id', player._id)
                    new Promise((resolve) => setTimeout(resolve, 1000)).then(() => {
                      navigate('/party')
                    })
                  })
                  .catch((e) => {
                    setLoading(false)
                    alert(e.message)
                  })
              }}
            />
          </>
        )}
      </CenterBox>
    </Scaffold>
  )
}
