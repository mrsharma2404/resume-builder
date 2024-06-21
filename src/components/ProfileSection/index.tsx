import React, { useState } from 'react'
import { Field, Form } from 'react-final-form'

// local component imports
import CustomTextBox from '@components/Inputs/CustomTextBox'
import CustomInput from '@components/Inputs/CustomInput'
import FormButton from '@components/Buttons/FormButton'

// services and helpers import
import { useAppDispatch, useAppSelector } from '@helpers/hooks/redux'
import { setProfileSectionData } from '@redux/commonSlice'

// styles import
import styles from './index.module.scss'
import ImageUpload from '@components/ImageUploader'
import BasicButton from '@components/Buttons/BasicButton'

const ProfileSection = () => {
  const dispatch = useAppDispatch()

  const [isEdit, setIsEdit] = useState(true)

  const profileSectionDataRedux = useAppSelector((state) => state.commonReducer.profileSectionData)
  const onSubmit = (values: any) => {
    console.log({ values })
    dispatch(setProfileSectionData(values))
    setIsEdit(false)
  }

  const validate = (values: any) => {
    return {}
  }
  console.log({ profileSectionDataRedux })

  return (
    <div className={styles.wrapper}>
      <div className={styles.imageUploadSection}>
        <ImageUpload />
      </div>
      {isEdit ? (
        <div className={styles.formSection}>
          <Form
            onSubmit={onSubmit}
            validate={validate}
            initialValues={profileSectionDataRedux}
            render={({ handleSubmit }) => {
              return (
                <form onSubmit={handleSubmit} className={styles.form}>
                  <div className={styles.mainContainer}>
                    <div className={styles.leftSection}>
                      <Field
                        name="name"
                        render={({ input }) => (
                          <CustomInput
                            type="text"
                            label="Name"
                            value={input.value}
                            onChange={input.onChange}
                          />
                        )}
                      />
                      <Field
                        name="email"
                        render={({ input }) => (
                          <CustomInput
                            label="Email-ID"
                            value={input.value}
                            onChange={input.onChange}
                          />
                        )}
                      />
                    </div>
                    <div className={styles.rightSection}>
                      <Field
                        name="short_bio"
                        render={({ input }) => (
                          <CustomTextBox
                            label="Short Bio"
                            value={input.value}
                            onChange={input.onChange}
                          />
                        )}
                      />
                    </div>
                  </div>
                  <div className={styles.bottomContainer}>
                    <FormButton type="submit">Save</FormButton>
                  </div>
                </form>
              )
            }}
          />
        </div>
      ) : (
        <div className={styles.profileSection}>
          <div className={styles.text1}>{profileSectionDataRedux.name}</div>
          <div className={styles.text2}>{profileSectionDataRedux.email}</div>
          <div className={styles.text3}>{profileSectionDataRedux.short_bio}</div>
          <BasicButton
            label="Edit"
            className={styles.editBtn}
            onClickFunction={() => setIsEdit(true)}
          />
        </div>
      )}
    </div>
  )
}

export default ProfileSection
