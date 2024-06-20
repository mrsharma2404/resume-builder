import React from 'react'

// local component imports
import Navbar from '@components/Navbar'

// styles import
import styles from './index.module.scss'
import ProfileSection from '@components/ProfileSection'
import MainSection from '@components/MainSection'

const ResumeBuilderBody = () => {
  return (
    <div className={styles.wrapper}>
      <Navbar />

      <div>
        <div className={styles.profileSection}>
          <ProfileSection />
        </div>
        <div>
          <MainSection />
        </div>
      </div>
    </div>
  )
}

export default ResumeBuilderBody
