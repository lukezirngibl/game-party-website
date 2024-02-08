import { useQuery } from '@tanstack/react-query'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button, CenterBox, Scaffold } from '../components'
import { V1Service } from '../openapi'

export const Party = () => {
  const navigate = useNavigate()

  const playerId = localStorage.getItem('x-player-id')

  const { data } = useQuery({
    queryKey: ['player', playerId],
    retry: 0,
    queryFn: () => {
      return V1Service.getPlayer()
    },
    onError: () => {
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
          marginTop: 144,
          gap: 8,
        }}
      >
        <h1>{data.team.name}</h1>
        <p>Hey {data.me.name}, you are all set!. Now go and scan the game QR codes!</p>
        <Button
          label="Scan QR code"
          style={{
            width: '100%',
            marginTop: 'auto',
          }}
        />
        <Button
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
        />
        <Button
          label="Leave party"
          onClick={() => {
            localStorage.clear()
            navigate('/')
          }}
          style={{ width: '100%', background: 'rgba(0,0,0,0.1)', color: 'rgba(0,0,0,0.7)' }}
        />
      </CenterBox>
    </Scaffold>
  )
}
