import React, { useState } from 'react'

// local component imports
import BasicButton from '@components/Buttons/BasicButton'
import ResumeSectionItem from '@components/ResumeSectionItem'
import Modal from '@components/PopupModal'
import EducationForm from '@components/EducationForm'
import AchievementForm from '@components/AchievementForm'
import WorkExperienceForm from '@components/WorkExperienceForm'

// helpers
import { useAppDispatch, useAppSelector } from '@helpers/hooks/redux'
import {
  IResumeSection,
  setAchievementData,
  setEducationData,
  setWorkData
} from '@redux/commonSlice'
import { ResumeSections } from '@helpers/constants/common'

// styles import
import styles from './index.module.scss'

const ListSection = ({ resumeSectionName }: { resumeSectionName: IResumeSection }) => {
  const dispatch = useAppDispatch()
  const [showModal, setShowModal] = useState(false)

  const educationDataRedux = useAppSelector((state) => state.commonReducer.educationData)
  const workDataRedux = useAppSelector((state) => state.commonReducer.workData)
  const achievementDataRedux = useAppSelector((state) => state.commonReducer.achievementData)

  const getSection = () => {
    switch (resumeSectionName.value) {
      case ResumeSections.EDUCATION:
        return {
          data: educationDataRedux,
          setData: setEducationData,
          form: (
            <EducationForm
              onSaveCallback={() => setShowModal(false)}
              data={0}
              onCancelCallback={() => setShowModal(false)}
            />
          )
        }
      case ResumeSections.WORK_EXPERIENCES:
        return {
          data: workDataRedux,
          setData: setWorkData,
          form: (
            <WorkExperienceForm
              onSaveCallback={() => setShowModal(false)}
              data={0}
              onCancelCallback={() => setShowModal(false)}
            />
          )
        }
      case ResumeSections.ACHIEVEMENTS:
        return {
          data: achievementDataRedux,
          setData: setAchievementData,
          form: (
            <AchievementForm
              onSaveCallback={() => setShowModal(false)}
              data={0}
              onCancelCallback={() => setShowModal(false)}
            />
          )
        }
      default:
        return { data: [], form: <div></div> }
    }
  }

  const handleDelete = (index: number) => {
    let section = getSection()
    let workData = [...section.data]
    workData.splice(index, 1)
    if (section.setData && typeof section.setData == 'function') {
      dispatch(section.setData(workData))
    }
  }

  return (
    <>
      <BasicButton
        label="Add new"
        onClickFunction={() => setShowModal(true)}
        className={styles.addBtn}
      />
      <div className={styles.sectionItemList}>
        {getSection().data.map((item, index) => {
          return (
            <ResumeSectionItem
              handleDelete={handleDelete}
              index={index}
              resumeSectionName={resumeSectionName}
              data={item}
            />
          )
        })}
      </div>

      <Modal show={showModal} hideCloseBtn onClose={() => setShowModal(false)}>
        {getSection().form}
      </Modal>
    </>
  )
}

export default ListSection
