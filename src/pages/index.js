import { useState } from 'react'

import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import Select from '@mui/material/Select'
import {
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LineElement,
  LinearScale,
  PointElement,
  Title,
  Tooltip
} from 'chart.js'
// import faker from 'faker'
import { Line } from 'react-chartjs-2'
import styled from 'styled-components'

import ExchangeGlass from '../components/ExchangeGlass'
import Widget from '../components/Widget/Widget'

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend)

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top'
    },
    title: {
      display: true,
      text: 'График стоимости'
    }
  }
}

const labels = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15']

export const data = {
  labels,
  datasets: [
    {
      label: 'LABEL',
      data: [
        -1000, 900, 500, 100, 600, -1000, 900, 500, 100, 600, -1000, 900, 500, 100, 600, -1000, 900, 500, 100, 600
      ],
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgba(255, 99, 132, 0.5)'
    }
  ]
}

export default function Home() {
  const [currency, setCurrency] = useState('')
  const [objectSize, setObjectSize] = useState({ width: 100, height: 100 })
  const handleChange = (event) => {
    setCurrency(event.target.value)
  }

  function onResize(event, { element, size, handle }) {
    setObjectSize({ width: size.width, height: size.height })
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
        <Widget defaultPosition={{ x: 0, y: 0 }} defaultSize={{ width: 680, height: 380 }} isOpened>
          <LineGraph options={options} data={data} />
        </Widget>

        <Widget defaultPosition={{ x: 0, y: 0 }} defaultSize={{ width: 250, height: 500 }} isOpened>
          <ExchangeGlass />
        </Widget>
      </Main>
    </div>
  )
}

const LineGraph = styled(Line)`
  background: #fff;
`
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
  width: 60%;
  margin: 0 auto;
`
