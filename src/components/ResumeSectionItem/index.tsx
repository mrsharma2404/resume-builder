import React, { useState } from 'react'
import Collapsible from 'react-collapsible'

// local component imports
import Modal from '@components/PopupModal'
import EducationForm from '@components/EducationForm'
import BasicButton from '@components/Buttons/BasicButton'
import WorkExperienceForm from '@components/WorkExperienceForm'
import AchievementForm from '@components/AchievementForm'

// helpers and services import
import { IResumeSection } from '@redux/commonSlice'
import { ResumeSections } from '@helpers/constants/common'

// icons imports
import ArrowIcon from 'icons/ArrowIcon'

// styles import
import styles from './index.module.scss'

const ResumeSectionItem = ({
  resumeSectionName,
  data,
  index
}: {
  resumeSectionName: IResumeSection
  data: any
  index: number
}) => {
  const [showModal, setShowModal] = useState(false)

  const getSection = () => {
    switch (resumeSectionName.value) {
      case ResumeSections.EDUCATION:
        return (
          <EducationForm
            data={data}
            isEdit
            editIndex={index}
            onSaveCallback={() => setShowModal(false)}
            onCancelCallback={() => setShowModal(false)}
          />
        )
      case ResumeSections.WORK_EXPERIENCES:
        return (
          <WorkExperienceForm
            data={data}
            isEdit
            editIndex={index}
            onSaveCallback={() => setShowModal(false)}
            onCancelCallback={() => setShowModal(false)}
          />
        )
      case ResumeSections.ACHIEVEMENTS:
        return (
          <AchievementForm
            data={data}
            isEdit
            editIndex={index}
            onSaveCallback={() => setShowModal(false)}
            onCancelCallback={() => setShowModal(false)}
          />
        )
      default:
        return <div></div>
    }
  }

  return (
    <div className={styles.wrapper}>
      <Collapsible
        transitionTime={300}
        triggerOpenedClassName={styles.headerOpen}
        trigger={
          <div className={styles.header}>
            <div className={styles.headerLeft}>
              <div className={styles.arrowIcon}>
                <ArrowIcon />
              </div>
              <div className={styles.heading}>{data.title || data.company || data.institute}</div>
            </div>
            <div className={styles.headerRight}>
              {data.date || data.start_date} {data.start_date && data.end_date && '-'}{' '}
              {data.end_date}
            </div>
          </div>
        }
      >
        <div className={styles.mainContainer}>
          {data.role || data.degree ? (
            <div className={styles.box}>
              <div className={styles.label1}>{data.role ? 'Role' : 'Degree'}</div>
              <div className={styles.label2}>{data.role || data.degree}</div>
            </div>
          ) : null}

          <div className={styles.box}>
            <div className={styles.label1}>Description</div>
            <div className={styles.label3}>{data.description}</div>
          </div>
          <div className={styles.btnBox}>
            <BasicButton
              className={styles.btn}
              label="Edit"
              onClickFunction={() => setShowModal(true)}
            />
            <BasicButton className={styles.btn} label="Delete" onClickFunction={() => {}} />
          </div>
        </div>
      </Collapsible>

      <Modal show={showModal} hideCloseBtn onClose={() => setShowModal(false)}>
        {getSection()}
      </Modal>
    </div>
  )
}

export default ResumeSectionItem
