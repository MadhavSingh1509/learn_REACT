import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [counter, setCounter]  = useState(15)

  //let counter = 15
 
  const addValue = () => {
    //counter = counter + 1
    //interview qstn:agar 4 baar set counter likha rahe,tab v ek hi baar badhega counter
    //setCounter(counter+1):agar 5 baar v likha hoga tb v value ek se hi badhega ye yaad rakhna hai
    //this is a famous interview qstn of reach
    //setcounter me prevcounter ka agr callback use hua tb counter utni baar increase hoga jitni baar likha h code
    //to haa,prevcounter wale case me counter 4 baar badhega
    setCounter(prevCounter => prevCounter + 1)
    setCounter(prevCounter => prevCounter + 1 )
    setCounter(prevCounter => prevCounter + 1)
    setCounter(prevCounter => prevCounter + 1)
    
    
  }

  const removeValue = () => {
    setCounter(counter - 1)
  }
  
  return (
    <>
      <h1>Chai aur react</h1>
      <h2>Counter value: {counter}</h2>

      <button
      onClick={addValue}
      >Add value {counter}</button> 
      <br />
      <button
      onClick={removeValue}
      >remove value {counter}</button>
      <p>footer: {counter}</p>


    </>
  )
}

export default App