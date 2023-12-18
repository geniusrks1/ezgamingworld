import React from 'react'
import { signInWithGoogle } from '../../../../redux/reducer/UserReducer'
import {useDispatch} from 'react-redux'
const Login = () => {
  const dispatch=useDispatch();
  return (
    <>
    
   <h2>First Signin for Registration</h2>
   <button 
   type='button'
   className="btn btn-sm btn-outline-success"
   onClick={()=>dispatch(signInWithGoogle())} 
   >Sign In With Google</button>
    
    </>
  )
}

export default Login