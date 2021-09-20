    function computerPlay(){
        let choice=Math.floor(Math.random()*3);
        if(choice==1){
            return("rock");
        }
        else if(choice==2){
            return("paper");
        }
        else{
            return("scissor");
        }
    }

    function playRound(playerSelection, computerSelection){
        if(playerSelection.toLowerCase()=="rock" && computerSelection=="paper"){
            return("Computer Wins!");
        }
        else if(playerSelection.toLowerCase()=="rock" && computerSelection=="Scissor"){
            return("You Win!");
        }
        else if(playerSelection.toLowerCase()=="rock" && computerSelection=="rock"){
            return("Draw");
        }
        else if(playerSelection.toLowerCase()=="paper" && computerSelection=="paper"){
            return("Draw");
        }
        else if(playerSelection.toLowerCase()=="paper" && computerSelection=="scissor"){
            return("Computer Wins!");
        }
        else if(playerSelection.toLowerCase()=="paper" && computerSelection=="rock"){
            return("You Win!");
        }
        else if(playerSelection.toLowerCase()=="scissor" && computerSelection=="paper"){
            return("You Win!");
        }
        else if(playerSelection.toLowerCase()=="scissor" && computerSelection=="rock"){
            return("Computer Wins!");
        }
        else if(playerSelection.toLowerCase()=="scissor" && computerSelection=="scissor"){
            return("Draw!");
        }

    }

    function game(){
        console.log("Welcome to rock paper scissors");
        let gameover=0;
        let round=1;
        let playerSelection,computerSelection;
        let yourScore=0,compScore=0;
        while(!gameover){
            console.log(`Round ${round}:`);
            playerSelection = prompt("Enter you selection");
            computerSelection = computerPlay();
            console.log(`Your choice: ${playerSelection}\nComputer choice: ${computerSelection}`);
            console.log(playRound(playerSelection, computerSelection));
            if(playRound(playerSelection,computerSelection)=="Computer Wins!")
                compScore++;
            else if(playRound(playerSelection,computerSelection)=="You Win!")
                yourScore++;
            if((compScore!=yourScore) && round==5)
                gameover=1;
            round++;
        }
        console.log(`Your Score: ${yourScore}\nComputer Score: ${compScore}`);
        if(yourScore>compScore)
            console.log("You win the game!");
        else
            console.log("Computer wins the game");
    }

    game();