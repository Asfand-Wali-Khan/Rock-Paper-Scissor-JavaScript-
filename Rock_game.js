let userCount = 0;
let compCount = 0;

let choices = document.querySelectorAll(".choice");

let compChoice = () => {
  let options = ["rock", "paper", "scissors"];
  let ranidx = Math.floor(Math.random() * 3);
  return options[ranidx];
};
let result = document.querySelector("#game-result");
let userPoint = document.querySelector("#user-point");
let compPoint = document.querySelector("#comp-point");
let getWinner = (userWin) => {
  if (userWin) {
    console.log(`you win!`);
    result.innerText = "Congratulations! You Won.";
    result.style.backgroundColor = "green";
    userCount++;
    userPoint.innerText = userCount;
  } else {
    console.log(`you Lose!`);
    result.innerText = "You Lose!";
    result.style.backgroundColor = "red";
    compCount++;
    compPoint.innerText = compCount;
  }
};
let playgame = (userChoice) => {
  console.log(`userchoice is ${userChoice}`);
  let compchoice = compChoice();
  console.log(`compchoice is ${compchoice}`);
  if (userChoice === compchoice) {
    console.log("Game is draw");
    result.innerText = "Game Draw!";
    result.style.backgroundColor = "black";
  } else {
    let userWin = true;
    if (userChoice === "rock") {
      userWin = compchoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      userWin = compchoice === "scissors" ? false : true;
    } else {
      userWin = compchoice === "rock" ? false : true;
    }
    getWinner(userWin);
  }
};
choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    userChoice = choice.getAttribute("id");
    playgame(userChoice);
  });
});
