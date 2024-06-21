import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface IResumeSection {
  value: string,
  label: string,
  id: number,
  itemCount: number // TODO: need to give it a better name
}
export interface CommonState {
  resumeSectionNameList: IResumeSection[] // TODO: it should come from API only, for now putting it here.
  educationData: any[]
  workData: any[]
  achievementData: any[]

}

const initialState: CommonState = {
  resumeSectionNameList: [{ value: "education", label: "Education", id: 1, itemCount: 0 }, { value: "work_experiences", label: "Work Experinces", id: 2, itemCount: 0 }, { value: "achievements", label: "Achievements", id: 3, itemCount: 0 }],
  educationData: [],
  workData: [],
  achievementData: []
}

export const commonSlice = createSlice({
  name: 'common',
  initialState,
  reducers: {
    setEducationData: (state, action) => {
      state.educationData = action.payload
      return state
    },
    setWorkData: (state, action) => {
      state.workData = action.payload
      return state
    },
    setAchievementData: (state, action) => {
      state.achievementData = action.payload
      return state
    },
  },
})

// Action creators are generated for each case reducer function
export const { setEducationData, setWorkData, setAchievementData } = commonSlice.actions

export default commonSlice.reducer