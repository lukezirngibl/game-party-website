import { useQuery } from '@tanstack/react-query'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { Scaffold } from '../components'
import { COLORS } from '../constants'
import {
  GameType_ExactNumber,
  GameType_ExactOption,
  GameType_Free,
  GameType_HighScore,
  GameType_LowScore,
  GameType_Timed,
  V1Service,
} from '../openapi'
import { useMemo } from 'react'

export const Leaderboard = () => {
  const navigate = useNavigate()

  const adminCode = localStorage.getItem('x-party-admin-key')

  const { data: party } = useQuery({
    queryKey: ['admin', adminCode],
    queryFn: () => {
      return V1Service.getAdminParty()
    },
    refetchInterval: 1000 * 15,
    onError: () => {
      navigate('/404')
    },
  })

  const { data: stats } = useQuery({
    queryKey: ['dashboard', adminCode],
    queryFn: () => {
      return V1Service.getLeaderboard()
    },
    refetchInterval: 1000 * 5,
    onError: () => {
      navigate('/404')
    },
  })

  const teamTotals = useMemo(
    () =>
      stats && party
        ? party.teams.map((t) =>
            Object.values(stats).reduce((acc, teams) => acc + (teams[t._id]?.points || 0), 0),
          )
        : [],
    [stats, party],
  )

  const sortedTeams = useMemo(
    () =>
      stats && party
        ? party.teams
            .map((team, i) => ({ team, total: teamTotals[i] }))
            .sort((a, b) => b.total - a.total)
        : [],
    [teamTotals, party],
  )

  if (!party || !stats) {
    return null
  }

  const windowWidth = window.innerWidth

  const columnWidth = windowWidth / (party.games.length + 3)

  const columnStyle = {
    flex: `0 0 ${columnWidth}px`,
  }

  return (
    <Scaffold backgroundImage="/background-5.png" hideLogo hideBackground>
      {/* <Header>
        <img src="/logo.svg" style={{ width: 144, filter: 'invert(100%)', marginTop: 12 }} alt="logo" />
        <div
          style={{
            height: 40,
            width: 1,
            background: 'rgba(255,255,255,0.2)',
          }}
        ></div>
        <h1
          style={{
            color: 'white',
            textShadow: '0 0 4px rgba(0, 0, 0, 0.3)',
            marginRight: 'auto',
          }}
        >
          {party.party.name}
        </h1>
      </Header> */}

      <TableWrapper>
        <GamesHeader>
          <GameItem
            style={{
              flex: `0 0 ${columnWidth * 2}px`,
              background: '#35e81a',
            }}
          >
            <h1
              style={{
                color: 'white',
                textShadow: '0 0 4px rgba(0, 0, 0, 0.3)',
                marginRight: 'auto',
              }}
            >
              {party.party.name}
            </h1>
          </GameItem>
          {party.games.map((g) => (
            <GameItem
              style={{
                ...columnStyle,
                background: COLORS.Orange,
              }}
              key={g._id}
            >
              <h2 style={{ textTransform: 'uppercase' }}>{g.title}</h2>
            </GameItem>
          ))}
          <GameItem
            style={{
              ...columnStyle,
              background: COLORS.Purple,
            }}
          >
            <h2>Total points</h2>
          </GameItem>
        </GamesHeader>
        {sortedTeams.map(({ team, total }) => {
          return (
            <TeamRow
              key={team._id}
              style={{
                height: (window.innerHeight - 96) / party.teams.length,
                maxHeight: 96,
              }}
            >
              <GameItem
                style={{
                  flex: `0 0 ${columnWidth * 3}px`,
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                  justifyContent: 'center',
                }}
              >
                <h2>{team.name}</h2>
                <h4
                  style={{
                    color: 'white',
                    fontWeight: 'normal',
                    opacity: 0.7,
                    marginTop: 4,
                    fontSize: 16,
                  }}
                >
                  {party.players
                    .filter((p) => p.teamId === team._id)
                    .map((p) => p.name.slice(0, 16))
                    .join(',')}
                </h4>
              </GameItem>
              {party.games.map((g) => {
                const val = stats?.[g._id]?.[team._id]

                if (val === undefined || val === null) {
                  return (
                    <GameItem
                      style={{
                        ...columnStyle,
                        paddingRight: 0,
                        display: 'flex',
                        alignItems: 'center',
                      }}
                      key={g._id}
                    ></GameItem>
                  )
                }

                let value = val === null ? '---' : val.value

                if (val !== null) {
                  if (g.config.type === GameType_ExactNumber.EXACT_NUMBER) {
                    value = `Hidden`
                  } else if (g.config.type === GameType_Free.FREE) {
                    value = `Done`
                  } else if (g.config.type === GameType_Timed.TIMED) {
                    value = `${Math.abs(val.value / 1000).toFixed(2)}s`
                  } else if (g.config.type === GameType_ExactOption.EXACT_OPTION) {
                    if (value === 1) {
                      value = `Correct`
                    } else {
                      value = `Incorrect`
                    }
                  } else if (g.config.type === GameType_HighScore.HIGH_SCORE) {
                    value = `${val.raw}`
                  } else if (g.config.type === GameType_LowScore.LOW_SCORE) {
                    value = `${val.raw}`
                  }
                }

                const points = val === null ? '---' : val.points.toFixed(0)

                return (
                  <GameItem
                    style={{
                      ...columnStyle,
                      paddingRight: 0,
                      display: 'flex',
                      alignItems: 'center',
                    }}
                    key={g._id}
                  >
                    <div style={{ flex: 1 }}>
                      <h2
                        style={{
                          marginRight: 16,
                          fontSize: 24,
                          opacity: val === null ? 0.3 : 1,
                        }}
                      >
                        {value}
                      </h2>
                    </div>
                    <div
                      style={{
                        flex: '0 0 80px',
                        height: '100%',
                        background: 'rgba(0,0,0,0.1)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      <h2
                        style={{
                          fontSize: 24,
                          opacity: val === null ? 0.3 : 1,
                        }}
                      >
                        {points}
                      </h2>
                    </div>
                  </GameItem>
                )
              })}
              <GameItem
                style={{
                  ...columnStyle,
                  background: COLORS.Purple,
                }}
              >
                <h2>{total.toFixed(0)}</h2>
              </GameItem>
            </TeamRow>
          )
        })}
      </TableWrapper>
    </Scaffold>
  )
}

const TeamRow = styled.div`
  display: flex;

  &:nth-child(odd) {
    opacity: 0.9;
  }
`

const GameItem = styled.div`
  height: 100%;
  padding: 0 32px;
  overflow: hidden;
  display: flex;
  align-items: center;
  background: ${COLORS.Blue};

  border-top: 1px solid rgba(255, 255, 255, 0.3);
  border-right: 1px solid rgba(255, 255, 255, 0.3);

  h2 {
    color: white;
  }
`

const GamesHeader = styled.div`
  display: flex;
  border-bottom: 1px solid white;

  height: 96px;
  width: 100%;
`

const TableWrapper = styled.div`
  padding-top: 0px;
  background: black;
  height: 100vh;
`

const Header = styled.div`
  background: ${COLORS.Blue};
  padding: 0 24px;
  height: 96px;
  display: flex;
  align-items: center;
  gap: 24px;
  position: absolute;
  top: 0;
  right: 0;
  width: 100vw;
`
