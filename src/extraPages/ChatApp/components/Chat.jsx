import React from 'react'
import styles from  '../pages/styles/Home.module.scss'
import Cam from '../img/cam.png';
import Add from '../img/add.png';
import More from '../img/more.png'
import Input from './Input';
import Messages from './Messages'
const Chat = () => {
  return (
    <div className={styles.chat} >
<div className={styles.chatInfo}>
  <span> Jane</span>
<div className={styles.chatIcons}>
  <img src={Cam} alt=""/>
  <img src={Add} alt=""/>
  <img src={More} alt=""/>

</div>

</div>
<Messages/>
<Input/>

    </div>
  )
}

export default Chat