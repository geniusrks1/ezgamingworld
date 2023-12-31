import React from 'react'
import NavBar from '../NavBar/NavBar'
import TodoList from '../ToDoList/ToDoList'
import TodoForm from '../ToDoForm/TodoForm'

const TodoHome = () => {
  return (
    <>      <div style={{
      backgroundColor:"white",
      width:"100vw",
      height:"100vh"
      }}>
             <NavBar />
             <h1>To Dos</h1>
              <TodoForm  />
              <TodoList />
              </div>
    </>
  )
}

export default TodoHome