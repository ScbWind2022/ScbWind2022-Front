import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  user: {
    role: null,
    isAuthorized: false,
    username: ''
  }
}

const { actions, reducer } = createSlice({
  name: 'auth',
  initialState,

  reducers: {
    authorization: (state, action) => {
      state.user = action.payload
    }
  }
})

export const { authorization } = actions
export default reducer
