import React from 'react'
import { Field, Form } from 'react-final-form'

import BasicButton from '@components/Buttons/BasicButton'
import FormButton from '@components/Buttons/FormButton'
import CustomInput from '@components/Inputs/CustomInput'
import CustomTextBox from '@components/Inputs/CustomTextBox'

// styles import
import styles from './index.module.scss'

const WorkExperienceForm = ({
  data,
  onCancelCallback
}: {
  data: any
  onCancelCallback: () => void
}) => {
  const onSubmit = (values: any) => {
    console.log({ values })
  }

  const validate = (values: any) => {
    return {}
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.heading}>Add new work experience {data}</div>

      <Form
        onSubmit={onSubmit}
        validate={validate}
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
