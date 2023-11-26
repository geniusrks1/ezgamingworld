const BASE_URL = 'https://jsonplaceholder.typicode.com/todos';

// Function to fetch todos
export const getTodos = async () => {
  try {
    const response = await fetch(BASE_URL);
    if (!response.ok) {
      throw new Error('Failed to fetch todos');
    }
    const todos = await response.json();
    return todos;
  } catch (error) {
    console.error('Error fetching todos:', error.message);
    return [];
  }
};

// Function to add a todo
export const addTodo = async (newTodo) => {
  try {
    const response = await fetch(BASE_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newTodo),
    });
    if (!response.ok) {
      throw new Error('Failed to add todo');
    }
    const addedTodo = await response.json();
    return addedTodo;
  } catch (error) {
    console.error('Error adding todo:', error.message);
    return null;
  }
};

// Function to update a todo
export const updateTodo = async (updatedTodo) => {
  try {
    const { id, ...rest } = updatedTodo;
    const response = await fetch(`${BASE_URL}/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(rest),
    });
    if (!response.ok) {
      throw new Error('Failed to update todo');
    }
    const updated = await response.json();
    return updated;
  } catch (error) {
    console.error('Error updating todo:', error.message);
    return null;
  }
};

// Function to delete a todo
export const deleteTodo = async (id) => {
  try {
    const response = await fetch(`${BASE_URL}/${id}`, {
      method: 'DELETE',
    });
    if (!response.ok) {
      throw new Error('Failed to delete todo');
    }
    return true; // Deletion successful
  } catch (error) {
    console.error('Error deleting todo:', error.message);
    return false;
  }
};
