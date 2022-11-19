import { configureStore } from '@reduxjs/toolkit'

import reducers from './actions'

export const store = configureStore({
  reducer: {
    ...reducers
  }
})
