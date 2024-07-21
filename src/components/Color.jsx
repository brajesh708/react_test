
import { useState } from "react"
const Color = () => {

    const [color,setColor]=useState("red")
  
  return (
    <>
     
     <center>
      <h1 style={{backgroundColor:color,color:"white",width:"400px",height:"300px",
      border:"5px solid black"
      }}>My Color :{color}</h1>
         
    </center>
    <button onClick={()=>{setColor("green")}}>Green</button>
    <button onClick={()=>{setColor("lightblue")}}>Lightblue</button>
    <button onClick={()=>{setColor("grey")}}>Grey</button>
    <button onClick={()=>{setColor("yellow")}}>Yellow</button>
    <button onClick={()=>{setColor("blue")}}>Blue</button>
    <button onClick={()=>{setColor("pink")}}>Pink</button>


    
    </>
  )
}

export default Color