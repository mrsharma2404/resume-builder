import React, { useEffect } from 'react'

import styles from './index.module.scss'

interface ModalProps {
  show: boolean
  onClose: () => void
  children: React.ReactNode
  hideCloseBtn?: boolean
}

const Modal: React.FC<ModalProps> = ({ show, onClose, children, hideCloseBtn = false }) => {
  useEffect(() => {
    if (show) {
      document.body.classList.add(styles.noScroll)
    } else {
      document.body.classList.remove(styles.noScroll)
    }

    return () => {
      document.body.classList.remove(styles.noScroll)
    }
  }, [show])

  if (!show) return null

  return (
    <div className={styles.modalBackdrop} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        {!hideCloseBtn && (
          <button className={styles.closeButton} onClick={onClose}>
            &times;
          </button>
        )}
        {children}
      </div>
    </div>
  )
}

export default Modal
