import React from 'react'

// local component imports
import BasicButton from '@components/Buttons/BasicButton'

// icons import
import BuilderIcon from 'icons/BuilderIcon'

// styles import
import styles from './index.module.scss'
import { useAppSelector } from '@helpers/hooks/redux'
import JsonImport from '@components/JsonImport/inedx'

const Navbar = () => {
  const data = useAppSelector((state) => state.commonReducer)

  const exportData = () => {
    const jsonString = JSON.stringify(data, null, 2)
    const blob = new Blob([jsonString], { type: 'application/json' })

    const link = document.createElement('a')
    link.download = 'data.json' // Set the download attribute with a filename
    link.href = URL.createObjectURL(blob) // Create an object URL for the blob
    document.body.appendChild(link) // Append the link to the body
    link.click() // Programmatically click the link to trigger the download
    document.body.removeChild(link) // Remove the link from the document
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.leftContainer}>
        <div className={styles.headingIcon}>
          <BuilderIcon />
        </div>
        <div className={styles.heading}>Resume Builder</div>
      </div>
      <div className={styles.rightContainer}>
        {/* <BasicButton label="Import" className="" onClickFunction={() => {}} /> */}
        <JsonImport />
        <BasicButton
          label="Export"
          className={styles.exportBtn}
          onClickFunction={() => exportData()}
        />
      </div>
    </div>
  )
}

export default Navbar
