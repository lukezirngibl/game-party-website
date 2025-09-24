import { useQuery } from '@tanstack/react-query'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from '../components'
import { PartyService } from '../openapi'
// @ts-ignore
import 'react-html5-camera-photo/build/css/index.css'

export const Party = () => {
  const navigate = useNavigate()

  const [cameraEnabled, setCameraEnabled] = useState(false)

  const playerId = localStorage.getItem('x-player-id')

  const { data } = useQuery({
    queryKey: ['player', playerId],
    retry: 0,
    queryFn: () => {
      return PartyService.getPlayer()
    },
    onError: () => {
      localStorage.clear()
      navigate('/404')
    },
  })

  if (!data) {
    return null
  }

  console.log(data)

  return (
    <div
      style={{
        borderRadius: 8,
        background: 'white',
        boxShadow: '0 0 8px 8px rgba(0, 0, 0, 0.1)',
        padding: '32px',
        height: '100vh',
        overflowY: 'scroll',
        paddingBottom: 64,
      }}
    >
      {/* <h1>{data.team.name}</h1> */}
      {/* <div
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
      </div> */}

      <p
        style={{
          textAlign: 'left',
          width: '100%',
          fontSize: 16,
          marginTop: 24,
          marginBottom: 24,
          opacity: 0.7,
        }}
      >
        Hey {data.me.name}, you are all set! Now you can start playing the games below.
      </p>

      {data.games.map((g) => (
        <div
          style={{ display: 'flex', alignItems: 'center', gap: 16, width: '100%', marginBottom: 16 }}
          key={g._id}
        >
          <p
            style={{
              flex: 1,
              fontSize: 16,
              fontWeight: 'bold',
            }}
          >
            {g.title}
          </p>
          <Button
            style={{
              height: 40,
              width: 64,
              padding: 0,
              fontSize: 16,
            }}
            label="Play"
            onClick={() => {
              navigate(`/proxy/game?gameId=${g._id}`)
            }}
          />
        </div>
      ))}
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
        label="Leave"
        onClick={() => {
          localStorage.clear()
          navigate('/')
        }}
        style={{
          width: '100%',
          background: 'transparent',
          fontSize: 20,
          color: 'black',
          marginTop: 24,
          backgroundColor: 'rgba(0,0,0,0.1)',
        }}
      />
    </div>
  )
}
