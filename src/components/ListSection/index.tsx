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

// styles import
import styles from './index.module.scss'

const ListSection = ({ resumeSectionName }: { resumeSectionName: IResumeSection }) => {
  const [showModal, setShowModal] = useState(false)

  const educationDataRedux = useAppSelector((state) => state.commonReducer.educationData)
  const workDataRedux = useAppSelector((state) => state.commonReducer.workData)
  const achievementDataRedux = useAppSelector((state) => state.commonReducer.achievementData)
  console.log({ workDataRedux })
  const getSection = () => {
    switch (resumeSectionName.value) {
      case 'education':
        return {
          data: educationDataRedux,
          form: <EducationForm data={0} onCancelCallback={() => setShowModal(false)} />
        }
      case 'work_experiences':
        return {
          data: workDataRedux,
          form: <WorkExperienceForm data={0} onCancelCallback={() => setShowModal(false)} />
        }
      case 'achievements':
        return {
          data: achievementDataRedux,
          form: <AchievementForm data={0} onCancelCallback={() => setShowModal(false)} />
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
          return <ResumeSectionItem data={item} />
        })}
      </div>

      <Modal show={showModal} hideCloseBtn onClose={() => setShowModal(false)}>
        {getSection().form}
      </Modal>
    </>
  )
}

export default ListSection
