import { useQuery, useQueryClient } from '@tanstack/react-query'
import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import {
  Game,
  GameType,
  GameType_ExactNumber,
  GameType_ExactOption,
  GameType_Free,
  GameType_HighScore,
  GameType_LowScore,
  V1Service,
} from '../openapi'
import styled from 'styled-components'
import { COLORS } from '../constants'
import { Button, Input, Modal, Scaffold, Select, TextArea } from '../components'
import { IoQrCode } from 'react-icons/io5'
import { toast } from 'react-toastify'
import { FaRegTrashAlt } from 'react-icons/fa'
import { MdRemoveRedEye } from 'react-icons/md'
import QRCode from 'react-qr-code'

const options = [
  { label: 'Exact Number', value: GameType_ExactNumber.EXACT_NUMBER },
  { label: 'Exact Option', value: GameType_ExactOption.EXACT_OPTION },
  { label: 'Free', value: GameType_Free.FREE },
  { label: 'High Score', value: GameType_HighScore.HIGH_SCORE },
  { label: 'Low Score', value: GameType_LowScore.LOW_SCORE },
]

const initialState = {
  title: '',
  description: '',
  options: '',
  target: '',
  maxTries: '',
  maxScore: '',
  minScore: '',
  points: '',
  type: String(GameType.HIGH_SCORE),
}

export const GameModule = (props: { game: Game }) => {
  const { game } = props

  const [open, setOpen] = useState(false)

  const queryClient = useQueryClient()
  const adminCode = localStorage.getItem('x-party-admin-key')

  const link = `${process.env.REACT_APP_CLIENT_URL}/proxy/game?gameId=${game._id}`

  return (
    <GameItem>
      <Modal
        open={open}
        onClose={() => {
          setOpen(false)
        }}
        style={{
          width: 500,
        }}
      >
        <>
          <p>1. QR Code</p>
          <QRCode size={256} value={link} />
          <p>2. Link</p>
          <div
            style={{
              background: 'rgba(0,0,0,0.06)',
              padding: '16px 24px',
              borderRadius: 8,
            }}
          >
            <p>{link}</p>
          </div>
        </>
      </Modal>

      <h3>{game.title}</h3>
      <GameFooter>
        <QrButton
          style={{
            boxShadow: '0 1px 2px 2px rgba(0, 0, 0, 0.1)',
          }}
        >
          <MdRemoveRedEye />
        </QrButton>

        <QrButton
          style={{
            boxShadow: '0 1px 2px 2px rgba(0, 0, 0, 0.1)',
          }}
          onClick={() => {
            setOpen(true)
          }}
        >
          <IoQrCode size={20} />
        </QrButton>
        <QrButton
          style={{
            marginLeft: 'auto',
            boxShadow: '0 1px 2px 2px rgba(0, 0, 0, 0.1)',
          }}
          onClick={() => {
            V1Service.archiveGame(game._id)
              .then(() => {
                queryClient.setQueryData(['admin', adminCode], (p: any) => {
                  return {
                    ...p,
                    games: p.games.filter((i: any) => i._id !== game._id),
                  }
                })
              })
              .catch((e) => {
                toast.error(e.message)
              })
          }}
        >
          <FaRegTrashAlt />
        </QrButton>
      </GameFooter>
    </GameItem>
  )
}

export const PartyAdmin = () => {
  const navigate = useNavigate()
  const queryClient = useQueryClient()

  const adminCode = localStorage.getItem('x-party-admin-key')

  const [config, setConfig] = useState(initialState)
  const [tab, setTab] = useState('Games')

  const [joinPartyModalOpen, setJoinPartyModalOpen] = useState(false)

  const { data: party } = useQuery({
    queryKey: ['admin', adminCode],
    queryFn: () => {
      return V1Service.getAdminParty()
    },
    refetchInterval: 1000 * 5,
    enabled: !!adminCode,
  })

  useEffect(() => {
    if (!adminCode) {
      navigate('/404')
    }
  }, [])

  if (!party) {
    return null
  }

  const joinLink = `${process.env.REACT_APP_CLIENT_URL}/join?code=${party.party.joinCode}`

  return (
    <Scaffold backgroundImage="/background-3.png" hideLogo>
      <Modal
        open={joinPartyModalOpen}
        onClose={() => {
          setJoinPartyModalOpen(false)
        }}
        style={{
          width: 500,
        }}
      >
        <>
          <p>1. QR Code</p>
          <QRCode size={256} value={joinLink} />
          <p>2. Link</p>
          <div
            style={{
              background: 'rgba(0,0,0,0.06)',
              padding: '16px 24px',
              borderRadius: 8,
            }}
          >
            <p>{joinLink}</p>
          </div>
        </>
      </Modal>
      <PartyWrapper>
        <Header>
          <img src="/logo-short.svg" style={{ width: 32 }} alt="logo" />
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
          <QrItem>
            <QrButton>
              <IoQrCode size={20} />
            </QrButton>
            <p>Admin</p>
          </QrItem>

          <QrItem
            onClick={() => {
              setJoinPartyModalOpen(true)
            }}
          >
            <QrButton>
              <IoQrCode size={20} />
            </QrButton>
            <p>Join Party</p>
          </QrItem>
          <Button
            label="Leaderboard"
            onClick={() => {
              navigate('/leaderboard')
            }}
            style={{
              background: 'rgba(0,0,0,0.6)',
            }}
          />
        </Header>

        <Navigation>
          {['Games', 'Teams', 'Results', 'Players', 'Settings'].map((i) => (
            <TabItem
              key={i}
              className={tab === i ? 'active' : undefined}
              onClick={() => {
                setTab(i)
              }}
            >
              <p>{i}</p>
            </TabItem>
          ))}
        </Navigation>

        {tab === 'Players' && (
          <TeamsWrapper>
            {party.players.map((player) => (
              <TeamRow key={player._id}>
                <h3>{player.name}</h3>
                <QrButton
                  style={{
                    marginLeft: 'auto',
                    boxShadow: '0 1px 2px 2px rgba(0, 0, 0, 0.1)',
                  }}
                  onClick={() => {}}
                >
                  <FaRegTrashAlt />
                </QrButton>
              </TeamRow>
            ))}
          </TeamsWrapper>
        )}

        {tab === 'Teams' && (
          <TeamsWrapper>
            {party.teams.map((team) => (
              <TeamRow key={team._id}>
                <h3>{team.name}</h3>
                <QrButton
                  style={{
                    marginLeft: 'auto',
                    boxShadow: '0 1px 2px 2px rgba(0, 0, 0, 0.1)',
                  }}
                  onClick={() => {
                    V1Service.archiveTeam(team._id)
                      .then(() => {
                        queryClient.setQueryData(['admin', adminCode], (p: any) => {
                          return {
                            ...p,
                            teams: p.teams.filter((i: any) => i._id !== team._id),
                          }
                        })
                      })
                      .catch((e) => {
                        toast.error(e.message)
                      })
                  }}
                >
                  <FaRegTrashAlt />
                </QrButton>
              </TeamRow>
            ))}
          </TeamsWrapper>
        )}

        {tab === 'Games' && (
          <GameWrapper>
            <NewGame>
              <h3 style={{ textAlign: 'left', width: '100%', fontSize: 24, marginBottom: 12 }}>
                Add Game
              </h3>
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
                options={options}
                value={config.type}
                onChange={(type) => setConfig((c) => ({ ...c, type }))}
              />
              {[GameType.EXACT_OPTION].includes(config.type as any) && (
                <Input
                  placeholder="Options (comma separated)"
                  value={config.options}
                  onChange={(options) => setConfig((c) => ({ ...c, options }))}
                />
              )}
              {[GameType.EXACT_OPTION, GameType.EXACT_NUMBER].includes(config.type as any) && (
                <Input
                  placeholder="Target value"
                  value={config.target}
                  onChange={(target) => setConfig((c) => ({ ...c, target }))}
                />
              )}

              {[GameType.HIGH_SCORE, GameType.LOW_SCORE].includes(config.type as any) && (
                <>
                  <Input
                    placeholder="Min Score (optional)"
                    value={config.minScore}
                    onChange={(minScore) => setConfig((c) => ({ ...c, minScore }))}
                  />
                  <Input
                    placeholder="Max Score (optional)"
                    value={config.maxScore}
                    onChange={(maxScore) => setConfig((c) => ({ ...c, maxScore }))}
                  />
                </>
              )}

              <Input
                placeholder="Max tries (empty = infinity)"
                value={config.maxTries}
                onChange={(maxTries) => setConfig((c) => ({ ...c, maxTries }))}
              />
              <Input
                placeholder="Points (e.g 100)"
                value={config.points}
                onChange={(points) => setConfig((c) => ({ ...c, points }))}
              />
              <Button
                label="Add"
                disabled={!config.title || !config.description}
                style={{ width: '100%', marginTop: 'auto' }}
                onClick={() => {
                  V1Service.createGame({
                    title: config.title,
                    description: config.description,
                    config: {
                      ...config,
                      type: config.type as GameType,
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
            <Games>
              <GamesInnerWrapper>
                {party.games.map((g) => (
                  <GameModule game={g} key={g._id} />
                ))}
              </GamesInnerWrapper>
            </Games>
          </GameWrapper>
        )}
      </PartyWrapper>
    </Scaffold>
  )
}

const TeamRow = styled.div`
  font-size: 20px;
  background: white;
  display: flex;
  align-items: center;
  border-radius: 8px;
  padding: 24px;
  box-shadow: 0 0 8px 8px rgba(0, 0, 0, 0.05);
`

const TeamsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-top: 72px;
  max-width: 800px;
  margin: 48px auto 0 auto;
  overflow-y: auto;
  padding: 32px;
`

const TabItem = styled.div`
  display: flex;
  padding: 0 24px 8px 24px;
  height: 48px;
  display: flex;
  align-items: center;
  background: ${COLORS.Blue};
  color: white;
  cursor: pointer;

  &.active {
    p {
      opacity: 1;
    }
  }

  &:first-child {
    border-bottom-left-radius: 12px;
  }

  &:last-child {
    border-bottom-right-radius: 12px;
  }

  p {
    font-size: 20px;
    opacity: 0.5;

    &:hover {
      opacity: 1;
    }
  }
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

const Navigation = styled.div`
  height: 64px;
  position: absolute;
  padding-left: 16px;
  justify-content: center;
  top: 88px;
  left: 0;
  width: 100%;
  z-index: 1;
  display: flex;
  align-items: center;
`

const GameFooter = styled.div`
  display: flex;
  align-items: center;
  margin-top: auto;
  gap: 12px;
`

const GamesInnerWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
`

const Games = styled.div`
  flex: 1;
  height: 800px;
  padding: 16px;
  margin-top: -16px;
  overflow-y: auto;
`

const GameItem = styled.div`
  padding: 16px;
  background: white;
  border-radius: 12px;
  box-shadow: 0 0 8px 8px rgba(0, 0, 0, 0.05);
  width: 256px;
  height: 144px;
  display: flex;
  flex-direction: column;
  gap: 8px;

  h3 {
    font-size: 24px;
  }

  p {
    font-size: 16px;
    opacity: 0.6;
  }
`

const QrItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: center;

  p {
    color: rgba(255, 255, 255, 0.8);
    font-size: 12px;
  }
`

const QrButton = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 8px;
  background: white;
  display: flex;
  align-items: center;
  cursor: pointer;
  justify-content: center;
  box-shadow: 0 0 4px 4px rgba(0, 0, 0, 0.1);

  transition: all ease 0.2s;

  &:hover {
    transform: scale(1.05);
  }
`

const NewGame = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: center;
  padding: 24px;
  width: 360px;
  height: 700px;
  box-shadow: 0 0 8px 8px rgba(0, 0, 0, 0.05);
  background: white;
  border-radius: 12px;
`

const PartyWrapper = styled.div`
  padding: 96px 24px 24px 24px;
  width: 100%;
  height: calc(100vh - 0px);
  background: linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0));
  position: absolute;
  bottom: 0;
  left: 0;
`

const GameWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  margin-top: 96px;
  gap: 16px;
`
