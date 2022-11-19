import * as React from 'react'

import styled from 'styled-components'

export default function Register() {
  return (
    <View>
      <Header>
        <div>HEADER</div>
        <div>Сcылки</div>
      </Header>
    </View>
  )
}
const View = styled.div``

const Header = styled.div`
  width: 100%;
  height: 100px;
  background: #1976d2;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
`
