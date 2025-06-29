import { useCallback, useState } from "react"

const Count = () => {
    const [count, setCount] = useState(0)
    let storeMemoValue = useCallback(() => {
        return count + 2
    }, [count])
    return (
        <div>
            <p>{count}</p>
            <p>storeMemoValue:{storeMemoValue()}</p>


            <button onClick={() => setCount(count + 1)} >handleClick</button>
        </div>
    )
}
export default Count 

