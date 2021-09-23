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
        else if(playerSelection.toLowerCase()=="rock" && computerSelection=="scissor"){
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
            return("Draw");
        }
    }

    let gameover=0;
    let round=0;
    let playerSelection,computerSelection;
    let yourScore=0,compScore=0;
    let winner;

    const buttons=document.querySelectorAll('button'); //buttons constant with elements rock, paper and scissors
    const yourSelection=document.querySelector('.your-selection');
    const compSelection=document.querySelector('.comp-selection');
    const roundWinner=document.querySelector('.winner');
    const playerScore=document.querySelector('.your-points');
    const computerScore=document.querySelector('.comp-points');
    const curRound=document.querySelector('.round');

    playerScore.appendChild(document.createTextNode("0"));
    computerScore.appendChild(document.createTextNode("0"));
    curRound.appendChild(document.createTextNode("0"));


    buttons.forEach((button)=>{
        button.addEventListener('click',()=>{
            round++;
            curRound.textContent=round;
            computerSelection=computerPlay();
            console.log(button.classList);

            if(button.classList=="rock-btn")
                playerSelection="rock";
            else if(button.classList=="paper-btn")
                playerSelection="paper";
            else
                playerSelection="scissor";

            if(yourSelection==null){
                yourSelection.appendChild(document.createTextNode(playerSelection));
                compSelection.appendChild(document.createTextNode(computerSelection));
            }
            else{
                yourSelection.textContent=playerSelection;
                compSelection.textContent=computerSelection;
            }
            console.log(yourSelection.textContent);
            console.log(compSelection.textContent);
            console.log(winner=playRound(playerSelection,computerSelection));

            if(roundWinner==null)
                roundWinner.appendChild(document.createTextNode(winner));
            else
                roundWinner.textContent=winner;

            if(winner=="Computer Wins!"){
                compScore++;
            }
            
            else if(winner=="You Win!"){
                yourScore++;
            }       
            playerScore.textContent=yourScore;
            computerScore.textContent=compScore;
            console.log(yourScore);
            console.log(compScore);

        });
    })

    
