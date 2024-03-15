import React from 'react'

import styles from './MessageLayout.module.css'

const MessageLayout = ({children}) => {
  return (
    <div className={styles["Message-container"]}>
      {children}
    </div>
  )
}

export default MessageLayout