import React from 'react'
import styles from  '../pages/styles/Home.module.scss'
const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <span className={styles.logo}> ezchat</span>
      
      <div className={styles.user}>
        <img src='https://media.istockphoto.com/id/466807030/photo/closeup-profile-of-business-woman-looking-forward.jpg?s=612x612&w=0&k=20&c=ob9EqIH1ZCZphVO78NdNoypd12S7UT_cwwBJotKwlxg=' alt=''/>
        <span> zyndya</span>
        <button>logout</button>
      </div>

    </div>
  )
}

export default Navbar