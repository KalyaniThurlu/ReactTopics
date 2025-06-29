

// import { useState } from "react";

import { useState } from "react"


// const FlashcardsApp = () => {
//     const flashcards = [
//         { question: "What is 2+2?", answer: "4" },
//         { question: "What is 1+1?", answer: "2" },
//     ];

//     const [currentIndex, setCurrentIndex] = useState(0);
//     const [score, setScore] = useState(0);
//     const [userAnswer, setUserAnswer] = useState("");
//     const [quizFinished, setQuizFinished] = useState(false);

//     const handleNextCard = () => {
//         if (userAnswer === flashcards[currentIndex].answer) {
//             setScore(score + 1); // Increment score if answer is correct
//         }

//         // If there are more questions, move to the next one
//         if (currentIndex + 1 < flashcards.length) {
//             setCurrentIndex(currentIndex + 1);
//         } else {
//             setQuizFinished(true); // End quiz after the last question
//         }

//         setUserAnswer(""); // Reset input field after each question
//     };

//     return (
//         <div>
//             {!quizFinished ? (
//                 <div>
//                     <h2>{flashcards[currentIndex].question}</h2>
//                     <input
//                         type="text"
//                         placeholder="Type your answer"
//                         value={userAnswer}
//                         onChange={(e) => setUserAnswer(e.target.value)}
//                     />
//                     <button onClick={handleNextCard}>Next</button>
//                 </div>
//             ) : (
//                 <div>
//                     <h2>Quiz Finished!</h2>
//                     <p>Your score is: {score} out of {flashcards.length}</p>
//                 </div>
//             )}
//         </div>
//     );
// };

// export default FlashcardsApp;


const QuizApp = () => {
    const flashcards = [
        { questions: "what is 2+2?", anwer: "4" },
        { questions: "what is HTML?", anwer: "Hyper Text Markup Language" }
    ]
    const [userAnswer, setUserAnswer] = useState("")
    const [currentIndex, setCurrentIndex] = useState(0)
    const [score, setScore] = useState(0)
    const [quizFinished, setQuizFinished] = useState(0)


    const handleClick = () => {
        if (userAnswer === flashcards[currentIndex].anwer) {
            setScore(score + 1)
        }

        if (currentIndex + 1 < flashcards.length) {
            setCurrentIndex(currentIndex + 1)

        } else {
            setQuizFinished(true)
        }
        setUserAnswer("")
    }
    return (
        <div>
            <h1>this is flashcards component</h1>
            {!quizFinished ? (
                <div>
                    <h1>{flashcards[currentIndex].questions}</h1>

                    <input type="text" value={userAnswer} onChange={(e) => setUserAnswer(e.target.value)} />
                    <button onClick={handleClick}>next</button>
                </div>
            ) : (
                <div>
                    <h1>your score {score} is{flashcards.length} </h1>
                </div>
            )}

        </div>
    )
}
export default QuizApp