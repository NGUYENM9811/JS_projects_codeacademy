let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
function generateTarget() {
    return Math.floor(Math.random()*10);
}
function compareGuesses(user,computer,target){
    var userDiff=Math.abs(user-target);
    var computerDiff=Math.abs(computer-target);
    if (userDiff<=computerDiff){return true;}
    else {return false;}
}
function updateScore(whoWin){
    if (whoWin==="human"){
        humanScore+=1;
    }
    else if (whoWin==="computer"){
        computerScore+=1;
    }
}
function advanceRound(){
    currentRoundNumber++;
}