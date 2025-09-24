import { useNavigate } from 'react-router-dom'
import { Button, Scaffold } from '../components'
import styled from 'styled-components'
import { useState } from 'react'
import { PartyService } from '../openapi'

export const CreateParty = () => {
  const navigate = useNavigate()

  const [name, setName] = useState('')
  return (
    <Scaffold backgroundImage="/background-2.png">
      <InputOuterWrapper>
        <InputInnerWrapper>
          <Input
            placeholder="Party name"
            value={name}
            onChange={(e) => {
              setName(e.target.value)
            }}
          />
          <Button
            label="Create a party"
            disabled={name.length < 5}
            onClick={() => {
              PartyService.createParty({ name }).then(({ party }) => {
                localStorage.setItem('x-party-admin-key', party.adminCode)
                navigate(`/party/admin`)
              })
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
