import React, { useEffect, useState  } from 'react'
import Style from "./Login.module.css"
import { onChangeHandler , clearInputs } from '../../Utils/util_functions'


import { useNavigate ,useLocation} from 'react-router-dom'
import { useDispatch,useSelector } from 'react-redux'

import { signInWithGoogle,userSelector,signIn  } from "../../../../redux/reducer/UserReducer"
const Login = () => {

  const navigate=useNavigate();
  const {user}= useSelector(userSelector);
  const dispatch=useDispatch();
  const location = useLocation();
  const currentPath = location.pathname;

  const [signInData, setSignInData] = useState({});

  const handleSubmit = (e)=>{
    e.preventDefault();
    dispatch(signIn(signInData));
    clearInputs('sign-in-inp');
};


useEffect(() => {
  if (user) {
    if (currentPath === '/ecommerce/signin') {
      navigate('/ecommerce');
    } else {
      navigate('/');
    }
  }
}, [user,currentPath, navigate]);



  return (
    <div className={Style.container}>
    <form>

    <input type="email" 
    className='sign-in-inp' name="email" id="email" 
    placeholder='Enter Email' 
    onChange={(e)=> onChangeHandler(e.target , signInData , setSignInData)} 
    required
    />

    <input type="password" className='sign-in-inp' name="password" id="password" 
    placeholder='Enter Password'
    onChange={(e)=> onChangeHandler(e.target , signInData , setSignInData)}
    required
    />
      <button type="submit" className="btn btn-sm btn-outline-success" 
      onClick={handleSubmit}>Sign In</button>
            

        <button type="button" className="btn btn-sm btn-outline-success" 
       onClick={()=>dispatch(signInWithGoogle())} >
          Sign In With Google</button>


          <button type="button" className="btn btn-sm btn-outline-success" 

onClick={() => (currentPath === '/ecommerce/signin' ? navigate('/ecommerce/signup') : navigate('/'))}

          
          >Sign Up</button>
      
    </form>
</div>
  )
}

export default Login