import React from 'react'
import styles from  '../pages/styles/Home.module.scss'
const Search = () => {
  return (
    <div className={styles.search}>
      <div className={styles.searchForm}>
        <input type='text'/>
      </div>
    <div className={styles.userChat}>
      <img src='https://media.istockphoto.com/id/466807030/photo/closeup-profile-of-business-woman-looking-forward.jpg?s=612x612&w=0&k=20&c=ob9EqIH1ZCZphVO78NdNoypd12S7UT_cwwBJotKwlxg='
      alt=''/>
<div className={styles.userChatInfo}>
<span>Jane</span>
</div>
    </div>

    </div>
  )
}

export default Search