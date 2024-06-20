import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

interface IResumeSection {
  value: string,
  label: string,
  id: number,
  itemCount: number // TODO: need to give it a better name
}
export interface CommonState {
  resumeSectionNameList: IResumeSection[] // TODO: it should come from API only, for now putting it here.
}

const initialState: CommonState = {
  resumeSectionNameList: [{ value: "education", label: "Education", id: 1, itemCount: 0 }, { value: "work_experiences", label: "Work Experinces", id: 2, itemCount: 0 }, { value: "achievements", label: "Achievements", id: 3, itemCount: 0 }],
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