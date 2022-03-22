import React, { useState, useEffect } from 'react';
import './App.css';
import StartScreen from './screens/StartScreen.js'
import GameScreen from './screens/GameScreen.js'
import { wordList } from './constants/wordList';

function App() {
  const [numberOfLetters, setNumberOfLetters] = useState(5);
  const [letterCount, setLetterCount] = useState(4);
  const [boardData, setBoardData] = useState(JSON.parse(localStorage.getItem('board-data')));
  const [charArray, setCharArray] = useState([]);
  
  
  
   
  useEffect(() => {
    if (!boardData || boardData.solution){
        var alphabetLetterIndex = Math.floor(Math.random()*26);
        var wordIndex = Math.floor(Math.random() * wordList[String.fromCharCode(97 + alphabetLetterIndex)].length)
        let newBoardData= {...boardData, "solution":wordList[String.fromCharCode(97+alphabetLetterIndex)][wordIndex],
          "rowIndex":0,
          "boardWords":[],
          "boardRowStatus": [],
          "presentCharArray": [],
          "absetCharArray" : [],
          "correctCharArray": [],
          "status": "IN_PROGRESS"
        };
        setBoardData(newBoardData)
        localStorage.setItem('board-data', JSON.stringify(newBoardData))
    }
  }, [])
   
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
