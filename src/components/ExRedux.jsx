import { useDispatch, useSelector } from "react-redux"

const ExRedux = () => {
    const count = useSelector((state) => state.count)

    let dispatch = useDispatch()
    return (
        <div>
            <h1>
                {count}
            </h1>

            <button onClick={() => dispatch({ type: "increment" })}>increment</button>
            <button onClick={() => dispatch({ type: "decrement" })}>decrement</button>

        </div>
    )


}
export default ExRedux