let userScore = 0;
let computerScore = 0;

var yourScore = document.querySelector("#userScore")
var theirScore = document.querySelector("#computerScore")
var mes = document.querySelector("#result")

function computerPlay(){
    let comp = Math.floor(Math.random()*3);
    res = "";
    switch (comp){
        case 0:
            return "rock";
            break;
        case 1:
            return "paper";
            break;
        case 2:
            return "scissors";
        default:
            return "Error";
    }
}

function playRound(user){
    computerSelection = computerPlay()
    playerSelection = user;

    if(computerSelection == "rock" && playerSelection == "paper"){
        mes.textContent = "You Win! " + playerSelection + " beats " + computerSelection;
        userScore++;
        yourScore.textContent = userScore;
        theirScore.textContent = computerScore;

    }else if(computerSelection == "paper" && playerSelection == "scissors"){
        mes.textContent = "You Win! " + playerSelection + " beats " + computerSelection;
        userScore++;
        yourScore.textContent = userScore;
        theirScore.textContent = computerScore;

    }else if(computerSelection == "scissors" && playerSelection == "rock"){
        mes.textContent = "You Win! " + playerSelection + " beats " + computerSelection;
        userScore++;
        yourScore.textContent = userScore;
        theirScore.textContent = computerScore;

    }else if(computerSelection == playerSelection){
        mes.textContent = "You Tied: " + playerSelection + " ties " + computerSelection;
        yourScore.textContent = userScore;
        theirScore.textContent = computerScore;

    }else{
        //computer wins
        mes.textContent = "You Lose! " + computerSelection + " beats " + playerSelection;
        computerScore++;
        yourScore.textContent = userScore;
        theirScore.textContent = computerScore;
    }
    if(userScore === 5 ){
        mes.textContent ="You WON the series of 9 games!";
        userScore = 0;
        computerScore = 0;
    
    
    }else if(computerScore == 5){
        mes.textContent ="You LOST the series of 9 games!";
        
        userScore = 0;
        computerScore = 0;
        
    
    }else{
        //nothing
    }
}

/*function game(){
var i;
numberOfRounds = 5;
for (i = 0; i <+ numberOfRounds; i++) {
  playRound();
}
}*/



// buttons is a node list. It looks and acts much like an array.
const buttons = document.querySelectorAll('button');

// we use the .forEach method to iterate through each button
buttons.forEach((button) => {

    // and for each one we add a 'click' listener
    button.addEventListener('click', (e) => {
      switch (button.id){
          case '1':
              playRound("rock");
              break;
          case '2':
              playRound("paper");
              break;
          case '3':
              playRound("scissors");
          default:
              return "Error";
      }
    });
  });
//game();
