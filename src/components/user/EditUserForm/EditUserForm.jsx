import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import { Field, Form as FinalForm } from 'react-final-form'
import styled from 'styled-components'

const InputField = ({ name, variant, placeholder, type }) => (
  <Field name={name}>
    {({ input, meta }) => (
      <Input
        {...input}
        type={type}
        variant={variant}
        placeholder={placeholder}
        error={meta.error && meta.touched}
        helperText={meta.touched ? meta.error : ''}
      />
    )}
  </Field>
)
const Input = styled(TextField)`
  width: 100%;
  margin-bottom: 20px;
  height: 80px;
`

export const EditUserForm = ({ initialValues, onSubmit, onClose }) => (
  <FinalForm onSubmit={onSubmit} initialValues={initialValues}>
    {({ handleSubmit, submitting, pristine }) => (
      <Form onSubmit={handleSubmit}>
        <InputField name="firstname" placeholder="Имя" />
        <InputField name="surname" placeholder="Фамилия" />
        <InputField name="patronomyc" placeholder="Отчество" />
        <InputField name="phone" placeholder="Телефон" />
        <InputField name="email" placeholder="Email" />
        <InputField name="password" placeholder="Пароль" />

        <Footer>
          <Button type="submit" disabled={submitting || pristine}>
            Сохранить
          </Button>
          <Button type="button" onClick={onClose}>
            Закрыть
          </Button>
        </Footer>
      </Form>
    )}
  </FinalForm>
)
const Form = styled.form`
  padding: 10px;
`
const Footer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-top: 1px solid #818c99;
  margin-left: -10px;
  margin-right: -10px;
  padding-top: 10px;
`
