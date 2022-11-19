import React from 'react'

import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import styled from 'styled-components'

export default function ExchangeGlass() {
  function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein }
  }
  const rows = [
    createData(159, 6.0, 24),
    createData(9.0, 37, 4.3),
    createData(16.0, 24, 6.0),
    createData(3.7, 67, 4.3),
    createData(16.0, 49, 3.9)
  ]

  return (
    <View component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center">Покупка</TableCell>
            <TableCell align="center">Цена</TableCell>
            <TableCell align="center">Продажа</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              <TableCell align="center">{row.name}</TableCell>
              <TableCell align="center">{row.calories}</TableCell>
              <TableCell align="center">{row.fat}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </View>
  )
}

const View = styled(TableContainer)`
  width: 300px;
  border: 1px solid #1976d2;

  & th {
    width: 33%;
    border-right: 1px solid #1976d2;

    :last-child {
      border-right: none;
    }
  }
  & tr td {
    width: 33%;
    border-right: 1px solid #1976d2 !important;

    :last-child {
      border-right: none !important;
    }
  }
`
