
import { useState } from "react";
import axios from "axios";
const Faculty =()=>{
    const [input,setInput] = useState("")
     const inputHanddle =(e)=>{
        let name =  e.target.name;
        let value = e.target.value;
        setInput((values)=>({...values,[name]:value}))
        
     }
     const handleSubmit =()=>{
        let url = 'http://localhost:3000/student';
        axios.post(url,input).then((res)=>{
          setInput(res.data)  
          alert("Registered successfully")
        })
     }
     return(
    <>
    <h1>Insert Data of Students Here </h1>
    <br/>
    <br/>
    Rollno : <input type="text" name="rollno" onChange={inputHanddle}/>
    <br/>
    <br/>
    Name : <input type="text" name="name" onChange={inputHanddle}/>
    <br/>
    <br/>
    City : <input type="text" name="city" onChange={inputHanddle}/>
    <br/>
    <br/>
    Fees : <input type="text" name="fees" onChange={inputHanddle}/>
    <br/>
    <br/>
    <button onClick={handleSubmit}>Save Data</button>
    </>
)
}
export default Faculty;