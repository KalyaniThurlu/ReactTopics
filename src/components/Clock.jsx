
import { useState } from "react";

const CloCk = () => {
    const [msg, setMsg] = useState("");
    const [time, setTime] = useState("");
   
    

    const handleClick = () => {
        const timeNum = Number(time, 10);
        if (timeNum <= 10) {
            setMsg("good morning");
        } else if (timeNum >= 12 && timeNum < 16) {
            setMsg("good afternoon");
        } else if (timeNum >= 16) {
            setMsg("good evening");
        }
    }
        

    return (
        <div>
            <h1>This is Clock App</h1>
            <h2>{msg}</h2>
           
           
            <input
                type="text"
                onChange={(e) => setTime(e.target.value)}
            />
            <button onClick={handleClick}>Check Time</button>
        </div>
    );
};

export default CloCk;
