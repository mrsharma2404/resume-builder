import React, { ReactNode } from 'react'
import styles from './index.module.scss'

export interface IFormButton {
  children: ReactNode
  type: 'button' | 'submit' | 'reset'
  isDisabled?: boolean
  className?: string
  formId?: string
}

const FormButton = ({ children, isDisabled = false, className, formId, type }: IFormButton) => {
  return (
    <button
      form={formId && formId}
      disabled={isDisabled}
      type={type}
      className={`${styles.commonStyle} ${className ? className : ''}`}
    >
      {children}
    </button>
  )
}

export default FormButton
