import { useState } from "react";

const GuessNumber = () => {
    const [num, setNum] = useState(0)
    const [msg, setMsg] = useState("")
    const handleClick = () => {
        if (num >= 70) {
            setMsg("to height")
        } else if (num <= 70) {
            setMsg("to lowest")
        } else {
            setMsg("enter number")
        }
    }
    return (
        <div>
            {msg}
            <h1>this GuessNumber</h1>
            number: <input type="text" value={num} onChange={(e) => setNum(e.target.value)} /><br /><br />


            <button onClick={handleClick}>GuessNumber</button>
        </div>
    )
}
export default GuessNumber;