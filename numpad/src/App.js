import React, { useEffect, useState } from 'react'
import './App.css'

const App = () => {

  const [count, setCount] = useState(0);
  // useEffect( ()=>{
    
  // },[count])
  // {
  //   const button = document.querySelector('number');
  //   const text = document.querySelector('text');

  //   button.addEventListener('click', event => {
  //   text.textContent = `Click count: ${event.detail}`;
  // });
  // }

  return (
    <div className="App">
      <div className='text'></div>
      <div className="main">
        <div className="numbers">
          <div className="number" onClick={()=> {setCount(count+1)}}>
            <span>1</span>
            <span className="char" >
              . , !
            </span>
          </div>
          <div className="number">
            <span>2</span>
            <span className="char">a b c</span>
          </div>
          <div className="number">
            <span>3</span>
            <span className="char">d e f</span>
          </div>
        </div>
        <div className="numbers">
          <div className="number">
            <span>4</span>
            <span className="char">g h i</span>
          </div>
          <div className="number">
            <span>5</span>
            <span className="char">j k l</span>
          </div>
          <div className="number">
            <span>6</span>
            <span className="char">m n o</span>
          </div>
        </div>
        <div className="numbers">
          <div className="number">
            <span>7</span>
            <span className="char">p q r s</span>
          </div>
          <div className="number">
            <span>8</span>
            <span className="char">t u v</span>
          </div>
          <div className="number">
            <span>9</span>
            <span className="char">w x y z</span>
          </div>
        </div>
        <div className="numbers">
          <div className="number">
            <span>*</span>
          </div>
          <div className="number">
            <span>0</span>
          </div>
          <div className="number">
            <span>#</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
