import React from 'react'
import styles from './styles/Home.module.scss'

const Login = () => {
  return (
    <div className={styles.formContainer}>
        <div className={styles.formWrapper}>
            <span className={styles.logo}>EZ CHAT</span>
            <span className={styles.title}>Login</span>
            <form>

<input type='email' placeholder='email'/>
<input type='password' placeholder='password'/>
<button>Sign In</button>
 </form>
            <p> You don't have account?Register </p>
        </div>
    </div>
  )
}

export default Login