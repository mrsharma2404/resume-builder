import React from 'react'

// styles import
import styles from './index.module.scss'

const CustomTextBox = ({
  isRequired = false,
  value,
  onChange,
  placeholder,
  label,
  wrapperClassName,
  labelClassName,
  inputClassName
}: {
  isRequired?: boolean
  value: string
  onChange: (e: string) => void
  placeholder?: string
  label?: string
  wrapperClassName?: string
  labelClassName?: string
  inputClassName?: string
}) => {
  return (
    <div className={`${styles.wrapper} ${wrapperClassName}`}>
      {label && <label className={`${styles.label} ${labelClassName}`}>{label}</label>}
      <textarea
        required={isRequired}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className={`${styles.input} ${inputClassName}`}
      />
    </div>
  )
}
export default CustomTextBox
