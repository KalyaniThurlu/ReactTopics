
// import { useState } from "react"

import { useState } from "react"

// const Calculator = () => {
//     const [data, setData] = useState({
//         num1: "", num2: "", operator: "", rst: ""
//     })
//     const { num1, num2 } = data
//     let n1 = Number(num1), n2 = Number(num2), rst = ""


//     const getResults = (operator) => {

//         if (operator === "+") {
//             rst = n1 + n2

//         } else if (operator === "-") {
//             rst = n1 - n2
//         } else {
//             rst = "invalida oparation"
//         }
//         setData({ ...data, rst })
//     }
//     const clearData = () => {
//         setData({ num1: "", num2: "", operator: "", rst })
//     }

//     return (
//         <div>
//             <h1>hello</h1>
//             num1:<input type="text" value={data.num1} onChange={(e) => setData({ ...data, num1: e.target.value })} /><br />
//             num2:<input type="text" value={data.num2} onChange={(e) => setData({ ...data, num2: e.target.value })} /><br />
//             operator: <input type="text" value={data.operator} onChange={(e) => setData({ ...data, operator: e.target.value })} /><br />
//             results:<input type="text" value={data.rst} onChange={(e) => setData({ ...data, rst: e.target.value })} /><br />
//             <button onClick={() => getResults(data.operator)}>getResults</button>
//             <button onClick={clearData}>clearData</button>
//         </div>
//     )

// }
// export default Calculator
const Calculator=()=>{
    const [data,setData]=useState({
        num1:"",num2:"",rst:"",operator:""

    })
    const {num1,num2}=data
    let n1=Number(num1) ,n2=Number(num2), rst=""
    const handleClick=(operator)=>{
if(operator==="+"){
rst=n1+n2
}else if(operator===" -"){
rst=n1-n2
}else {
rst="invalid operation"
}
setData({...data,rst})
    }
    return(
        <div>
          num1: <input type="text" value={data.num1} onChange={(e)=>{setData({...data,num1:e.target.value})}} /> <br/>
          num2: <input type="text" value={data.num2} onChange={(e)=>{setData({...data,num2:e.target.value})}} /> <br/>
          rst: <input type="text" value={data.rst} onChange={(e)=>{setData({...data,rst:e.target.value})}} /> <br/>
          operator: <input type="text" value={data.operator} onChange={(e)=>{setData({...data,operator:e.target.value})}} /> <br/>
         <button onClick={()=>handleClick(data.operator)}>getResults</button>
         {/* <button onClick={clearData}>getResults</button> */}
        </div>
    )
}
export default Calculator

