import { useQuery, useQueryClient } from '@tanstack/react-query'
import { useEffect, useState } from 'react'
import { FaRegTrashAlt } from 'react-icons/fa'
import { FiLogOut } from 'react-icons/fi'
import { IoQrCode } from 'react-icons/io5'
import QRCode from 'react-qr-code'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import styled from 'styled-components'
import { Button, Modal, Scaffold } from '../components'
import { GameItem } from '../components/GameItem'
import { NewGameForm } from '../components/NewGameForm'
import { COLORS } from '../constants'
import { V1Service } from '../openapi'

export const PartyAdmin = () => {
  const navigate = useNavigate()
  const queryClient = useQueryClient()

  const adminCode = localStorage.getItem('x-party-admin-key')

  const [tab, setTab] = useState('Games')

  const [joinPartyModalOpen, setJoinPartyModalOpen] = useState(false)
  const [partyAdminModalOpen, setPartyAdminModalOpen] = useState(false)

  const { data: party } = useQuery({
    queryKey: ['admin', adminCode],
    queryFn: () => {
      return V1Service.getAdminParty()
    },
    refetchInterval: 1000 * 5,
    enabled: !!adminCode,
    retry: false,
    onError: () => {
      navigate('/404')
    },
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

  const adminLink = `${process.env.REACT_APP_CLIENT_URL}/proxy/admin?code=${party.party.adminCode}`

  return (
    <Scaffold backgroundImage="/background-3.png" hideLogo>
      <Modal
        open={partyAdminModalOpen}
        onClose={() => {
          setPartyAdminModalOpen(false)
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
            <p>{adminLink}</p>
          </div>
        </>
      </Modal>
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
          <QrItem
            onClick={() => {
              setPartyAdminModalOpen(true)
            }}
          >
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
            <NewGameForm />
            <Games>
              <GamesInnerWrapper>
                {party.games.map((g) => (
                  <GameItem game={g} key={g._id} />
                ))}
              </GamesInnerWrapper>
            </Games>
          </GameWrapper>
        )}
      </PartyWrapper>
      <LogoutButton
        onClick={() => {
          localStorage.removeItem('x-party-admin-key')
          navigate('/')
        }}
      >
        <FiLogOut size={28} />
      </LogoutButton>
    </Scaffold>
  )
}

const LogoutButton = styled.button`
  background: white;
  border-radius: 12px;
  box-shadow: 0 0 8px 8px rgba(0, 0, 0, 0.05);
  width: 64px;
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  bottom: 16px;
  border: 0;
  right: 16px;
  z-index: 1;
  cursor: pointer;
  transition: all ease 0.2s;

  &:hover {
    transform: scale(1.05);
  }
`

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
