import style from './GameScreen.css';


const gameScreen = (props) => {
    
    let currentGuess = []
    let wordCount = props.amount
    let wordArray = ['p','u','c','k']
    const wordChooser = () =>{
        
    }
     
     
     const handleChange = (event) => {
         
         let letter = event.target.value
         let position = event.target.getAttribute('position')
         
         let guess = {
             letter: letter,
             position: position
         }

            console.log(currentGuess.length)
            for(var i=0; i<currentGuess.length; i++) {
                if(currentGuess[i].position == guess.position.toString()){
                    console.log('found matching position already')
                    currentGuess[i].letter = letter;
                    
                    return;
                } else{
                    currentGuess.push(guess)
                    console.log(currentGuess)
                    return;
                }
            }   
            
   
        if (currentGuess.length == 0 ){
            
            currentGuess.push(guess)
        }
       
         
        console.log(currentGuess)
         
         
     }
                
    const tileCreater = () => (
        wordArray.map((tile, i) => <input type="text"  maxLength="1" className='tile' position={i} key={i}/>)
    )
        
        
    
    return(
        <div className="card">
            <div>Game Screen!</div>
                <div className="tile_holder">
                    <form onChange={handleChange} onSubmit={handleChange}> 
                        {tileCreater()}
                    </form>
                </div>
        </div>
    )
};

export default gameScreen;