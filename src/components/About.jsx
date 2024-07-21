
import { useState } from "react";

const About=()=>{
  const [count, setCount] = useState(0)
    
    return(
        <> <h1>this is my ABout</h1>
        
      <div className="card">
        <h1> {count} </h1>
        <button onClick={() => setCount((count) => count + 1)}>
          increment 
        </button>
        <button onClick={()=>setCount((count)=>count-1)} >
          decrement 
        </button>

      </div>
     
        </>
    )
}
export default About;