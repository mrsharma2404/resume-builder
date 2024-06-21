import React from 'react'
import { Field, Form } from 'react-final-form'

// local component imports
import BasicButton from '@components/Buttons/BasicButton'
import FormButton from '@components/Buttons/FormButton'
import CustomInput from '@components/Inputs/CustomInput'
import CustomTextBox from '@components/Inputs/CustomTextBox'

// helpers and services import
import { useAppDispatch, useAppSelector } from '@helpers/hooks/redux'
import { setAchievementData } from '@redux/commonSlice'

// styles import
import styles from './index.module.scss'

const AchievementForm = ({
  data,
  isEdit = false,
  editIndex,
  onSaveCallback,
  onCancelCallback
}: {
  data: any
  isEdit?: boolean
  editIndex?: number | undefined
  onSaveCallback: () => void
  onCancelCallback: () => void
}) => {
  const dispatch = useAppDispatch()

  const achievementDataRedux = useAppSelector((state) => state.commonReducer.achievementData)

  const onSubmit = (values: any) => {
    if (isEdit && editIndex != undefined) {
      let tempData = [...achievementDataRedux]
      tempData[editIndex] = values
      dispatch(setAchievementData(tempData))
    } else {
      dispatch(setAchievementData([...achievementDataRedux, values]))
    }
    onSaveCallback()
  }
  const validate = (values: any) => {
    return {}
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.heading}>{isEdit ? 'Edit' : 'Add'} new achievement </div>

      <Form
        onSubmit={onSubmit}
        validate={validate}
        initialValues={data}
        render={({ handleSubmit }) => {
          return (
            <form onSubmit={handleSubmit}>
              <div className={styles.mainContainer}>
                <Field
                  name="title"
                  render={({ input }) => (
                    <CustomInput
                      type="text"
                      label="Title"
                      value={input.value}
                      onChange={input.onChange}
                    />
                  )}
                />
                <Field
                  name="date"
                  render={({ input }) => (
                    <CustomInput label="Date" value={input.value} onChange={input.onChange} />
                  )}
                />

                <Field
                  name="description"
                  render={({ input }) => (
                    <CustomTextBox
                      label="Description"
                      value={input.value}
                      onChange={input.onChange}
                    />
                  )}
                />
              </div>
              <div className={styles.bottomContainer}>
                <FormButton type="submit">Save</FormButton>
                <BasicButton
                  onClickFunction={onCancelCallback}
                  className={styles.cancelBtn}
                  label="Cancel"
                />
              </div>
            </form>
          )
        }}
      />
    </div>
  )
}

export default AchievementForm
