import { useState } from 'react'

import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import Select from '@mui/material/Select'
import styled from 'styled-components'

export default function Register() {
  const [currency, setCurrency] = useState('')

  const handleChange = (event) => {
    setCurrency(event.target.value)
  }

  return (
    <div>
      <Header>
        <div>HEADER</div>
        <div>Сcылки</div>
      </Header>
      <Main>
        <FormWrapper>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Валюта</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={currency}
              label="currency"
              onChange={handleChange}>
              <MenuItem value={10}>USD</MenuItem>
              <MenuItem value={20}>RUB</MenuItem>
              <MenuItem value={30}>EUR</MenuItem>
            </Select>
          </FormControl>
        </FormWrapper>
      </Main>
    </div>
  )
}

const FormWrapper = styled.div`
  width: 100px;
`

const Header = styled.div`
  width: 100%;
  height: 100px;
  background: #1976d2;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
`

const Main = styled.div`
  padding-top: 50px;
  width: 65%;
  margin: 0 auto;
`
