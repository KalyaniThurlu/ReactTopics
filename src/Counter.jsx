
// import { useState } from "react";

// const Counter = () => {
//   const [count, setCount] = useState(0);

//   const countIncrement = () => {
//     setCount(count + 1);
//   };

//   const countDecrement = () => {

//     setCount(count - 1);
//   };

//   return (
//     <div>
//       <h2>Count: {count}</h2>
//       <button onClick={countIncrement}>Increment</button>
//       <button onClick={countDecrement}>Decrement</button>
//     </div>
//   );
// };

// export default Counter;

const Exkeys = () => {
  const numbers = [1, 2, 3, 4, 5];

  return (
    <div>
      <ul>
        {numbers.map((number) => (
          <li key={number}>{number}</li>
        ))}
      </ul>
    </div>
  );
};

export default Exkeys;
