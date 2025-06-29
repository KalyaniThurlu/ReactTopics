import { useReducer } from "react"

let initialState = { count: 0 }
const Counter = (state, action) => {

    switch (action.type) {

        case "increment":
            return { count: state.count + 1 };

        case "decrement":
            return { count: state.count - 1 }


    }
}

const Exreducer = () => {
    const [state, dispatch] = useReducer(Counter, initialState)

    return (
        <div>
            {state.count}
            <button onClick={() => dispatch({ type: "increment" })}>increment</button>
            <button onClick={() => dispatch({ type: "decrement" })}>decrement</button>
        </div>
    )
}

export default Exreducer