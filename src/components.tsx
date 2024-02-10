import { CSSProperties, ReactNode } from 'react'
import styled from 'styled-components'
import { COLORS } from './constants'
import { useNavigate } from 'react-router-dom'
import _Select from 'react-select'
import { Modal as _Modal } from '@mui/material'
import { IoMdClose } from 'react-icons/io'

export const Button = (props: {
  label: string
  style?: CSSProperties
  onClick?: () => void
  disabled?: boolean
}) => {
  return (
    <_Button
      disabled={props.disabled}
      onClick={props.onClick}
      style={{
        ...(props.style || {}),
      }}
    >
      {props.label}
    </_Button>
  )
}

const _Button = styled.button`
  text-align: center;
  line-height: 64px;
  height: 64px;
  font-size: 24px;
  font-weight: 600;
  letter-spacing: -0.02em;
  width: 192px;
  background: ${COLORS.Purple};
  border: none;
  color: white;
  border-radius: 8px;
  cursor: pointer;

  transition: all ease 0.2s;

  &:disabled {
    pointer-events: none;
    color: rgba(255, 255, 255, 0.4);
  }

  &:hover {
    transform: scale(1.05);
  }
`

export const Scaffold = (props: {
  children: ReactNode
  backgroundImage: string
  hideLogo?: boolean
  hideBackground?: boolean
}) => {
  const navigate = useNavigate()

  return (
    <div style={{ width: '100vw', height: '100%', overflow: 'hidden' }}>
      {!props.hideLogo && (
        <img
          src="/logo.svg"
          style={{ width: 200, position: 'absolute', top: 32, left: 32, cursor: 'pointer', zIndex: 100 }}
          onClick={() => {
            navigate('/')
          }}
        ></img>
      )}
      {!props.hideBackground && (
        <img src={props.backgroundImage} style={{ objectFit: 'cover', width: '100%', height: '100%' }} />
      )}
      {props.children}
    </div>
  )
}

export const Input = (props: {
  value: string
  type?: string
  onChange: (v: string) => void
  pattern?: string
  placeholder?: string
  style?: CSSProperties
}) => {
  return (
    <_Input
      placeholder={props.placeholder}
      type={props.type}
      style={props.style}
      pattern={props.pattern}
      maxLength={32}
      value={props.value}
      onChange={(e) => {
        props.onChange(e.target.value)
      }}
    />
  )
}

const _Input = styled.input`
  width: 100%;
  height: 48px;
  border: none;
  border-radius: 4px;
  padding: 0 12px;
  font-size: 16px;
  border: 1px solid rgba(0, 0, 0, 0.1);
`

export const TextArea = (props: {
  value: string
  onChange: (v: string) => void
  placeholder?: string
}) => {
  return (
    <_TextArea
      placeholder={props.placeholder}
      value={props.value}
      onChange={(e) => {
        props.onChange(e.target.value)
      }}
    />
  )
}

const _TextArea = styled.textarea`
  width: 100%;
  height: 144px;
  border: none;
  border-radius: 4px;
  padding: 12px;
  font-size: 16px;
  border: 1px solid rgba(0, 0, 0, 0.1);
`

export const Select = (props: {
  options: Array<{ label: string; value: string }>
  style?: CSSProperties
  value: string
  onChange: (v: string) => void
}) => {
  return (
    <_Select
      options={props.options}
      value={props.options.find((o) => o.value === props.value)}
      onChange={(v) => props.onChange(v?.value!)}
      styles={{
        control: (provided) => ({
          ...provided,
          width: '100%',
          height: 48,
          borderColor: 'rgba(0, 0, 0, 0.1)',
        }),
        indicatorSeparator: (provided) => ({
          opacity: 0,
        }),
        container: (provided) => ({
          ...provided,
          width: '100%',
          height: 48,
          border: 0,
          ...(props.style || {}),
        }),
      }}
    />
  )
}

export const CenterBox = (props: { children: ReactNode; style: CSSProperties }) => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
        width: '100%',
        padding: '0 32px',
        position: 'absolute',
        top: 0,
        left: 0,
      }}
    >
      <div
        style={{
          borderRadius: 8,
          background: 'white',
          boxShadow: '0 0 8px 8px rgba(0, 0, 0, 0.1)',
          padding: '32px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          ...(props.style || {}),
        }}
      >
        {props.children}
      </div>
    </div>
  )
}

export const Modal = (props: {
  open: boolean
  onClose: () => void
  children: ReactNode
  style: CSSProperties
}) => {
  return (
    <_Modal
      open={props.open}
      onClose={props.onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <ModalWrapper>
        <ModalContent
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 32,
            ...props.style,
          }}
        >
          <CloseButton onClick={props.onClose}>
            <IoMdClose size={28} />
          </CloseButton>
          {props.children}
        </ModalContent>
      </ModalWrapper>
    </_Modal>
  )
}

const CloseButton = styled.button`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  border: none;
  display: flex;
  align-items: center;
  cursor: pointer;
  background: none;
  justify-content: center;
  position: absolute;
  top: 16px;
  right: 16px;
`

const ModalWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`

const ModalContent = styled.div`
  background: white;
  border-radius: 8px;
  padding: 32px;
  position: relative;
`
