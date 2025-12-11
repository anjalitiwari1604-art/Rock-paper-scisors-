let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorepara = document.querySelector("#user-score");
const compScorepara = document.querySelector("#comp-score");

const genCompChoice = () => { 
    const options = ["paper", "rock" ,"scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
};

const DrawGame = () => {
    console.log("Game was draw");
    msg.innerText = "Game was draw, Play again";
    msg.style.backgroundColor = "#081b31"; 
};

const showwinner = (userwin) => {
    if (userwin) {
        userScore++;
        userScorepara.innerText = userScore;
        console.log("You win");
        msg.innerText = "You win!"
        msg.style.backgroundColor = "green";
    }else {
        compScore++;
        compScorepara.innerText = compScore;
        console.log("You lose");
        msg.innerText = "You lose!";
        msg.style.backgroundColor = "red";
    }
}

const playGame = (userChoice) => {
    console.log("user Choice= ", userChoice);
    //Generate computer choice;
    const compChoice = genCompChoice ();
    console.log("comp choice = ", compChoice);
    
    if (userChoice === compChoice) {
        //Draw Game;
        DrawGame();  
    } else {
        let userwin = true
        if(userChoice === "rock") {
            //scissors,papaer
            compChoice === "paper" ? false:true
        }else if(userChoice === "papre") {
            //rock,scissors
            userwin = compChoice === "scissors" ? false: true; 
        }else {
            //rock, paper
            userwin = compChoice === "rock" ? false: true;
        }
        showwinner(userwin);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
      const userChoice = choice.getAttribute("id"); 
        playGame(userChoice) 
  });
});   