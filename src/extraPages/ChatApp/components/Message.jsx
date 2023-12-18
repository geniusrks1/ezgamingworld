import React from 'react'
import styles from  '../pages/styles/Home.module.scss';
const Message = () => {
  return (
    <div className={styles.message}>
     <div className={styles.messageInfo}>
      <img src='https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w1200/2023/10/free-images.jpg'
      alt=''
      />
<span>just now</span>
     </div>
<div className={styles.messageContent}>
  <p>hello</p>
  <img src='https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w1200/2023/10/free-images.jpg'
  />
  
</div>

    </div>
  )
}

export default Message