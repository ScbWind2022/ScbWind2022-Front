import Button from '@mui/material/Button'
import { Field, Form as FinalForm } from 'react-final-form'
import styled from 'styled-components'

const RadioField = ({ name, label, value }) => (
  <Label>
    <Field name={name} component="input" type="radio" value={value} />
    {label}
  </Label>
)
const Label = styled.label`
  display: flex;
  align-items: center;
  font-size: 14px;
  margin-bottom: 10px;

  input {
    margin-right: 8px;
  }
`

export const NewAccountForm = ({ onSubmit }) => (
  <FinalForm onSubmit={onSubmit}>
    {({ handleSubmit, submitting, pristine }) => (
      <Form onSubmit={handleSubmit}>
        <RadioField name="account" label="Рубли" value="rub" />
        <RadioField name="account" label="Долары" value="usd" />
        <RadioField name="account" label="Евро" value="eur" />
        <Footer>
          <Button type="submit" disabled={submitting || pristine}>
            Сохранить
          </Button>
        </Footer>
      </Form>
    )}
  </FinalForm>
)
const Form = styled.form`
  padding: 4px;
`
const Footer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-top: 1px solid #818c99;
  padding-top: 10px;
`
