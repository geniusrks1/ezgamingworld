

import React, { useState } from 'react';
import styles from './TodoStyle.module.css';

const TodoItem = ({ todo, onUpdateTodo, onDeleteTodo }) => {
  const [editing, setEditing] = useState(false);
  const [title, setTitle] = useState(todo.title);

  const handleEdit = () => {
    setEditing(true);
  };

  const handleSave = () => {
    onUpdateTodo({
      ...todo,
      title: title.trim() || todo.title,
    });
    setEditing(false);
  };

  const handleDelete = () => {
    onDeleteTodo(todo.id);
  };

  const handleCompletion = () => {
    onUpdateTodo({
      ...todo,
      completed: !todo.completed,
    });
  };

  return (
    <div className={styles.todo_item}>
      <div>
        <div>
          <div>{todo.title}</div>

          {todo.timeAdded && (
  <div>Added: {todo.timeAdded}</div>
)}

         
        </div>
        <div>
          {!todo.completed && (
            <button onClick={handleEdit} className={styles.edit_button}>
              Edit
            </button>
          )}
          <button onClick={handleDelete} className={styles.delete_button}>
            Delete
          </button>
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={handleCompletion}
          />
          <span>{todo.completed ? 'Completed' : 'Mark Complete'}</span>
        </div>
      </div>
      {editing && (
        <div>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <button onClick={handleSave} className={styles.save_button}>
            Save
          </button>
        </div>
      )}
    </div>
  );
};

export default TodoItem;
