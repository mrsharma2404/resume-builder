import UploadIcon from 'icons/UploadIcon'
import React, { useState, useRef } from 'react'
import styles from './index.module.scss'

const ImageUpload: React.FC = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null)
  const [preview, setPreview] = useState<string | null>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      setSelectedFile(file)
      const reader = new FileReader()
      reader.onloadend = () => {
        setPreview(reader.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  const handleDivClick = () => {
    fileInputRef.current?.click()
  }

  const handleUpload = async () => {
    if (!selectedFile) return

    const formData = new FormData()
    formData.append('file', selectedFile)

    // Replace the URL with your API endpoint
    const response = await fetch('/api/upload', {
      method: 'POST',
      body: formData
    })

    if (response.ok) {
      console.log('File uploaded successfully')
    } else {
      console.error('File upload failed')
    }
  }

  return (
    <div className={styles.container}>
      <input
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        ref={fileInputRef}
        style={{ display: 'none' }}
      />
      <div className={styles.uploadDiv} onClick={handleDivClick}>
        {preview ? (
          <img src={preview} alt="Preview" className={styles.previewImage} />
        ) : (
          <div className={styles.uploadBox}>
            <div className={styles.uploadIcon}>
              <UploadIcon />
            </div>
            <div className={styles.uploadLabel}>Upload Image</div>
          </div>
        )}
      </div>
      {/* Uncomment this button if you want to handle upload separately */}
      {/* <button onClick={handleUpload}>Upload Image</button> */}
    </div>
  )
}

export default ImageUpload
