import React, { useState } from 'react'
import { useDispatch ,useSelector} from "react-redux";
import styles from "./ToDoForm.module.css";
import { addTodoAsync } from '../../../../../src/redux/reducer/todoReducer'
import { notificationSelector,resetNotification } from '../../../../redux/reducer/notificationReducer';
const TodoForm = () => {
    const[todoText,setTodoText]=useState("");
    const dispatch=useDispatch();
    const message = useSelector(notificationSelector);

    if(message){
      setTimeout(()=>{
        dispatch(resetNotification());
      }, 3000);
    }




const handleSubmit=(e)=>{
    e.preventDefault();
    setTodoText("");
    // dispatch(actions.add(todoText));
    dispatch(addTodoAsync(todoText));
}

  return (
    <div className={styles.container}>
           {
        message && 
        <div class="alert alert-success" role="alert">
          {message}
        </div>
      }
<form onSubmit={handleSubmit}>
    <input
    type='text'
    className='form-control mb-3'
    value={todoText}
    onChange={(e)=>setTodoText(e.target.value)}
    />

    <button 
    className="btn btn-success float-end" 
    type="submit">Create Todo</button>
    </form>

    </div>
  )
}

export default TodoForm;