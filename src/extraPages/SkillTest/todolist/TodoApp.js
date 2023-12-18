import React, { useEffect, useState } from 'react'
import TodoList from './TodoList';
import TodoForm from './TodoForm';
import { getTodos, addTodo, updateTodo, deleteTodo } from './todoServices';
import styles from './TodoStyle.module.css'
const TodoApp = () => {

    const [todos, setTodos] = useState([]);
    const [currentTime, setCurrentTime] = useState(new Date());
    useEffect(() => {
      // Fetch todos from the API
      const fetchTodos = async () => {
        const fetchedTodos = await getTodos();
        setTodos(fetchedTodos);
      };
  
      fetchTodos();
    }, []);


    useEffect(() => {
        const interval = setInterval(() => {
          setCurrentTime(new Date());
        }, 1000);
    
        return () => clearInterval(interval);
      }, []);


  
    

    const handleAddTodo = async (newTodo) => {
        const addedTodo = await addTodo({
          ...newTodo,
          timeAdded: new Date().toLocaleString(), // Include timeAdded field
          completed: false,
        });
        setTodos([addedTodo, ...todos]);
      };
      
  
    const handleUpdateTodo = async (updatedTodo) => {
      const updatedTodos = todos.map(todo =>
        todo.id === updatedTodo.id ? updatedTodo : todo
      );
      await updateTodo(updatedTodo);
      setTodos(updatedTodos);
    };
  
    const handleDeleteTodo = async (id) => {
      await deleteTodo(id);
      const updatedTodos = todos.filter(todo => todo.id !== id);
      setTodos(updatedTodos);
    };



useEffect(()=>{


document.title='Todo List';
document.querySelector('link[rel="icon"]').setAttribute('href','resume-favicon.png');
},[])



return (

    <div className={styles.App}>
         <div className={styles.currentTime}>
        Current Time: {currentTime.toLocaleString()}
      </div>

      <h1 className={styles.h1}>Todo List</h1>
      <TodoForm onAddTodo={handleAddTodo} />
      <br/>
      <TodoList
        todos={todos}
        onUpdateTodo={handleUpdateTodo}
        onDeleteTodo={handleDeleteTodo}
      />
    </div>
  
  );
}

export default TodoApp




