import { useAppDispatch } from '@helpers/hooks/redux'
import { importResume } from '@redux/commonSlice'
import React, { useRef } from 'react'

import styles from './index.module.scss'

// TODO: make this component generic
const JsonImport: React.FC = () => {
  const jsonInputRef = useRef<HTMLInputElement>(null)
  const dispatch = useAppDispatch()

  const handleJsonImport = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (e) => {
        if (e.target?.result) {
          const importedData = JSON.parse(e.target.result as string)
          dispatch(importResume(importedData))
        }
      }
      reader.readAsText(file)
    }
  }

  return (
    <div className={styles.container}>
      <input
        type="file"
        accept="application/json"
        onChange={handleJsonImport}
        ref={jsonInputRef}
        style={{ display: 'none' }}
      />
      <button onClick={() => jsonInputRef.current?.click()} className={styles.importBtn}>
        Import
      </button>
    </div>
  )
}

export default JsonImport
