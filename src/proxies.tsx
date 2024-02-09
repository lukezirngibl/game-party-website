import queryString from 'query-string'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export const GameProxy = () => {
  const navigate = useNavigate()

  const gameId = queryString.parse(window.location.search)?.gameId

  useEffect(() => {
    if (!gameId) {
      navigate('/404')
    } else {
      localStorage.setItem('x-game-id', gameId as string)
      navigate('/game')
    }
  }, [gameId])

  return null
}

export const PartyAdminProxy = () => {
  const navigate = useNavigate()

  const code = queryString.parse(window.location.search)?.code

  useEffect(() => {
    if (!code) {
      navigate('/404')
    } else {
      localStorage.setItem('x-party-admin-key', code as string)
      navigate('/party/admin')
    }
  }, [code])

  return null
}
