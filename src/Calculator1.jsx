

import { useState } from "react"

const Cal1=()=>{
    const [data,setData]=useState({
        num1:"",num2:"",rst:"",operator:""
    })
const {num1,num2}=data
let n1=num1, n2=num2, rst=""
    const getResults=(operator)=>{
        if(operator==="+"){
rst=n1+n2
        }else if(operator==="-"){
rst=n1-n2
        }else{
            rst="invalid oeration"
        }

        setData({...data,rst})

//    }
// const {num1,num2}=data
//  let n1=Number( num1), n2= Number( num2), rst=""
//  const getResults=(operator)=>{
    
//  switch(operator){
//     case "   ":
//          rst=n1+n2;
//          break;
//         case "-":
//              rst=n1-n2;
//              break;
//             case "*":
//                  rst=n1*n2;
//                  break;
//                 default:
//                     rst="invalid operation";
    
//  }
//  setData({...data,rst})
 

//  }
//  const clearData=()=>{
//     setData({num1:"",num2:"",rst:"",operator:""})
//  }

    return(
        <div>
            <h1>this is calculator</h1>
          num1:  <input type="text" value={data.num1} onChange={(e)=>setData({...data,num1:e.target.value})} /><br/>
            
            num2:<input type="text" value={data.num2} onChange={(e)=>setData({...data,num2:e.target.value})} /><br/>
            
         rst: <input type="text" value={data.rst} onChange={(e)=>setData({...data,rst:e.target.value})} /><br/>
            
            operator:<input type="text" value={data.operator} onChange={(e)=>setData({...data,operator:e.target.value})} /><br/>
       <button onClick={()=>getResults(data.operator)}>getResults</button>
       {/* <button onClick={clearData}>clearData</button> */}
        </div>
    )
}
}
export default Cal1;



