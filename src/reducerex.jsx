import { useReducer } from "react";

let initialValue={count:0}
const exCounter=(state,action)=>{
switch(action.type){
case "increment":
    return {count:state.count+1};
    case "decrement":
        return {count:state.count-1}
default:
    return state
    }
}

const  Exreducer=()=>{
    const [state,dispatch]=useReducer(exCounter,initialValue)
    return(
        <div>
            <h1>count:{state.count}</h1>
<button onClick={()=>dispatch({type:"increment"})}>increment</button>

<button onClick={()=>dispatch({type:"decrement"})}>decrement</button>       
 </div>
    )
}
export default Exreducer;