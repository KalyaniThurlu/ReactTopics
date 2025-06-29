// 1 . What are the limitations of React in building large-scale applications?
//  A   React is great for building UI, but in large-scale applications, we may face some challenges.
//      State management complexity (Redux, Context API).
//      Frequent re-renders affect performance.
//   2.  How does React manage the Virtual DOM, and what are the benefits? 
//   A.   Creates a lightweight copy of the DOM and updates only changed parts.
//       Increases performance by avoiding direct DOM updates   
      
//   3. Can React Hooks fully replace Redux for state management? Explain why or why not?
   
//   A. React Hooks like useState and useContext can manage state efficiently in small to medium applications.
//      However, Redux is better for complex applications where global state management, middleware, and debugging tools are required.
 
//       Why Hooks Can Replace Redux:

//      For simple apps: useState and useContext can manage state effectively.
//      Less boilerplate: Hooks provide a simpler way to manage local and global state.
     
//       Why Hooks Cannot Fully Replace Redux:
//      Lack of Middleware: No built-in support for async actions (like Redux Thunk).
//     Performance Issues: Context API can cause unnecessary re-renders in deeply nested components.


//  5. How would you optimize performance in a React app with large component trees? 
  
//   A.To optimize performance in a large React app, I use:
//    React.memo to prevent unnecessary re-renders.


//    useMemo & useCallback to optimize functions and values.

//    Lazy loading to load components only when needed.
   
//  6. Explain React's Strict Mode and its impact on development?
//    A)React Strict Mode is a development tool that helps identify potential problems in your React application.
//     It does not affect production builds but enables extra checks and warnings 
//     Identifying unsafe lifecycle methods
//     Detecting side effects in useEffect (by running it twice in development)
//      Finding deprecated APIs
     
//  7. How can you prevent unnecessary re-renders in React functional components?
//  A. useCallback(fn, [deps]) → Memoizes functions to avoid re-creating them on every render.
//     useMemo(value, [deps]) → Memoizes computed values to avoid unnecessary recalculations.
  
  
//  8. Describe the key differences between functional and class components in React?
//  A. Functional: Uses hooks (useState, useEffect), simpler, better performance.
//     Class: Uses this.state, lifecycle methods
//     Modern React prefers functional components!
 
//  9. What is the significance of the React Fiber architecture?

//  A. Concurrent rendering for smoother UI updates.
//     Better reconciliation with task prioritization.
//     Interruptible rendering for faster responses.
 
//  10.  How does React handle side effects, and how can you manage them effectively?
//  A .  React handles side effects using the useEffect hook. It runs after rendering and can manage tasks like data fetching, 
//       subscriptions, or DOM updates.
//  11. Explain the differences between useMemo() and useCallback() in React?
//  A.  useMemo(): Memoizes the result of a function to optimize expensive calculations.
//      useCallback(): Memoizes the function itself to prevent unnecessary re-creation   
     
// 12. How would you implement dynamic form handling and validation in React? 
// A.  Use useState for form state
//     Handle multiple inputs dynamically
//   Validate fields on change or submit

// 13. What is lazy loading in React, and how does it improve application performance?
// A.  Lazy loading in React is a technique to load components only when they are needed, 
//     reducing the initial bundle size and improving performance
    
// 14. How would you handle errors in a React app, and what is the role of error boundaries?
// A.  Handling Errors in React:
//     Use try-catch for handling errors in event handlers and async functions.
//    Use Error Boundaries for catching errors in the component tree. 
//    Role of Error Boundaries:
//   Catches JavaScript errors in child components.
//   Works only for rendering, lifecycle methods, and constructors, not for event handlers or async code.  
  
// 15. What are the benefits of server-side rendering (SSR) in React applications?
// A. Faster Page Load – Pre-renders content on the server, reducing the time to first paint.
//    SEO Improvement – Search engines can crawl fully rendered pages easily.
//    Improved User Experience – Content is available immediately, even on slow networks. 
   
// 16. How do you handle styling in React components? Discuss different approaches?

// A. "In React, we have multiple approaches for styling components, each with its own use case:

//      CSS Stylesheets – Import .css files globally.
//      Inline Styles – Use the style prop for quick styling. 
//       CSS Modules – Helps with scoped styles and avoids conflicts.
      
//       Styled Components – A CSS-in-JS approach for dynamic styling.
// Tailwind CSS – A utility-first framework for fast styling.

// 17. How would you pass data between sibling components in React without using Redux?
// A . You can pass data between sibling components using React Context API

// 18. Explain the use case of useEffect() for fetching data from an API?
//  A. useEffect is used to fetch data when a component mounts,
//     ensuring side effects like API calls run only when needed.
    
// 19. How do you handle asynchronous operations in React using async/await or Promises?
// A.  Use useEffect with async/await or Promises to fetch data and update state.
    
// 20. How would you re-render a component when the window is resized?
// A .Use the useState and useEffect hooks to listen for the resize event and update the state accordingly?

// 21. Describe how React Context API can be used for state management in an app?
// A. React Context API allows sharing state globally without prop drilling.
//    It is useful for managing themes, authentication, and user preferences.
 
// 22. What is the role of React Router, and how does it work with dynamic routing?
// A. React Router enables navigation between different pages without reloading the app. 
//    It manages URL changes and renders components accordingly.
//    Dynamic Routing means rendering components based on dynamic parameters in the URL.
 
// 23. Explain the concept of controlled and uncontrolled components in React?
// A. Controlled Component: The component’s state is controlled by React using useState.
//    Uncontrolled Component: The component maintains its own state using useRef

// 24. How would you optimize React app performance when handling large lists or grids?
// A.  Use Virtualization: Render only visible items using libraries like react-window or react-virtualized.
//    Optimize Rendering: Use React.memo, useCallback, and useMemo to prevent unnecessary re-renders.


// 25. Explain the difference between shallow and deep comparison in React's shouldComponentUpdate?
// A. Shallow Comparison: Checks if object references are the same. Faster but may not detect nested changes.
//    Deep Comparison: Checks all properties deeply, detecting changes in nested objects but is slower.
     
    
// 26. How do you handle asynchronous code execution and state updates in React?
// A .Use async/await inside useEffect and update state using useState.
   
     
     
// 27. How would you implement custom hooks to abstract logic in React?
// A. A custom hook in React is a function that encapsulates reusable logic using built-in hooks like useState and useEffect. 
//    It helps keep components clean and reusable.
   
  
// 28. What are higher-order components (HOCs) in React, and how are they used?
//  A.  Higher-Order Component (HOC) is a function that takes a component and returns an enhanced component. 
//      It is used for code reuse, logic abstraction, and enhancing components without modifying their structure.
  
  
// 29. How would you implement a search feature with debouncing in React?
// A.  Debouncing prevents excessive function calls by delaying execution until a user stops typing. 
//     It improves performance by reducing unnecessary renders.
  
// 30. Explain React's reconciliation process and how it updates the DOM efficiently?
// A. "React's reconciliation process updates only the changed parts of the DOM by using the Virtual DOM and a diffing algorithm,
//     improving  performance."