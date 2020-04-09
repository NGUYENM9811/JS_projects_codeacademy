let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget=()=>{
    return Math.floor(10*Math.random());
    }
    
function compareGuesses(computerGuess,userGuess,targetGuess){
    const userDiff=Math.abs(userGuess-targetGuess);
    const computerDiff=Math.abs(computerGuess-targetGuess);
    if (userDiff<=computerDiff) {
        return true;
    }
    else {
        return false;
    }
}
    
 function updateScore(winner){
    if (winner===‘human’){
        humanScore=humanScore+1;
    }
    else{
        computerScore=computerScore+1;
    }    
}
function advanceRound(){
    currentRoundNumber=currentRoundNumber+1;
}