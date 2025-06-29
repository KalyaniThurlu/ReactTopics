import { createStore } from "redux";

let initialStore = { count: 0 };
const Counter = (state = initialStore, action) => {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
      default:
        return state
  }
 
  
};
let store = createStore(Counter);
export default store
