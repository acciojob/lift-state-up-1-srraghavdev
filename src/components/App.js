
import React,{useState} from "react";
import './../styles/App.css';
import Child from './Child'

const App = () => {
  let [showModa,SetshowModa]= useState(false)
  return (
    <div class='parent'>
      <h1>Parent Component</h1>
        {<Child set={SetshowModa} item={showModa}/>}
    </div>
  )
}

export default App
