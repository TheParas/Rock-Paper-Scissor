let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");
const msg = document.querySelector("#msg");

const genCompChoice = () => {
  const options = ["rock", "paper", "scissor"];
  const randIdx = Math.floor(Math.random() * 3);
  return options[randIdx];
};

const drawGame = () => {
  msg.innerText = "Game was Drawn. Play again.";
  msg.style.backgroundColor = "#0c1b33";
};

const showWinner = (result, userChoice, compChoice) => {
  if (result) {
    userScore++;
    userScorePara.innerText = userScore;
    msg.innerText = `You win. Your ${userChoice} beats ${compChoice}`;
    msg.style.backgroundColor = "green";
  } else {
    compScore++;
    compScorePara.innerText = compScore;
    msg.innerText = `You lost.${compChoice} beats your ${userChoice}`;
    msg.style.backgroundColor = "red";
  }
};
const playGame = (userChoice) => {
  const compChoice = genCompChoice();

  if (userChoice === compChoice) {
    drawGame();
  } else {
    let userWin = true;
    if (userChoice === "rock") {
      // scissor, paper
      userWin = compChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      // scissor, stone
      userWin = compChoice === "scissor" ? false : true;
    }
    // stone, paper
    else userWin = compChoice === "rock" ? false : true;
    showWinner(userWin, userChoice, compChoice);
  }
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    console.log(choice);
    playGame(userChoice);
  });
});
