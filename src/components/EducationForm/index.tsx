import React from 'react'
import { Field, Form } from 'react-final-form'

// local component imports
import BasicButton from '@components/Buttons/BasicButton'
import FormButton from '@components/Buttons/FormButton'
import CustomInput from '@components/Inputs/CustomInput'
import CustomTextBox from '@components/Inputs/CustomTextBox'

// helpers and services import
import { useAppDispatch, useAppSelector } from '@helpers/hooks/redux'
import { setEducationData } from '@redux/commonSlice'

// styles import
import styles from './index.module.scss'

const EducationForm = ({
  data,
  isEdit = false,
  onCancelCallback
}: {
  data: any
  isEdit?: boolean
  onCancelCallback: () => void
}) => {
  const dispatch = useAppDispatch()
  const educationDataRedux = useAppSelector((state) => state.commonReducer.educationData)

  const onSubmit = (values: any) => {
    console.log({ values })
    dispatch(setEducationData([...educationDataRedux, values]))
  }

  const validate = (values: any) => {
    return {}
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.heading}>Add new education</div>

      <Form
        onSubmit={onSubmit}
        validate={validate}
        render={({ handleSubmit }) => {
          return (
            <form onSubmit={handleSubmit}>
              <div className={styles.mainContainer}>
                <Field
                  name="institute"
                  render={({ input }) => (
                    <CustomInput
                      type="text"
                      label="Institute"
                      value={input.value}
                      onChange={input.onChange}
                    />
                  )}
                />
                <Field
                  name="degree"
                  render={({ input }) => (
                    <CustomInput label="Degree" value={input.value} onChange={input.onChange} />
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

export default EducationForm
