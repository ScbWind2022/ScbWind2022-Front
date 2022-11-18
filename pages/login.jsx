import * as React from 'react'

import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import { useRouter } from 'next/router'
import { Field, Form } from 'react-final-form'
import styled from 'styled-components'

export default function Login() {
  const router = useRouter()

  function handleRegisterButtonClick() {
    router.push('/register')
  }

  function onSubmit() {}

  function validate(e) {
    console.log(e)
    const errors = {}
    if (e.password !== e.passwordConfirm) {
      errors.password = 'Пароли не совпадают'
      errors.passwordConfirm = 'Пароли не совпадают'
    }
  }

  return (
    <View>
      <LoginView>
        <Form
          onSubmit={onSubmit}
          validate={validate}
          render={({ handleSubmit }) => (
            <LoginForm onSubmit={handleSubmit}>
              <Field name="email">{(props) => <LoginField {...props.input} placeholder="Почта" />}</Field>
              <Field name="password" component={LoginField} placeholder="Пароль" />
              <Field name="passwordConfirm" component={LoginField} type="password" placeholder="Повторите пароль" />
              <LoginButton variant="contained" type="submit">
                Вход
              </LoginButton>
            </LoginForm>
          )}
        />
        <LoginButton onClick={handleRegisterButtonClick} variant="contained">
          Register
        </LoginButton>
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
  min-width: 400px;
  padding: 40px;
  border: 1px solid #1976d2;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
const LoginForm = styled.div`
  width: 100%;
`

const LoginField = styled(TextField)`
  width: 100%;
  margin-bottom: 20px;
`

const LoginButton = styled(Button)`
  width: 100%;
  margin-bottom: 20px;
`
