import { useQuery } from '@tanstack/react-query'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button, CenterBox, Scaffold } from '../components'
import { V1Service } from '../openapi'
import { IoCheckmarkCircle } from 'react-icons/io5'
// @ts-ignore
import Camera from 'react-html5-camera-photo'
import 'react-html5-camera-photo/build/css/index.css'

export const Party = () => {
  const navigate = useNavigate()

  const [cameraEnabled, setCameraEnabled] = useState(false)

  const playerId = localStorage.getItem('x-player-id')

  const { data } = useQuery({
    queryKey: ['player', playerId],
    retry: 0,
    queryFn: () => {
      return V1Service.getPlayer()
    },
    onError: () => {
      localStorage.clear()
      navigate('/404')
    },
  })

  if (!data) {
    return null
  }

  return (
    <Scaffold backgroundImage="/background-4.png" hideLogo>
      <CenterBox
        style={{
          width: '100%',
          maxWidth: 400,
          height: 400,
          gap: 8,
        }}
      >
        {/* <h1>{data.team.name}</h1> */}
        <div
          style={{
            display: 'flex',
            gap: 16,
            alignItems: 'center',
            justifyContent: 'flex-start',
            width: '100%',
            textAlign: 'left',
          }}
        >
          <IoCheckmarkCircle color={'#00e00f'} size={32} />
          <p
            style={{
              fontSize: 18,

              textAlign: 'left',
              width: '100%',
              fontWeight: 'bold',
            }}
          >
            Team: {data.team.name}
          </p>
        </div>

        <p
          style={{
            textAlign: 'left',
            width: '100%',
            fontSize: 18,
            marginTop: 24,
          }}
        >
          Hey {data.me.name}, you are all set! Now go scan the game QR codes with your camera to play.
        </p>
        {/* <Button
          label="Scan QR code"
          style={{
            width: '100%',
            marginTop: 'auto',
          }}
        /> */}
        {/* <Button
          label="Leave team"
          onClick={() => {
            localStorage.clear()
            navigate('/')
          }}
          style={{
            width: '100%',
            background: 'rgba(0,0,0,0.1)',
            color: 'rgba(0,0,0,0.7)',
          }}
        /> */}
        {/* <Button
          label="Close Window"
          onClick={() => {
            setCameraEnabled(true)
          }}
          style={{
            width: '100%',
            fontSize: 18,
            marginTop: 'auto',
          }}
        /> */}
        <Button
          label="Leave party"
          onClick={() => {
            localStorage.clear()
            navigate('/')
          }}
          style={{
            width: '100%',
            background: 'transparent',
            textDecoration: 'underline',
            fontSize: 18,
            color: 'rgba(0,0,0,0.7)',
          }}
        />
      </CenterBox>
    </Scaffold>
  )
}
