import React from 'react'

// local component imports
import BasicButton from '@components/Buttons/BasicButton'

// icons import
import BuilderIcon from 'icons/BuilderIcon'

// styles import
import styles from './index.module.scss'

const Navbar = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.leftContainer}>
        <div className={styles.headingIcon}>
          <BuilderIcon />
        </div>
        <div className={styles.heading}>Resume Builder</div>
      </div>
      <div className={styles.rightContainer}>
        <BasicButton label="Import" className="" onClickFunction={() => {}} />
        <BasicButton label="Export" className={styles.exportBtn} onClickFunction={() => {}} />
      </div>
    </div>
  )
}

export default Navbar
