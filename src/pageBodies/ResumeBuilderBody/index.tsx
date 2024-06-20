import React from 'react'

// local component imports
import Navbar from '@components/Navbar'

// styles import
import styles from './index.module.scss'
import ProfileSection from '@components/ProfileSection'

const ResumeBuilderBody = () => {
  return (
    <div className={styles.wrapper}>
      <Navbar />

      <div>
        <div className={styles.profileSection}>
          <ProfileSection />
        </div>
      </div>
    </div>
  )
}

export default ResumeBuilderBody
