import React, { useState } from 'react'

// local component imports
import BasicButton from '@components/Buttons/BasicButton'
import ResumeSectionItem from '@components/ResumeSectionItem'
import Modal from '@components/PopupModal'
import EducationForm from '@components/EducationForm'
import AchievementForm from '@components/AchievementForm'
import WorkExperienceForm from '@components/WorkExperienceForm'

// helpers
import { useAppSelector } from '@helpers/hooks/redux'
import { IResumeSection } from '@redux/commonSlice'
import { ResumeSections } from '@helpers/constants/common'

// styles import
import styles from './index.module.scss'

const ListSection = ({ resumeSectionName }: { resumeSectionName: IResumeSection }) => {
  const [showModal, setShowModal] = useState(false)

  const educationDataRedux = useAppSelector((state) => state.commonReducer.educationData)
  const workDataRedux = useAppSelector((state) => state.commonReducer.workData)
  const achievementDataRedux = useAppSelector((state) => state.commonReducer.achievementData)

  const getSection = () => {
    switch (resumeSectionName.value) {
      case ResumeSections.EDUCATION:
        return {
          data: educationDataRedux,
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
            <ResumeSectionItem index={index} resumeSectionName={resumeSectionName} data={item} />
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
