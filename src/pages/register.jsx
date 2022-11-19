import { useContext } from 'react'

import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import axios from 'axios'
import { useRouter } from 'next/router'
import { Field, Form } from 'react-final-form'
import styled from 'styled-components'

import SystemModalContext from '../Modals/SystemModal/SystemModalContext'

export default function Register() {
  const { systemModals, setSystemModals } = useContext(SystemModalContext)

  const router = useRouter()

  function onSubmit() {
    register()
  }

  function register() {
    axios({
      method: 'post',
      url: `http://localhost:8083/api/v1/user/register`,
      data: {
        email: 'email5',
        password: 'password',
        firstName: 'firstName'
      }
    })
      .then((res) => {
        const { data } = res

        if (data === 'User register') {
          router.push('/login')
        }
      })
      .catch((err) => {
        setSystemModals([...systemModals, { id: systemModals.length, title: 'Ошибка!', description: err.message }])
      })
  }

  function validate(e) {
    const errors = {}
    const { email, password, repeatPassword, phone, firstname, surname, patronomyc } = e
    const isValidEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)

    if (!isValidEmail && email) {
      errors.email = 'Введите корректный адрес электронной почты'
    }

    if (password !== repeatPassword && repeatPassword && repeatPassword?.length !== 0) {
      errors.password = 'Пароли не совпадают'
      errors.repeatPassword = 'Пароли не совпадают'
    }

    if (!phone && phone?.length !== 11) {
      errors.phone = 'Неправильно набран телефон'
    }

    if (!firstname) {
      errors.firstname = 'Это обязательное поле'
    }
    if (!surname) {
      errors.surname = 'Это обязательное поле'
    }
    if (!patronomyc) {
      errors.patronomyc = 'Это обязательное поле'
    }

    return errors
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
                      helperText={props.meta.touched ? props.meta.error : ''}
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
                      helperText={props.meta.touched ? props.meta.error : ''}
                    />
                  )
                }}
              />
              <Field
                name="repeatPassword"
                render={(props) => {
                  return (
                    <LoginField
                      {...props.input}
                      type="password"
                      variant="outlined"
                      placeholder="Повторите пароль"
                      error={props.meta.error && props.meta.touched}
                      helperText={props.meta.error}
                    />
                  )
                }}
              />
              <Field
                name="phone"
                render={(props) => {
                  return (
                    <LoginField
                      {...props.input}
                      type="number"
                      variant="outlined"
                      placeholder="Номер телефона"
                      error={props.meta.error && props.meta.touched}
                      helperText={props.meta.touched ? props.meta.error : ''}
                    />
                  )
                }}
              />
              <Field
                name="firstname"
                render={(props) => {
                  return (
                    <LoginField
                      {...props.input}
                      variant="outlined"
                      placeholder="Имя"
                      error={props.meta.error && props.meta.touched}
                      helperText={props.meta.touched ? props.meta.error : ''}
                    />
                  )
                }}
              />
              <Field
                name="surname"
                render={(props) => {
                  return (
                    <LoginField
                      {...props.input}
                      variant="outlined"
                      placeholder="Фамилия"
                      error={props.meta.error && props.meta.touched}
                      helperText={props.meta.touched ? props.meta.error : ''}
                    />
                  )
                }}
              />
              <Field
                name="patronomyc"
                render={(props) => {
                  return (
                    <LoginField
                      {...props.input}
                      variant="outlined"
                      placeholder="Отчество"
                      error={props.meta.error && props.meta.touched}
                      helperText={props.meta.touched ? props.meta.error : ''}
                    />
                  )
                }}
              />
              <LoginButton type="submit" variant="contained">
                Зарегестрироваться
              </LoginButton>
            </form>
          )}
        />
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
