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
    const playerImg=document.createElement("img");
    const compImg=document.createElement("img");
    const selection=document.querySelector(".selection");

    playerImg.classList.add("yourChoice");
    compImg.classList.add("compChoice");
    playerScore.appendChild(document.createTextNode("0"));
    computerScore.appendChild(document.createTextNode("0"));
    curRound.appendChild(document.createTextNode("0"));


    buttons.forEach((button)=>{
        button.addEventListener('click',()=>{
            round++;
            curRound.textContent=round;
            computerSelection=computerPlay();
            if(button.classList=="rock-btn"){
                playerSelection="rock";
                playerImg.src="images/rock.jpeg";
                playerImg.alt="Image showing a fist as a representation for rock";
            }
            else if(button.classList=="paper-btn"){
                playerSelection="paper";
                playerImg.src="images/paper.png";
                playerImg.alt="Image showing a palm as a representation for paper";

            }
            else{
                playerSelection="scissor";
                playerImg.src="images/scissor.png";
                playerImg.alt="Image showing 2 fingers as a representation for scissors";

            }

            if(computerSelection=="rock"){
                compImg.src="images/rock.jpeg";
                compImg.alt="Image showing fist as a representation for rock";

            }
            else if(computerSelection=="paper"){
                compImg.src="images/paper.png";
                compImg.alt="Image showing palm as a representation for paper";


            }
            else{
                compImg.src="images/scissor.png";
                compImg.alt="Image showing 2 fingers as a representation for scissors";

            }
            console.log(yourSelection);
            console.log(compSelection);
            selection.appendChild(playerImg);
            selection.appendChild(compImg);
            console.log(selection)
        

            console.log(winner=playRound(playerSelection,computerSelection));

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

            if(yourScore>=5||compScore>=5){
                if(compScore>yourScore){
                    winner="Computer Wins the game";
                    yourScore=0;
                    compScore=0;
                    round=0;
                }
                else if(yourScore>compScore){
                    winner="You Win the game!";
                    yourScore=0;
                    compScore=0;
                    round=0;
                }
            } 

            if(roundWinner==null)
                roundWinner.appendChild(document.createTextNode(winner));
            else
                roundWinner.textContent=winner; 

        });
  
    })
 
    
