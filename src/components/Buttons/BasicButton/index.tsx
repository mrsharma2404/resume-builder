import React from 'react'
import styles from './index.module.scss'

const BasicButton = ({
  label,
  className,
  onClickFunction
}: {
  label: string
  className: string
  onClickFunction: () => void
}) => {
  return (
    <div className={`${styles.commonStyle} ${className}`} onClick={() => onClickFunction()}>
      {label}
    </div>
  )
}

export default BasicButton
