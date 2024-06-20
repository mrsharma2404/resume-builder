import React from 'react'

// styles import
import styles from './index.module.scss'

type supportedInputType = string | number
const CustomInput = ({
  isRequired = false,
  value,
  onChange,
  placeholder,
  label,
  wrapperClassName,
  labelClassName,
  type = 'text',
  inputClassName
}: {
  isRequired?: boolean
  value: supportedInputType
  onChange: (e: supportedInputType) => void
  placeholder?: string
  label?: string
  wrapperClassName?: string
  labelClassName?: string
  type?: 'text' | 'number' | 'email'
  inputClassName?: string
}) => {
  return (
    <div className={`${styles.wrapper} ${wrapperClassName}`}>
      {label && <label className={`${styles.label} ${labelClassName}`}>{label}</label>}
      <input
        required={isRequired}
        value={value}
        type={type}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className={`${styles.input} ${inputClassName}`}
      />
    </div>
  )
}

export default CustomInput
