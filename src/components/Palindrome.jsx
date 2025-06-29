


import { useRef, useState } from "react"

const Palindrome = () => {
    const inputRef = useRef(null);
    const [result, setResult] = useState(null);

    const checkPalindrome = () => {
        const inputValue = inputRef.current.value;
        const cleanedInput = inputValue.replace();
        const reversedInput = cleanedInput.split("").reverse().join("");
        setResult(cleanedInput === reversedInput);
    };

    return (
        <div>
            <h2>Palindrome Checker</h2>
            name:<input
                type="text"
                ref={inputRef}
            />
            <button onClick={checkPalindrome} >
                Check
            </button>


            <p> {result ? " It's a palindrome" : " not a palindrome."} </p>
        </div>
    );
};

export default Palindrome;


