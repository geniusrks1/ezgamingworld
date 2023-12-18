import React from 'react'
import styles from  '../pages/styles/Home.module.scss';
import Message from './Message';
const Messages = () => {
  return (
    <div className={styles.messages}>
      <Message/>
      <Message/>
      <Message/>
      <Message/>
      <Message/>
      <Message/>

      <Message/>
      
    </div>
  )
}

export default Messages