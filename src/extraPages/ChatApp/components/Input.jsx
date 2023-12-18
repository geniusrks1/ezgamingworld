import React from 'react'
import styles from  '../pages/styles/Home.module.scss';
import Attach from '../img/attach.png';
import Img from '../img/img.png'
const Input = () => {
  return (
    <div className={styles.input}>
<input type='text' placeholder='Type Something...'/>
<div className={styles.send}>
  <img src={Attach} alt=''/>
  <input type='file' style={{display:"none"}} id='file'/>
  <label htmlFor='file'>
    <img src={Img} alt=''/>
  </label>
  <button>Send</button>

</div>

    </div>
  )
}

export default Input