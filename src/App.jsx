import { useState } from 'react'

import './App.css'

function App() {

  const [peter,spidy]= useState(1500)
  
  // let amazon = 55
  const addvalue = () => {
    spidy(peter + 10)
  }

  const deletevalue = () => {
    spidy(peter - 10)
  }

  return (
    <>
      <h1>Mary had a little lamp {peter}</h1>
      <h2>There shall be showers of blessing :{peter} </h2>
      <button onClick={addvalue}>Add value : {peter}</button> 
      <button onClick={deletevalue}>Delete value : </button>
      <p>footer : {peter}</p>
    </>
  )
}

export default App
