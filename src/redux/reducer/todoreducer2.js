// // reducer.js
// import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// export const fetchTodos = createAsyncThunk('todos/fetchTodos', async () => {
//   const response = await fetch('https://jsonplaceholder.typicode.com/todos');
//   const data = await response.json();
//   return data;
// });

// // export const addTodo = createAsyncThunk('todos/addTodo', async (newTodo) => {
// //   const response = await fetch('https://jsonplaceholder.typicode.com/todos', {
// //     method: 'POST',
// //     body: JSON.stringify(newTodo),
// //     headers: {
// //       'Content-Type': 'application/json',
// //     },
// //   });
// //   const data = await response.json();
// //   return data;
// // });

// // export const updateTodo = createAsyncThunk('todos/updateTodo', async (updatedTodo) => {
// //   const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${updatedTodo.id}`, {
// //     method: 'PUT',
// //     body: JSON.stringify(updatedTodo),
// //     headers: {
// //       'Content-Type': 'application/json',
// //     },
// //   });
// //   const data = await response.json();
// //   return data;
// // });

// // export const deleteTodo = createAsyncThunk('todos/deleteTodo', async (todoId) => {
// //   await fetch(`https://jsonplaceholder.typicode.com/todos/${todoId}`, {
// //     method: 'DELETE',
// //   });
// //   return todoId;
// // });

// export const todosSlice = createSlice({
//   name: 'todos',
//   initialState: [],
//   reducers: {},
//   extraReducers: (builder) => {
//     builder
//       .addCase(fetchTodos.fulfilled, (state, action) => {
//         return action.payload;
//       })
//       // .addCase(addTodo.fulfilled, (state, action) => {
//       //   state.push(action.payload);
//       // })
//       // .addCase(updateTodo.fulfilled, (state, action) => {
//       //   const updatedIndex = state.findIndex((todo) => todo.id === action.payload.id);
//       //   if (updatedIndex !== -1) {
//       //     state[updatedIndex] = action.payload;
//       //   }
//       // })
//       // .addCase(deleteTodo.fulfilled, (state, action) => {
//       //   const deletedIndex = state.findIndex((todo) => todo.id === action.payload);
//       //   if (deletedIndex !== -1) {
//       //     state.splice(deletedIndex, 1);
//       //   }
//       // });
//   },
// });

// // export default todosSlice.reducer;


// export const todoReducer=todosSlice.reducer;

// export const actions = todosSlice.actions;

// // selector
// export const todoSelector = (state)=>state.todoReducer.todos;

