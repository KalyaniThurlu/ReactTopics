
// import { useState } from "react";

import { useState } from "react"

// const CurdOperations = () => {
//   const [items, setItems] = useState([]);
//   const [inputs, setInputs] = useState("");
//   const [updatedItem, setUpdatedItem] = useState(null);

//   const handleClick = () => {
//     if (updatedItem !== null) {
//       const updatedItems = items.map((item, index) =>
//         index === updatedItem ? inputs : item
//       );
//       setItems(updatedItems);

//       setUpdatedItem(null);
//       setInputs("");
//     } else {

//       setItems([...items, inputs]);
//       setInputs("");
//     }
//   };

//   const handleDelete = (index) => {
//     setItems(items.filter((_, i) => i !== index));
//   };

//   const handleUpdate = (index) => {
//     setInputs(items[index]);
//     setUpdatedItem(index);
//   };

//   return (
//     <div>
//       <h1>Hello</h1>
//      name: <input
//         type="text"
//         value={inputs}
//         placeholder="enter text"
//         onChange={(e) => setInputs(e.target.value)}
//       />
//       <br />
//       <button onClick={handleClick}>
//         {updatedItem !== null ? "Update" : "Add"}
//       </button>

//       <ul>
//         {items.map((item, index) => (
//           <li key={index}>
//             {item}{" "}
//             <button onClick={() => handleUpdate(index)}>Update</button>{" "}
//             <button onClick={() => handleDelete(index)}>Delete</button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default CurdOperations;


const Curdoparation1 = () => {
  const [items, setItems] = useState([]);
  const [inputs, setInputs] = useState("");
  const [updatedItem, setUpdatedItem] = useState(null);

  const handleClick = () => {
    

    if (updatedItem !== null) {
      const updatedItems = items.map((item, index) =>
        index === updatedItem ? inputs : item
      );
      setItems(updatedItems);
      setUpdatedItem(null);
    } else {
      setItems([...items, inputs]);
    }

    setInputs("");
  };

  const addData = (index) => {
    setInputs(items[index]); // Show selected value in input
    setUpdatedItem(index);   // Store index to update
  };

  const deleteData = (index) => {
    setItems(items.filter((_, i) => i !== index)); // Fixed condition
  };

  return (
    <div>
      <h2>This is Curdoparation</h2>
      <input
        type="text"
        value={inputs}
        onChange={(e) => setInputs(e.target.value)}
      />
      <br />
      <button onClick={handleClick}>
        {updatedItem !== null ? "Update" : "Add"}
      </button>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            {item}
            &nbsp;
            <button onClick={() => addData(index)}>Edit</button>
            <button onClick={() => deleteData(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Curdoparation1;
