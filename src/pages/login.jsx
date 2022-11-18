import { useState } from 'react'

import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import { useRouter } from 'next/router'
import { Field, Form } from 'react-final-form'
import styled from 'styled-components'

export default function Register() {
  const [emailError, setEmailError] = useState(false)

  const router = useRouter()

  function onSubmit(e) {
    const isValidEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(e.email)

    if (!isValidEmail) {
      setEmailError(true)
      return
    }
    router.push('/')
  }

  function validate(e) {
    const errors = {}
    const { email, password } = e
    const isValidEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)

    if (!isValidEmail && email) {
      errors.email = 'Введите корректный адрес электронной почты'
    }
    if (password) {
      errors.repeatPassword = 'Это обязательное поле'
    }

    return errors
  }

  function onRegisterButtonClick() {
    router.push('/register')
  }

  return (
    <View>
      <LoginView>
        <Form
          onSubmit={onSubmit}
          validate={validate}
          render={({ handleSubmit }) => (
            <form onSubmit={handleSubmit}>
              <Field
                name="email"
                render={(props) => {
                  return (
                    <LoginField
                      {...props.input}
                      variant="outlined"
                      placeholder="Почта"
                      error={props.meta.error && props.meta.touched}
                      helperText={props.meta.error}
                    />
                  )
                }}
              />
              <Field
                name="password"
                render={(props) => {
                  return (
                    <LoginField
                      {...props.input}
                      type="password"
                      variant="outlined"
                      placeholder="Пароль"
                      error={props.meta.error && props.meta.touched}
                      helperText={props.meta.error}
                    />
                  )
                }}
              />
              <LoginButton type="submit" variant="contained">
                Войти
              </LoginButton>
            </form>
          )}
        />
        <LoginButton onClick={onRegisterButtonClick} variant="contained">
          Регистрация
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
  width: 400px;
  padding: 40px;
  border: 1px solid #1976d2;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const LoginField = styled(TextField)`
  width: 100%;
  margin-bottom: 20px;
  height: 80px;
`

const LoginButton = styled(Button)`
  width: 100%;
  margin-bottom: 20px;
  height: 60px;
`
