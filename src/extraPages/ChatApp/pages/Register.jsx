import React from 'react'
import styles from './styles/Home.module.scss'
import Add from '../img/addAvatar.png'
import { signInWithEmailAndPassword } from "firebase/auth";
import {auth} from '../../../firebaseinit'
const Register = () => {

const handleSubmit=(e)=>{
  e.preventDefault();
  // const displayName=e.target[0].value;
  const email=e.target[1].value;
  const password=e.target[2].value;
  // const file=e.target[3].value;


  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error("Error code:", errorCode);
      console.error("Error message:", errorMessage);
    });
    



}


  return (
    <div className={styles.formContainer}>
        <div className={styles.formWrapper}>
            <span className={styles.logo}>EZ CHAT</span>
            <span className={styles.title}>Register</span>
            <form onSubmit={handleSubmit}>
<input type='text' placeholder='Enter your name' />
<input type='email' placeholder='email'/>
<input type='password' placeholder='password'/>
{/* <label htmlFor='file'>
   <img src={Add} alt='upload img'/>
   <span>Add Your Image</span>
   
   </label>
<input  style={{display:"none"}} type='file' id='file'/> */}
<button>Sign Up</button>
            </form>
            <p> You do have account?Login </p>
        </div>
    </div>
  )
}

export default Register