
import { useState } from "react";
const  FindingDays =() =>{
  const [date,setDate] =useState("")
  const [day,setDay] =useState("")
  const findDay =() =>{
    const d =new Date(date)

    const days =["sunday","monday","Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    setDay(days[d.getDay()])
  }
  return(
    <div>
      <h2>hello</h2>
date:<input type="date" value={date} onChange={(e) =>setDate(e.target.value)} /><br/>
<button onClick={findDay}>findDay</button>
<h2>{day}</h2>
    </div>
  )
}

export default FindingDays;