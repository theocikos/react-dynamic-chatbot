import React from 'react'
import Header from './Components/Header'
import styles from './styles.module.css'

export const Chatbot = ({ headerTitle }) => {
  return <div className={styles.container}>
    <Header title={headerTitle} />
  </div>
}
