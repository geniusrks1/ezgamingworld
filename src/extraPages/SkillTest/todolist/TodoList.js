import React from 'react';
import TodoItem from './TodoItem';
import styles from './TodoStyle.module.css'

const TodoList = ({ todos, onUpdateTodo, onDeleteTodo }) => {
  return (
    <div className={styles.todo_list}>
      {todos.map(todo => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onUpdateTodo={onUpdateTodo}
          onDeleteTodo={onDeleteTodo}
        />
      ))}
    </div>
  );
};

export default TodoList;
