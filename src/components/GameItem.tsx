import { useQueryClient } from '@tanstack/react-query'
import { useState } from 'react'
import { FaRegTrashAlt } from 'react-icons/fa'
import { IoQrCode } from 'react-icons/io5'
import { MdRemoveRedEye } from 'react-icons/md'
import QRCode from 'react-qr-code'
import { toast } from 'react-toastify'
import styled from 'styled-components'
import { Modal } from '../components'
import { Game, V1Service } from '../openapi'

export const GameItem = (props: { game: Game }) => {
  const { game } = props

  const [open, setOpen] = useState(false)

  const queryClient = useQueryClient()
  const adminCode = localStorage.getItem('x-party-admin-key')

  const link = `${process.env.REACT_APP_CLIENT_URL}/proxy/game?gameId=${game._id}`

  return (
    <GameItemWrapper>
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
    </GameItemWrapper>
  )
}

const GameItemWrapper = styled.div`
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

const GameFooter = styled.div`
  display: flex;
  align-items: center;
  margin-top: auto;
  gap: 12px;
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
