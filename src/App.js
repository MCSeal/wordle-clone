import React, { useState, useEffect } from 'react';
import './App.css';
import StartScreen from './screens/StartScreen.js'
import GameScreen from './screens/GameScreen.js'


function App() {
  const [numberOfLetters, setNumberOfLetters] = useState(5);
  const [letterCount, setLetterCount] = useState(4);
   
   
   
     const startGameHandler = (letterCount) => {
        console.log(letterCount);
        setLetterCount(letterCount);
        
    };
  
  let content = <StartScreen startGame = {startGameHandler}/>
  
  
  const startGame = (chosenLetters) => {
    setLetterCount(chosenLetters)
  }
  
  if (letterCount) {
    content = <GameScreen amount={letterCount}/>
  }
  
  return (
    <div className="App">
      <header className="App-header">
        
        {content}
        
      </header>
    </div>
  );
}

export default App;
