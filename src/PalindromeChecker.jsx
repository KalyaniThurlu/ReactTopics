import { useState } from "react";

const PalindromeChecker =()=>{
    const [text,setText] =useState("")
      const [rst,setRst] =useState("")
    const handleClick  =() =>{
        const reversed=text.split("").reverse().join("")
       if(text===reversed){
setRst("this is palindrome")
       }else{
        setRst("this is not palindrome")
       }
    }
return(

   
  <div>
  <h1>this is palindrome Checker</h1>
 text: <input type="text" value={text} onChange={(e) =>setText(e.target.value)} /><br/>
 <h2>{rst}</h2>
 <button onClick={handleClick}>Check palindrome</button>

  
  </div>  

)
}
export default PalindromeChecker;