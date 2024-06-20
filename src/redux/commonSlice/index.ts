import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface CommonState {
  value: number
}

const initialState: CommonState = {
  value: 0,
}

export const commonSlice = createSlice({
  name: 'common',
  initialState,
  reducers: {

  },
})

// Action creators are generated for each case reducer function
export const { } = commonSlice.actions

export default commonSlice.reducer