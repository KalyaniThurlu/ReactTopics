
//1. What is the use of package.json file?
// A. The package.json file is used to manage project dependencies, scripts, 
//    and metadata in Node.js and JavaScript projects, ensuring consistent 
//   environments across different systems.

// 2. What is ReactJS and what is the verson of React you are using?
// A.ReactJS is a JavaScript library for building user interfaces with reusable components.
//   It is used for web Applications .It allows developers in spa(singal page appllications)
//   version of react.js is 19 verstion

// 3. What are the advantages of react?
// A. Fast & Efficient – Uses Virtual DOM for better performance.
//    Reusable Components – Build once, use multiple times.
//    Easy to Learn – Uses simple JavaScript (JSX)
//    One-Way Data Binding – Makes code predictable and easy to debug.
//   Strong Community Support – Lots of libraries and help available.

// 4. What is a component?
// A. A component in React is a reusable piece of UI that can have its own logic, structure, and styling. 
//    Functional Component – Uses functions and hooks 
//   Class Component – Uses ES6 classes and lifecycle methods.
 
// 5. What is JSX?
// A. JSX (JavaScript XML) is a syntax extension for JavaScript that allows writing HTML-like code inside JavaScript. 
//    It makes React components more readable and easier to write.
   
// 6. What are props in react?
// A. Props (Properties) in React are used to pass data from a parent component to a child component. 
//    They are read-only and help make components reusable.
   
// 7. What is state in react?
// A.
// 8. What is the use of Keys in react?
// A. keys are major  role in virtual dom with the help of keys recognige witch part upatde in browser dom
// 9. What is the Virtual DOM?

// 10. What is Difference betweeen Virtual DOM and Real DOM?
// A.  Virtual DOM is a lightweight copy of the Real DOM.
//     Virtual DOM updates only the changed parts, making it faster.
//     Real DOM updates the entire structure, making it slower.


// 11. What are Differennt React Life Cycle methods?
  
// 12. What are Different Types of Hooks available in react and How they will work?
// A. useState – Manages state.
//   useEffect – Handles side effects.
//   useContext – Accesses context.
//   useRef – References DOM.
//   useReducer – Manages complex state.
//   useCallback & useMemo – Optimize performance.
// 13. What is useState How it will work?
// A. useState is a React Hook that allows you to manage state in a functional component.
//    Import useState from React.
// Call useState(initialValue), which returns an array with:
// Current state value
// Function to update state
// Update state using the setter function.
//  When the button is clicked, setCount updates the state, and React re-renders the component.
// 14. What is useEffect How it will work?
// A. useEffect is a React Hook that handles side effects like fetching data, 
//     updating the DOM, or setting up subscriptions in functional components.
    
// 15. What is callback function?
// A. A callback function is a function that is passed as an argument to another function and is executed later.
//     Used for asynchronous operations (e.g., API calls, event handling).
//     Ensures one function runs after another.
//     Common in setTimeout, event listeners, and higher-order functions.
// 16. What is arrow function?
// A .  Arrow functions were introduced in ES6 and provide a shorter and cleaner way to write functions.
//      Easy to read and write
//     No separate this context
//     Great for callbacks and array methods

// 18. What is difference between Arrow Function and normal function?
// 19. How to make API Call in react?
// A.   You can make an API call in React using fetch or axios, usually inside useEffect.
  
// 20. How did you find API is returned Success or Failure?

// 21. What are Different types of HTTP Methods are available?
// A. GET – Retrieves data from a server.
//   POST – Sends data to the server (e.g., creating a resource).
//   PUT – Updates a resource completely.
//  PATCH – Partially updates a resource.
//  DELETE – Removes a resource.
 
// 22. When to use GET, When to use POST, When to use PUT, When use DELETE?
// A. GET → Use when retrieving data (e.g., fetching user details).
// POST → Use when creating new data (e.g., adding a new user).
// PUT → Use when updating e
// xisting data completely (e.g., updating user profile).
// DELETE → Use when removing data (e.g., deleting a user).

// 23. What are Different types HTTP Status Codes are available?
// A. 1xx (Informational) → Processing request (e.g., 100 Continue).
//   2xx (Success) → Request successful (e.g., 200 OK, 201 Created).
//   3xx (Redirection) → Further action needed (e.g., 301 Moved Permanently, 304 Not Modified).
//   4xx (Client Error) → Error from client side (e.g., 400 Bad Request, 401 Unauthorized, 404 Not Found).
//   5xx (Server Error) → Error from server side (e.g., 500 Internal Server Error, 503 Service Unavailable).
  
// 24. How to rendar data using map function?

// A. "In React, we use the map function to iterate over an array and render elements dynamically. 
//    Each item should have a unique key for efficient updates."
   
// 25. What is the use of StrictMode in react?
// A. StrictMode in React helps identify potential problems in an application by highlighting unsafe lifecycle methods,
//    detecting side effects, and enforcing best practices.
   
// 26. What is React Router?
// A.  React Router is a library used for handling navigation in React applications. 
//   It enables single-page applications (SPAs) to have multiple views by managing routes without reloading the page.
  
// 27. What is Cookie?
// A."A cookie is a small piece of data stored in the browser to remember user information, 
//  like login sessions and preferences. It helps websites track user activity and improve the browsing experience."
 
// 28. What are Controlled and UnControlled Components?
// A.  "In React, a Controlled Component is one where the form elements are controlled by React state, using useState. 
//      Uncontrolled Component relies on the DOM itself, using useRef to access values directly."
     
// 29. What is Hoisting in javascript?
// A. "Hoisting in JavaScript is a behavior where variable and function declarations are moved to the top of their scope during execution. 
//   However, only the declarations are hoisted, not the initializations."
// 30. What are HTML5 features?
// A. "HTML5 introduced features like semantic elements (<header>, <footer>, <section>), audio and video support, 
//   canvas for graphics, local storage, new form controls, and better accessibility."
  
// 31. What is BOX Model?
// 32. What is difference between Flexbox and Grid?
// 33. What are different types are selectors are available?
// 34. What is difference between  val ,let and const?
// 35. What is Promise? What are different types of stages of it?
// 36. What is difference between axios and fetch?