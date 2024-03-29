import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Landing } from './pages/Landing'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { OpenAPI } from './openapi'
import { CreateParty } from './pages/CreateParty'
import { PartyAdmin } from './pages/PartyAdmin'
import { QueryClient, QueryClientProvider, useQuery } from '@tanstack/react-query'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { JoinTeam } from './pages/JoinTeam'
import { Party } from './pages/Party'
import { GameProxy, PartyAdminProxy } from './proxies'
import { Game } from './pages/Game'
import { Leaderboard } from './pages/Leaderboard'
import { PartyAdminLogin } from './pages/PartyAdminLogin'
import { NotFound } from './pages/404'
import { JoinWithCode } from './pages/JoinWithCode'

const queryClient = new QueryClient()

OpenAPI.BASE = process.env.REACT_APP_API_URL || 'empty'

const getHeaders = async () => {
  const gameId = localStorage.getItem('x-game-id')
  const playerId = localStorage.getItem('x-player-id')
  const partyCode = localStorage.getItem('x-party-code')
  const adminKey = localStorage.getItem('x-party-admin-key')

  const headers = {
    ...(adminKey ? { 'x-party-admin-key': adminKey } : {}),
    ...(playerId ? { 'x-player-id': playerId } : {}),
    ...(gameId ? { 'x-game-id': gameId } : {}),
    ...(partyCode ? { 'x-party-code': partyCode } : {}),
  }

  return Promise.resolve(headers)
}

OpenAPI.HEADERS = getHeaders
const router = createBrowserRouter([
  {
    path: '/404',
    element: <NotFound />,
  },
  {
    path: '/party/create',
    element: <CreateParty />,
  },
  {
    path: '/party/admin',
    element: <PartyAdmin />,
  },
  {
    path: '/party/login',
    element: <PartyAdminLogin />,
  },
  {
    path: '/party',
    element: <Party />,
  },
  {
    path: '/proxy/game',
    element: <GameProxy />,
  },
  {
    path: '/proxy/admin',
    element: <PartyAdminProxy />,
  },
  {
    path: '/game',
    element: <Game />,
  },
  {
    path: '/leaderboard',
    element: <Leaderboard />,
  },
  {
    path: '/join-with-code',
    element: <JoinWithCode />,
  },
  {
    path: '/join',
    element: <JoinTeam />,
  },
  {
    path: '/admin',
    element: <div>Global admin</div>,
  },
  {
    path: '/',
    element: <Landing />,
  },
])

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <ToastContainer />
    </QueryClientProvider>
  </React.StrictMode>,
)
