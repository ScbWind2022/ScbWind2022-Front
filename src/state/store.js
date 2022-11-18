import { configureStore } from '@reduxjs/toolkit'

import AuthReducer from './actions'

export const store = configureStore({
  reducer: {
    auth: AuthReducer
  }
})
