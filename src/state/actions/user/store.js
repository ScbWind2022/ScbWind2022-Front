import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  user: {
    firstname: 'Ivan',
    surname: 'Ivanov',
    patronomyc: 'Ivanovich',
    phone: '+7 (999) 999-99-99',
    email: 'user@email.com',
    password: '111111',
    account: '1200',
    currency: 'руб'
  },
  isOpen: false
}

const { actions, reducer } = createSlice({
  name: 'user',
  initialState,

  reducers: {
    setUserInfo: (state, action) => {
      state.user = action.payload
    },
    setOpenDialog: (state, action) => {
      state.isOpen = action.payload
    }
  }
})

export const { setUserInfo, setOpenDialog } = actions
export default reducer
