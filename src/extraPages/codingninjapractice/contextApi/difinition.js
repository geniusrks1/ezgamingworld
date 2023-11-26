// The Context API in React is a way to manage state and pass data through the component tree without having to explicitly pass props manually at every level. It's useful when multiple components need access to the same data. Here are the steps to use the Context API:

// 1. Create a Context
// First, you create a context using React's createContext function. This creates a context object that will hold the shared data.

// javascript
// Copy code
// import React from 'react';

// const MyContext = React.createContext();
// 2. Provide the Context
// Wrap the components that need access to this context within a Provider. This Provider component allows its children to subscribe to the context changes.

// javascript
// Copy code
// <MyContext.Provider value={/* your shared data */}>
//   {/* Your components that will consume the context */}
// </MyContext.Provider>
// 3. Consume the Context
// Components that need access to the context can consume it using either useContext hook or by using the Consumer component.

// Using useContext hook (functional components):
// javascript
// Copy code
// import React, { useContext } from 'react';

// const MyComponent = () => {
//   const contextData = useContext(MyContext);

//   // Use contextData here
// };
// Using Consumer component (class components or functional components):
// javascript
// Copy code
// <MyContext.Consumer>
//   {contextData => {
//     // Use contextData here
//   }}
// </MyContext.Consumer>
// Example:
// javascript
// Copy code
// import React, { createContext, useContext } from 'react';

// // Step 1: Create a Context
// const ThemeContext = createContext();

// // Step 2: Provide the Context
// const App = () => {
//   const theme = 'light'; // Your shared data

//   return (
//     <ThemeContext.Provider value={theme}>
//       {/* Step 3: Components that will consume the context */}
//       <Navbar />
//       <Content />
//     </ThemeContext.Provider>
//   );
// };

// // Step 3: Consume the Context
// const Navbar = () => {
//   const theme = useContext(ThemeContext);

//   return <nav style={{ background: theme === 'light' ? '#fff' : '#333' }}>Navbar</nav>;
// };

// const Content = () => {
//   return (
//     <ThemeContext.Consumer>
//       {theme => <div style={{ color: theme === 'light' ? '#333' : '#fff' }}>Content</div>}
//     </ThemeContext.Consumer>
//   );
// };

// export default App;