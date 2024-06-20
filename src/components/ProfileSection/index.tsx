import React from 'react'
import Dropzone from 'react-dropzone'
import { Field, Form } from 'react-final-form'

// local component imports
import CustomTextBox from '@components/Inputs/CustomTextBox'
import CustomInput from '@components/Inputs/CustomInput'

// icons import

// styles import
import styles from './index.module.scss'

const ProfileSection = () => {
  const onSubmit = (values: any) => {
    console.log({ values })
  }

  const validate = (values: any) => {
    return {}
  }
  return (
    <div className={styles.wrapper}>
      <Form
        onSubmit={onSubmit}
        validate={validate}
        render={({ handleSubmit }) => {
          return (
            <form onSubmit={handleSubmit}>
              <div className={styles.mainContainer}>
                <div className={styles.leftSection}>
                  <Dropzone onDrop={(acceptedFiles) => console.log(acceptedFiles)}>
                    {({ getRootProps, getInputProps }) => (
                      <section>
                        <div {...getRootProps()}>
                          <input {...getInputProps()} />
                          <p>Drag 'n' drop some files here, or click to select files</p>
                        </div>
                      </section>
                    )}
                  </Dropzone>
                </div>
                <div className={styles.middleSection}>
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
                      <CustomInput label="Email-ID" value={input.value} onChange={input.onChange} />
                    )}
                  />
                </div>
                <div className={styles.rightSection}>
                  <Field
                    name="name"
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

              <button type="submit">Submit</button>
            </form>
          )
        }}
      />
    </div>
  )
}

export default ProfileSection
