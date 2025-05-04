let userScore=0;
let compScore=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");

const userScorepara =document.querySelector("#user-score");
const compScorepara = document.querySelector("#comp-score")

const genCompChoice = () =>{
    const options=["rock","paper","Scissors"];
    const randIdx=Math.floor(Math.random()*3);
    return options[randIdx];
}

const showWinner=(userWin,userChoice,compChoice)=>{
    if(userWin){
        userScore++;
        userScorepara.innerText=userScore;
        msg.innerText=`You Win ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="green";
    }else{
        compScore++;
        compScorepara.innerText=compScore;
        msg.innerText=`You Lose ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor="red";
    }
}
const drawGame=()=>{
    msg.innerText="Game was draw! play again";
    msg.style.backgroundColor="#081b31";
}

const playGame=(userChoice)=>{
    const compChoice= genCompChoice();
    

    if(userChoice===compChoice){
        drawGame();
    }else{
        let userWin=true;
        if(userChoice ==="rock"){
           userWin= compChoice==="paper" ? false:true
        }else if(userChoice==="paper"){
            userWin=compChoice==="scissors" ? false:true;
        }else{
            userWin=compChoice==="rock"?false:true;
        }
        showWinner(userWin,userChoice,compChoice);
    }
}

choices.forEach((choice)=>{
    console.log(choice)
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id")
        console.log("choices was clicked",userChoice)
        playGame(userChoice)
    })
})