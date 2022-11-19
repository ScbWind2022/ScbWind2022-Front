import React, { useState } from 'react'

import styled from 'styled-components'

import SystemModal from './SystemModal'

const SystemModalContext = React.createContext({
  systemModals: [],
  setSystemModals: () => {}
})

export const SystemModalContextProvider = ({ children }) => {
  const [systemModals, setSystemModals] = useState([])

  return (
    <SystemModalContext.Provider value={{ systemModals, setSystemModals }}>
      {systemModals.length !== 0 && (
        <View>
          {systemModals.map((item, index) => (
            <SystemModal
              key={index}
              title={item?.title || ''}
              id={item.id}
              description={item?.description || ''}
              setSystemModals={setSystemModals}
            />
          ))}
        </View>
      )}
      {children}
    </SystemModalContext.Provider>
  )
}

const View = styled.div`
  position: fixed;
  z-index: 2;
  bottom: 0;
  right: 20px;
`

export default SystemModalContext
