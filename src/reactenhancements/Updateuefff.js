import React,{useState,useEffect} from 'react'

export default function Updateuefff() {

    const [val ,setVal]=useState("");
    const [val2,setVal2]=useState("");
    useEffect(()=>{
        console.log(`field 1: ${val}`);
    },[val]);
    useEffect(()=>{
        console.log(`field 2: ${val2}`)
    },[val2]);
    return (
        <>
            <label>
                Name
                <input 
                     value={val} 
                     onChange={e => setVal(e.target.value)}
                />
            </label>
            <label>
                Surname:
                <input 
                       value={val2} 
                       onChange={e=>setVal2(e.target.value)}
                />
            </label>
        </>
    )
}
