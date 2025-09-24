import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { Button, Scaffold } from '../components'

export const JoinWithCode = () => {
  const navigate = useNavigate()

  const [code, setCode] = useState('')
  return (
    <Scaffold backgroundImage="/background-2.png">
      <InputOuterWrapper>
        <InputInnerWrapper>
          <Input
            placeholder="Party code"
            value={code}
            onChange={(e) => {
              setCode(e.target.value)
            }}
          />
          <Button
            label="Join"
            disabled={!code}
            onClick={() => {
              navigate('/join?code=' + code)
            }}
          />
        </InputInnerWrapper>
      </InputOuterWrapper>
    </Scaffold>
  )
}

const Input = styled.input`
  flex: 1;
  height: 100%;
  border: 0;
  font-size: 28px;
  padding-left: 8px;

  &:focus {
    outline: none;
  }
`

const InputOuterWrapper = styled.div`
  position: absolute;
  top: 144px;
  left: 0;
  width: 100%;
  height: 144px;
  display: flex;
  align-items: center;
  justify-content: center;
`

const InputInnerWrapper = styled.div`
  width: 100%;
  background: white;
  padding: 8px 12px;
  border-radius: 8px;
  box-shadow: 0 0 8px 8px rgba(0, 0, 0, 0.1);
  max-width: 600px;
  height: 80px;
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
`
