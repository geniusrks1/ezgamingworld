import React from 'react'
import styles from './adminPanel.module.css'
import {useDispatch} from 'react-redux';
import { signout } from '../redux/reducer/UserReducer';
import {  toast } from "react-toastify";
import NewBgmiTournament from './NewBgmiTournament';
const AdminPanel = () => {
  const dispatch=useDispatch();
  return (
    <div className={styles.adminpanel}>
      <nav> 
         <button
      onClick={()=> {dispatch(signout()).then(()=> toast.success("Loged out successfully!")) 
    }}
      >
        logout</button>
        </nav>
<NewBgmiTournament/> 
     </div>
  )
}

export default AdminPanel