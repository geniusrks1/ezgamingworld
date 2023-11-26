import React, { useState } from 'react';
import styles from './TodoStyle.module.css'

const TodoForm = ({ onAddTodo }) => {
  const [title, setTitle] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim()) {
      onAddTodo({
        title: title.trim(),
        completed: false // Assuming initial completion status
      });
      setTitle('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form_container}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Add Todo..."
      />
      <button type="submit" className={styles.button}>Add</button>
    </form>
  );
};

export default TodoForm;
