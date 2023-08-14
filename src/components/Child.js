import React,{useState} from 'react'

let Child= (props)=>{
    return(
        <div>
        <button onClick={()=>{props.set(true)}}>Show Modal</button>
        {props.item && <div>
            <h3>Modal Content</h3>
            <p>This is modal content.</p>
            </div>}
        </div>
    )
}
export default Child