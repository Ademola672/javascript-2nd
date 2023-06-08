" use strict";
let cartQuantity = 0;
// let cartQuantityAdd = cartQuantity++;
// const showQuality = document.querySelector;
const randomNumber = Math.random();
// console.log(randomNumber);

const btnRock = document.querySelector(".btnRock");
const btnPaper = document.querySelector(".btnPaper");
const btnSci = document.querySelector(".btnScissors");

const randomFunction = function () {
  if (randomNumber >= 0 && randomNumber < 1 / 3) {
    computerPick = "rock";
  } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
    computerPick = "Paper";
  } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
    computerPick = "scissors";
  }

  return computerPick;
};

let result = " ";

btnRock.addEventListener("click", function () {
  randomFunction();
  //   let computerPick = " ";
  //   let result = " ";

  if (computerPick === "rock") {
    result = "Tie";
  } else if (computerPick === "Paper") {
    result = "you lose ";
  } else if (computerPick === "scissors") {
    result = "you win";
  }

  alert(`You picked rock, Computer picked ${computerPick}, ${result}`);
});

btnPaper.addEventListener("click", function () {
  randomFunction();

  //   let computerPick = " ";
  //   let result = " ";

  if (computerPick === "Paper") {
    result = "Tie";
  } else if (computerPick === "rock") {
    result = "you Win ";
  } else if (computerPick === "scissors") {
    result = "you lose";
  }

  alert(`You picked Paper, Computer picked ${computerPick}, ${result}`);
});

btnSci.addEventListener("click", function () {
  randomFunction();

  //   let computerPick = " ";
  //   let result = " ";

  if (computerPick === "Paper") {
    result = " you Win";
  } else if (computerPick === "rock") {
    result = "you Lose ";
  } else if (computerPick === "scissors") {
    result = "you tie";
  }

  alert(`You picked scissors, Computer picked ${computerPick}, ${result}`);
});
