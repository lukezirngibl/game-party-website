import { useNavigate } from 'react-router-dom'
import { Button, CenterBox, Scaffold } from '../components'

import styled from 'styled-components'

export const NotFound = () => {
  const navigate = useNavigate()
  return (
    <Scaffold backgroundImage="/background.png">
      <CenterBox style={{ width: 420 }}>
        <h1>
          Uh Oh. <br></br> It looks like you're lost.
        </h1>
        <Button
          label="Take me home"
          style={{ marginTop: 64, width: '100%' }}
          onClick={() => {
            navigate('/')
          }}
        />
      </CenterBox>
    </Scaffold>
  )
}
