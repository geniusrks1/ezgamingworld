import React from 'react'
import styles from './styles/Home.module.scss'
import Sidebar from '../components/Sidebar'
import Chat from '../components/Chat'

const Home = () => {
  return (
    <div className={styles.home}>
      <div className={styles.container}>
        <Sidebar  />
        <Chat />
      </div>
    </div>
   
  )
}

export default Home