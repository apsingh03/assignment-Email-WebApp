import { configureStore } from '@reduxjs/toolkit'
import emailSlice from './Slice/emailSlice'

export const store = configureStore({
  reducer: {
    email: emailSlice,

  },
})