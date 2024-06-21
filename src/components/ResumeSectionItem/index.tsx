import React, { useState } from 'react'
import Collapsible from 'react-collapsible'

import Modal from '@components/PopupModal'
import EducationForm from '@components/EducationForm'
import BasicButton from '@components/Buttons/BasicButton'

// icons imports
import ArrowIcon from 'icons/ArrowIcon'

// styles import
import styles from './index.module.scss'

const ResumeSectionItem = ({ data }: { data: any }) => {
  const [showModal, setShowModal] = useState(false)

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
              <div className={styles.heading}>Arkham Institute of Technology, Bangalore</div>
            </div>
            <div className={styles.headerRight}>May 2014 - Feb 2017</div>
          </div>
        }
      >
        <div className={styles.mainContainer}>
          <div className={styles.box}>
            <div className={styles.label1}>Degree</div>
            <div className={styles.label2}>Masters in Technology</div>
          </div>
          <div className={styles.box}>
            <div className={styles.label1}>Description</div>
            <div className={styles.label3}>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
              has been the industry's standard dummy text ever since the 1500s, when an unknown
              printer took a galley of type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into electronic typesetting,
              remaining essentially unchanged. It was popularised in the 1960s with the release of
              Letraset sheets.
            </div>
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
        <EducationForm data={data} onCancelCallback={() => setShowModal(false)} />
      </Modal>
    </div>
  )
}

export default ResumeSectionItem
