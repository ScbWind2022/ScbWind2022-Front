import React, { useContext } from 'react'

import Button from '@mui/material/Button'
import styled from 'styled-components'

import SystemModalContext from './SystemModalContext'

const SystemModal = ({ title, description, id }) => {
  const { systemModals, setSystemModals } = useContext(SystemModalContext)

  function handleCloseButtonClick() {
    const newModals = systemModals.filter((item) => item.id !== id)
    setSystemModals(newModals)
  }

  return (
    <Content>
      <Title>{title}</Title>
      <Description>{description}</Description>
      <Button onClick={handleCloseButtonClick} variant="contained" color="secondary">
        Закрыть
      </Button>
    </Content>
  )
}

export default SystemModal

const Content = styled.div`
  font-family: 'Roboto', sans-serif;
  color: white;
  min-width: 300px;
  padding: 20px;
  background: #1976d2;
  border-radius: 15px;
  margin-bottom: 20px;
`

const Title = styled.h2`
  margin: 0;
  padding-bottom: 20px;
  color: white;
`

const Description = styled.p`
  letter-spacing: -0.02em;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
`

const CloseButton = styled.button``
