import { ResumeSections } from '@helpers/constants/common'
import { createSlice } from '@reduxjs/toolkit'

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
  profileSectionData: any
}
const resumeSectionNameListInitialValue = [
  { value: ResumeSections.EDUCATION, label: "Education", id: 1, itemCount: 0 },
  { value: ResumeSections.WORK_EXPERIENCES, label: "Work Experinces", id: 2, itemCount: 0 },
  { value: ResumeSections.ACHIEVEMENTS, label: "Achievements", id: 3, itemCount: 0 }
]

const initialState: CommonState = {
  educationData: [],
  workData: [],
  achievementData: [],
  profileSectionData: {},
  resumeSectionNameList: resumeSectionNameListInitialValue
}

export const commonSlice = createSlice({
  name: 'common',
  initialState,
  reducers: {

    importResume: (state, action: { payload: any }) => {
      state = action.payload
      return state
    },

    setProfileSectionData: (state, action: { payload: any }) => {
      state.profileSectionData = action.payload
      return state
    },
    setEducationData: (state, action: { payload: any[] }) => {
      state.educationData = action.payload
      let section = state.resumeSectionNameList.find(section => section.value === "education")
      if (section) section.itemCount = action.payload.length
      return state
    },
    setWorkData: (state, action: { payload: any[] }) => {
      state.workData = action.payload
      let section = state.resumeSectionNameList.find(section => section.value === "work_experiences")
      if (section) section.itemCount = action.payload.length
      return state
    },
    setAchievementData: (state, action: { payload: any[] }) => {
      state.achievementData = action.payload
      let section = state.resumeSectionNameList.find(section => section.value === "achievements")
      if (section) section.itemCount = action.payload.length
      return state
    },
  },
})

// Action creators are generated for each case reducer function
export const { setEducationData, setWorkData, setAchievementData, setProfileSectionData, importResume } = commonSlice.actions

export default commonSlice.reducer