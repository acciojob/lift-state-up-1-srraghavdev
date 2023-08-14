import React,{useState} from 'react'

let Child= (props)=>{
    return(
        <div>
        <h1>Child Component</h1>
        <button onClick={()=>{props.set(true)}}>Show Modal</button>
        {props.item && <div>
            <h1>Modal Content</h1>
            <p>This is modal content.</p>
            </div>}
        </div>
    )
}
export default Child