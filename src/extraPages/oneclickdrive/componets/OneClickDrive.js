import React from 'react'
import styles from './Onclick.module.css'
import { useEffect } from 'react'
const OneClickDrive = () => {


  useEffect(()=>{
    document.title="OneClickDrive";
    document.querySelector('link[rel="icon"]').setAttribute('href', 'globe.png')
},[])

    
  return (
    <div className={styles.outerContainer}>
    <div className={styles.container}>
    <div className={styles.first} >
        <img src='/static/images/cardrive.jpg' alt='load drive'/>
    </div>




    <div className={`${styles.second} ${styles.hideforSmallScreen}`}>
<div className={styles.content}>
  <div className={styles.safe}>
  <div className={styles.left}>
    <h2>Safe Driver</h2>
    <div className={styles.logos}>
      <img src="/static/images/1.svg" alt="Logo 1"/>
      <img src="/static/images/money.svg" alt="Logo 2"/>
      <img src="/static/images/3.svg" alt="Logo 3"/>
      <img src="/static/images/4.svg" alt="Logo 4"/>
    </div>
  </div>

  <div className={`${styles.leftD} ${styles.hideforBigScreen}`}>
<img src='/static/images/5.svg' alt=''/>
</div>

  <div className={`${styles.right} ${styles.hideforSmallScreen}`}></div>
  </div>

<div className={`${styles.drive} ${styles.hideforSmallScreen}`}>

<div className={styles.leftD}>
<img src='/static/images/5.svg' alt=''/>
</div>

 <div className={styles.rightD}>
        <div className={styles.message}>
            <img src='/static/images/7.svg' alt="Tickmark"/>
            <span>Avoid spending on taxi fares</span>
        </div>
        <div className={styles.message}>
            <img src='/static/images/7.svg' alt="Tickmark"/>
            <span>Available 24x7</span>
        </div>
        <div className={styles.message}>
            <img src='/static/images/7.svg' alt="Tickmark"/>
            <span>Advance Booking Recommended</span>
        </div>
    </div>
</div>

</div>



<div className={`${styles.contact} ${styles.hideforSmallScreen}`}>
<div className={styles.contactbox}>
<div className={`${styles.logo} ${styles.logo1}`}>

    <img src="/static/images/8.svg" alt="Calling Logo"/>
  </div>
  <div className={`${styles.logo} ${styles.logo2}`}>
   
    <img src="/static/images/9.svg" alt="WhatsApp Logo"/>
  </div>
  <div className={`${styles.logo} ${styles.logo3}`}>
    
    <img src="/static/images/10.svg" alt="Telegram Logo"/>
  </div>
</div>

</div>


    </div>


 
    <div className={`${styles.secondS} ${styles.hideforBigScreen}`}>
  <div className={styles.left}>
    <h2>Safe Driver</h2>
    <div className={styles.logos}>
      <img src="/static/images/1.svg" alt="Logo 1"/>
      <img src="/static/images/money.svg" alt="Logo 2"/>
      <img src="/static/images/3.svg" alt="Logo 3"/>
      <img src="/static/images/4.svg" alt="Logo 4"/>
    </div>
  </div>

  <div className={`${styles.leftD} ${styles.hideforBigScreen}`}>
<img src='/static/images/5.svg' alt=''/>
</div>
  </div>







    <div className={`${styles.third} ${styles.hideforSmallScreen}`}>

      <div className={styles.location}>
    <div className={styles.addr}> AED 80</div>
        <div className={styles.message2}>
          <img src='/static/images/6.svg' alt=''/>
          <span>One-way</span>
        </div>
      </div>
     
      <div className={styles.location}>
      <div className={styles.addr}>AED 150</div>
        <div className={styles.message2}>
          <img src='/static/images/6.svg' alt=''/>
          <span>Two-way</span>
        </div>
      </div>
    </div>


    <div className={`${styles.forth} ${styles.hideforBigScreen}`}>
        <div className={styles.message}>
            <img src='/static/images/7.svg' alt="Tickmark"/>
            <span>Avoid spending on taxi fares</span>
        </div>
        <div className={styles.message}>
            <img src='/static/images/7.svg' alt="Tickmark"/>
            <span>Available 24x7</span>
        </div>
        <div className={styles.message}>
            <img src='/static/images/7.svg' alt="Tickmark"/>
            <span>Advance Booking Recommended</span>
        </div>
    </div>


    <div className={`${styles.fifth} ${styles.hideforBigScreen}`}>
<div className={`${styles.logo} ${styles.logo1}`}>

    <img src="/static/images/8.svg" alt="Calling Logo"/>
  </div>
  <div className={`${styles.logo} ${styles.logo2}`}>
   
    <img src="/static/images/9.svg" alt="WhatsApp Logo"/>
  </div>
  <div className={`${styles.logo} ${styles.logo3}`}>
    
    <img src="/static/images/10.svg" alt="Telegram Logo"/>
  </div>
</div>







    </div>
    </div>
  )
}

export default OneClickDrive