
// import { useState, useEffect } from "react";

// const Stopwatch = () => {
//     const [time, setTime] = useState(0);
//     const [running, setRunning] = useState(false);

//     useEffect(() => {
//         let timer;
//         if (running) {
//             timer = setInterval(() => {
//                 setTime((prevTime) => prevTime + 1);
//             }, 1000);
//         } else {
//             clearInterval(timer);
//         }

//         return () => clearInterval(timer);
//     }, [running]);

//     const startTimer = () => setRunning(true);
//     const pauseTimer = () => setRunning(false);
//     const resetTimer = () => {
//         setRunning(false);
//         setTime(0);
//     };
//     const formatTime = (seconds) => {
//         const date = new Date(seconds * 1000);
//         return date.toISOString().substr(11, 8);
//     };

//     return (
//         <div>
//             <h2>Stopwatch</h2>
//             <h3>{formatTime(time)}</h3>
//             <button onClick={startTimer}>Start</button>
//             <button onClick={pauseTimer}>Pause</button>
//             <button onClick={resetTimer}>Reset</button>
//         </div>
//     );
// };

// export default Stopwatch;


