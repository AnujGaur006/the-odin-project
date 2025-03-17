function myfunc(message){
    console.log("This string should be displayed : " + message);
}

function getComputerChoice(){
    let choices = ["Rock","Paper","Scissor"];
    let randIdx = parseInt(Math.floor(Math.random()*choices.length));

    return choices[randIdx];
}


function game(){
    let yesOrNo = "yes";
    let userScore = 0;
    let computerScore = 0;


    while(userScore != 5 && computerScore !=5){
    const userChoice = prompt("Rock ! Paper ! Scissor ! ????").toUpperCase();
    console.log("UserChoice : " + userChoice);

    const computerChoice = getComputerChoice().toUpperCase();
    console.log("ComputerChoice : " + computerChoice);

    if(userChoice == computerChoice){
        alert("Tie Break");
    }else if((userChoice == "SCISSOR" && computerChoice == "PAPER") ||
             (userChoice == "PAPER" && computerChoice == "ROCK") ||
             (userChoice == "ROCK" && computerChoice == "SCISSOR")){
                userScore++;
                alert(`${userChoice} beats ${computerChoice} Score User Vs Computer - ${userScore}-${computerScore}`); 
            } else {
                computerScore++;
                alert(`${computerChoice} beats ${userChoice} Score User Vs Computer - ${userScore}-${computerScore}`); 
            }        
    }  
    
    if(userScore == 5) alert("You Won!!!!"); else alert("You Lost :(");
    

}