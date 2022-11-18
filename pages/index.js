import * as React from 'react'

import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import styled from 'styled-components'

export default function Home() {
  return (
    <View>
      <LoginView>
        <LoginField required label="Email" variant="outlined" />
        <LoginField required label="Password" variant="outlined" type="password" />
        <LoginButton variant="contained">Login</LoginButton>
      </LoginView>
    </View>
  )
}

const View = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`

const LoginView = styled.div`
  padding: 40px;
  border: 1px solid #1976d2;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const LoginField = styled(TextField)`
  margin-bottom: 10px;
`

const LoginButton = styled(Button)`
  width: 100%;
`
