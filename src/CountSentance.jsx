import { useState } from "react"

const Countsentence = ()=>{
    
    const [text, setText] = useState("");
  const [character, setCharacter] = useState(0);
  const [sentence, setSentence] = useState(0);
    const handleClick=()=>{
    setCharacter(text.length)
    const sentenceCount=text.split(/[.!?]/).filter((v)=>v.trim().length>0).length
    setSentence(sentenceCount)
    }
return(
    <div>
    <h1>hello world</h1>
   text: <input type="text" value={text} onChange={(e)=>setText(e.target.value)} />
   <p>sentence:{sentence}</p>
   <h2>character:{character}</h2>
   <button onClick={handleClick}>btn</button>
    </div>

)
}
export default Countsentence