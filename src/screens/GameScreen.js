import style from './GameScreen.css';
import React, { useState, useEffect } from 'react';


const GameScreen = (props) => {
    const [currentGuess, setCurrentGuess] = useState([]);
    const [currentRound, setCurrentRound] = useState(0);
    const [pastGuesses, setPastGuesses] = useState([]);
    let wordCount = props.amount
    let wordArray = ['p','u','c','k','s']
    const wordChooser = () =>{
        
    }
     
     
     const handleChange = (event) => {
         
         let letter = event.target.value
         let position = event.target.getAttribute('position')
         
         let guess = {
             letter: letter,
             position: position
         }
         
            for(var i=0; i<currentGuess.length; i++) {
                if(currentGuess[i].position == guess.position.toString()){
                    currentGuess[i].letter = letter;

                    return;
                } 
            }   
            
            
            
   
        if (currentGuess.length <= props.amount ){
            
            currentGuess.push(guess)
        }

        }
                
    const tileCreater = () => (
        wordArray.map((tile, i) => <input type="text"  maxLength="1" className='tile' position={i} key={i} />)
    )
    const handleGuessSubmit = () => {

        if (currentRound > 0){
            
            return(pastGuesses.map((tile, i) => <input type="text"  maxLength="1" className={letterChecker(tile.letter)} position={i} key={i} value={tile.letter}  />))
        }
    }
    
    const letterChecker = (guessLetter) => {
        wordArray.map((letter, i)=> {
            console.log(letter)
            console.log(guessLetter)
            if (guessLetter[i] === letter) return "tile-matched";
            if (guessLetter.includes(letter)) return "tile-includes";
            return "tile"
        })
        
    }
    
    
    const onFormSubmit = (event) => {
        event.preventDefault();
        setCurrentGuess(currentGuess)
        setPastGuesses(currentGuess);
        setCurrentRound(currentRound => currentRound + 1)
    }
        
 
    return(
        <div className="card">
            <div>Game Screen!</div>
            <div>Guesses played: {currentRound}</div>
                <div className="tile_holder">
                    <form onChange={handleChange} onSubmit={onFormSubmit}> 
                        {handleGuessSubmit()}
                        {tileCreater()}

                        <input type="submit" />
                    </form>
                </div>
        </div>
    )
};

export default GameScreen;