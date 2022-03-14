import React, { useState, useEffect } from 'react';
import style from './StartScreen.css';


const StartScreen = (props) => {
    const [selectedNumber, setSelectedNumber] = useState(5);

   
   const decreaseButton = () => {
       if (selectedNumber === 5){
            setSelectedNumber(4)
       }
       if (selectedNumber === 6){
           setSelectedNumber(5)
       }
   }
      const increaseButton = () => {
           if (selectedNumber === 5){
                setSelectedNumber(6)
           }
            if (selectedNumber === 4){
                setSelectedNumber(5)
           }
       
   }
   
   let buttonAdd = selectedNumber !== 6 ? (<button class="button" onClick={increaseButton}>+</button>) : (<div></div>)
   let buttonSubtract = selectedNumber !== 4 ? (<button class="button"  onClick={decreaseButton}>-</button>) : (<div></div>)
   let buttonSelect = (        
        <div>
            {buttonSubtract}
            {buttonAdd}
        </div>
    )
   
   
    return(
        <div className="card">
        <div>How many letters do you want to play with?</div>
        <span>{selectedNumber}</span>
        {buttonSelect}
        
        <button onClick={()=> props.startGame(selectedNumber)}>Start Game</button>
        </div>
    )
};

export default StartScreen;