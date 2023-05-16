import React from 'react';    
import './App.css';          
import {useState} from 'react';

function App() {            
  // we can write JS here :) 

  const [greeting, setGreeting] = useState("Hello World") //set the openign string
  const [total, setTotal] = useState(0);


  const handleClick = (name) => {
    setGreeting("Hello " + name)
  }
  // const handleClick = () => {
  //   setGreeting("Button was clicked")}

  const deposit = () => {
    setTotal(total + 10)
  }
  
  return ( 
    <>                 
     <h1>{greeting}</h1>  
      <button onClick={() => handleClick("Colette")}>Change Greeting  </button>

      <p>Total: £{total}</p>
      <button onClick={deposit}>Deposit</button>
     </>
  );                         
};                         


export default App;