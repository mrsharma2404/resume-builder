import React from 'react'
import { Field, Form } from 'react-final-form'

// local component imports
import BasicButton from '@components/Buttons/BasicButton'
import FormButton from '@components/Buttons/FormButton'
import CustomInput from '@components/Inputs/CustomInput'
import CustomTextBox from '@components/Inputs/CustomTextBox'

// helpers and services import
import { useAppDispatch, useAppSelector } from '@helpers/hooks/redux'
import { setWorkData } from '@redux/commonSlice'

// styles import
import styles from './index.module.scss'

const WorkExperienceForm = ({
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

  const workDataRedux = useAppSelector((state) => state.commonReducer.workData)

  const onSubmit = (values: any) => {
    if (isEdit && editIndex != undefined) {
      let workData = [...workDataRedux]
      workData[editIndex] = values
      dispatch(setWorkData(workData))
    } else {
      dispatch(setWorkData([...workDataRedux, values]))
    }
    onSaveCallback()
  }

  const validate = (values: any) => {
    return {}
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.heading}>{isEdit ? 'Edit' : 'Add'} new work experience</div>

      <Form
        onSubmit={onSubmit}
        validate={validate}
        initialValues={data}
        render={({ handleSubmit }) => {
          return (
            <form onSubmit={handleSubmit}>
              <div className={styles.mainContainer}>
                <Field
                  name="company"
                  render={({ input }) => (
                    <CustomInput
                      type="text"
                      label="Company"
                      value={input.value}
                      onChange={input.onChange}
                    />
                  )}
                />
                <Field
                  name="role"
                  render={({ input }) => (
                    <CustomInput label="Role" value={input.value} onChange={input.onChange} />
                  )}
                />

                <div className={styles.row}>
                  <Field
                    name="start_date"
                    render={({ input }) => (
                      <CustomInput
                        label="Start date"
                        value={input.value}
                        onChange={input.onChange}
                      />
                    )}
                  />
                  <Field
                    name="end_date"
                    render={({ input }) => (
                      <CustomInput label="End date" value={input.value} onChange={input.onChange} />
                    )}
                  />
                </div>

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

export default WorkExperienceForm
