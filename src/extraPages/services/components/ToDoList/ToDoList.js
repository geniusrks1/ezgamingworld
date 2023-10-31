import React, { useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux";
import styles from './ToDoList.module.css'
import { todoSelector,actions, getInitialState } from '../../../../redux/reducer/todoReducer'
// import axios from "axios";

const ToDoList = () => {
    const todos=useSelector(todoSelector)
    const disptach=useDispatch();
      // const todos= store.getState().todos;
      useEffect(() => {
        // fetch("http://localhost:4100/api/todos")
        //   .then(res => {
        //     if (!res.ok) {
        //       throw new Error(`HTTP error! status: ${res.status}`);
        //     }
        //     return res.json();
        //   })
        //   .then(parsedJson => {
        //     disptach(actions.setInitialState(parsedJson));
        //     // console.log(parsedJson);
        //   })
        //   .catch(error => {
        //     console.error("Fetch Error:", error);
        //   });


        disptach(getInitialState());
      }, []);

    //   useEffect(() => {
    //     fetch("http://localhost:4100/api/todos")
    //       .then(res=>res.json())
    //         .then(parsedJson=>{
    //           console.log(parsedJson);
    //         })
    //     // axios.get("http://localhost:4100/api/todos")
    //     //   .then(res=>
    //     //       {
    //     //         console.log(res.data);
    //     //       }
    //     //     );
    // }, []);


      

    return (
    <div className={styles.container}>
 <ul>
      {todos.map((todo,index) => (
        <li className={styles.item} key={todo.id}>
          <span className={styles.content}>{todo.text}</span>
          <span className={todo.completed ? styles.completed:styles.pending}>{todo.completed ? 'Completed': 'Pending'}</span>
          <button className="btn btn-warning"
          onClick={()=>{disptach(actions.toggle(index))}}
          >Toggle</button>
          </li>
      ))}
    </ul>


    </div>
  )
}

export default ToDoList