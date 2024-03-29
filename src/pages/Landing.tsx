import { useNavigate } from 'react-router-dom'
import { Button, Scaffold } from '../components'
import { COLORS } from '../constants'
import styled from 'styled-components'

export const Landing = () => {
  const navigate = useNavigate()
  return (
    <Scaffold backgroundImage="/background.png">
      <Wrapper>
        <Button
          label="Party admin"
          style={{
            background: COLORS.Blue,
          }}
          onClick={() => {
            navigate('/party/login')
          }}
        />
        {/* <Button
          label="Join a party"
          style={{
            background: COLORS.Blue,
          }}
          onClick={() => {
            navigate('/join-with-code')
          }}
        /> */}
        <Button
          label="Create a party"
          onClick={() => {
            navigate('/party/create')
          }}
        />
      </Wrapper>
    </Scaffold>
  )
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  position: absolute;
  top: 32px;
  right: 32px;

  @media (max-width: 768px) {
    display: none;
  }
`
