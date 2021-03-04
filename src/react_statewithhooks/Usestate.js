import React,{useState} from 'react'


export default function Usestate() {

    const[status,setStatus]=useState("Open");

    return (
        <>
            <h1>Status:{status}</h1>
             <button onClick={()=>setStatus("Open")}>Open</button>
             <button onClick={()=>setStatus("Back in 5 min")}>Break</button>
             <button onClick={()=>setStatus("Closed")}>Closed</button>
          <p> Hook is allow to add a fuctionality to the react_components  <span id="spanstate">useState and useEffect</span> </p>
        </>
    )
}
