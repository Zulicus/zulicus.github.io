//Global Costants
const gameEL = document.querySelector(".game"),
  startButton = document.querySelector(".start"),
  hardResetButton = document.querySelector(".reset"),
  highscoreEl = document.querySelector(".highscore"),
  lastScoreEl = document.querySelector(".previous"),
  scoreEl = document.querySelector(".score");

//Global variables
let displayArray = [],
  yAxis = [],
  gameChoiceArray = [],
  gameBoard = [],
  counterOne = false,
  counterTwo = false,
  hearts = 0,
  stars = 0,
  circles = 0,
  triangles = 0,
  diamonds = 0,
  randomNumber = 0,
  score = 0,
  tempClassList = 0,
  highscore = eval(window.localStorage.getItem("highscore")),
  firstXCoodrinate = 0,
  firstYCoodrinate = 0,
  seconedXCoordinate = 0,
  seconedYCoordinate = 0,
  thirdXCoodrinate = 0,
  thirdYCoodrinate = 0;

//A wellcome message that tells the player how to play
console.log(
  "Wellcome to Lucky 3, a game where your goal is to be as lucky as possible and match 3 of the same color and symbol in a row, you get one point for every match of 3 you get."
);
console.log(
  "If you run out of moves just press the start new game button and it'll save your previous score and your highscore"
);

//Waits for the player to start the game, and acts as a resetbutton.
startButton.addEventListener("click", () => {
  displayArray = [];
  //Sets the users name or defaults to player if no name is set in the #
  lastScoreEl.innerHTML = "";
  let user = location.hash.slice(1);
  let preScore = document.createElement("h2");
  if (location.hash == "") {
    preScore.innerText = `Player's previous Score: ${score}`;
  } else {
    preScore.innerText = `${user}'s previous Score: ${score}`;
  }
  lastScoreEl.appendChild(preScore);

  //Records the highscore and prevents null highscore
  if (highscore == null) {
    highscore = 0;
  }
  if (score > highscore) {
    window.localStorage.setItem("highscore", `${score}`);
    highscore = score;
    highscoreEl.innerHTML = `<h2>${highscore}</h2>`;
    score = 0;
    scoreEl.innerHTML = `<h2>${score}</h2>`;
  } else {
    highscoreEl.innerHTML = `<h2>${highscore}</h2>`;
    score = 0;
    scoreEl.innerHTML = `<h2>${score}</h2>`;
  }
  gameEL.innerHTML = displayArray.join("");

  //Resetting all the variables
  counterOne = false;
  counterTwo = false;
  gameChoiceArray = [];
  gameBoard = [];
  tempClassList = 0;
  seconedXCoordinate = 0;
  seconedYCoordinate = 0;

  //Starts the game
  gameStart();
});

//Functions as a Hard Reset Button
hardResetButton.addEventListener("click", () => {
  window.localStorage.clear();
  location.reload();
});

//Function used to start, run and reset the gameboard
function gameStart() {
  //Creates the gameboard
  for (let x = 1; x < 8; x++) {
    let xAxis = [];
    for (let y = 1; y < 13; y++) {
      //Randomises what gamepiece is assigned what suite
      randomNumber = Math.floor(Math.random() * 5) + 1;
      switch (randomNumber) {
        case 1:
          xAxis[
            y
          ] = `<div class="gamePiece circle" data-pos="${x}.${y}"></div>`;
          break;
        case 2:
          xAxis[
            y
          ] = `<div class="gamePiece diamond" data-pos="${x}.${y}"></div>`;
          break;
        case 3:
          xAxis[y] = `<div class="gamePiece heart" data-pos="${x}.${y}"></div>`;
          break;
        case 4:
          xAxis[y] = `<div class="gamePiece star" data-pos="${x}.${y}"></div>`;
          break;
        case 5:
          xAxis[
            y
          ] = `<div class="gamePiece triangle" data-pos="${x}.${y}"></div>`;
          break;
        default:
          break;
      }
    }
    yAxis[x] = xAxis;
  }

  //Displays the gameboard
  for (let x = 1; x < 8; x++) {
    displayArray.push(yAxis[x].join(""));
  }
  gameEL.innerHTML = displayArray.join("");

  //Game engine
  document.querySelectorAll(".gamePiece").forEach((e) => {
    //Sets up the how manny are left counter in the console
    gameBoard.push(e.classList[1]);
    howManyOfEach(gameBoard);

    //Waits for the player to click on a gamepiece
    e.addEventListener("click", () => {
      //Checks if this is the first time the player clicked on a gamepiece this round
      if (seconedXCoordinate == 0 && seconedYCoordinate == 0) {
        firstXCoodrinate = e.getAttribute("data-pos").slice(2);
        firstYCoodrinate = e.getAttribute("data-pos").slice(0, 1);
        defaultEndPoint(e);
      } else {
        firstXCoodrinate = e.getAttribute("data-pos").slice(2);
        firstYCoodrinate = e.getAttribute("data-pos").slice(0, 1);
        gameChoiceArray.push(e);

        //Makes sure it's an adjecent symbol and that it's not just the same one nor the first one
        if (
          (firstXCoodrinate == seconedXCoordinate ||
            firstYCoodrinate == seconedYCoordinate) &&
          !(
            firstXCoodrinate == seconedXCoordinate &&
            firstYCoodrinate == seconedYCoordinate
          ) &&
          !(
            firstXCoodrinate == thirdXCoodrinate &&
            firstYCoodrinate == thirdYCoodrinate
          ) &&
          firstXCoodrinate <= eval(seconedXCoordinate + "+1") &&
          firstXCoodrinate >= eval(seconedXCoordinate + "-1") &&
          firstYCoodrinate <= eval(seconedYCoordinate + "+1") &&
          firstYCoodrinate >= eval(seconedYCoordinate + "-1")
        ) {
          //Checks that it's the same symbol
          if (e.classList.value == tempClassList) {
            //This one is only nessesary after a victory
            if (counterOne == false) {
              counterOne = true;
            } else if (counterTwo == false) {
              counterTwo = true;
            } else {
              //if both counters are true we go in to the victory code, where score increases and counters reset
              gameBoard = [];
              counterOne = false;
              counterTwo = false;
              score++;
              console.log("1 point");
              scoreEl.innerHTML = `<h2>${score}</h2>`;
              gameChoiceArray.forEach((gamePice) => {
                randomNumber = Math.floor(Math.random() * 5) + 1;
                switch (randomNumber) {
                  case 1:
                    gamePice.classList = "gamePiece circle";
                    break;
                  case 2:
                    gamePice.classList = "gamePiece diamond";
                    break;
                  case 3:
                    gamePice.classList = "gamePiece heart";
                    break;
                  case 4:
                    gamePice.classList = "gamePiece star";
                    break;
                  case 5:
                    gamePice.classList = "gamePiece triangle";
                    break;
                  default:
                    break;
                }
              });

              //Updates the how manny are left counter in the console
              document.querySelectorAll(".gamePiece").forEach((e) => {
                gameBoard.push(e.classList[1]);
                howManyOfEach(gameBoard);
              });
              gameChoiceArray = [];
            }
            thirdXCoodrinate = seconedXCoordinate;
            thirdYCoodrinate = seconedYCoordinate;
            seconedXCoordinate = firstXCoodrinate;
            seconedYCoordinate = firstYCoodrinate;
          } else {
            defaultEndPoint(e);
          }
        } else {
          defaultEndPoint(e);
        }
      }
    });
  });
}

//To save code space I made this into a function instead of having it at the end of every else
function defaultEndPoint(e) {
  counterOne = true;
  counterTwo = false;
  gameChoiceArray = [];
  tempClassList = e.classList.value;
  thirdXCoodrinate = seconedXCoordinate;
  thirdYCoodrinate = seconedYCoordinate;
  seconedXCoordinate = firstXCoodrinate;
  seconedYCoordinate = firstYCoodrinate;
  gameChoiceArray.push(e);
}

//How manny are left counter in the console
function howManyOfEach(array) {
  console.clear();
  //Makes sure the tutorial is still there
  console.log(
    "Wellcome to Lucky 3, a game where your goal is to be as lucky as possible and match 3 of the same color and symbol in a row, you get one point for every match of 3 you get."
  );
  console.log(
    "If you run out of moves just press the start new game button and it'll save your previous score and your highscore"
  );
  hearts = array.filter((e) => e.includes("heart")).length;
  stars = array.filter((e) => e.includes("star")).length;
  diamonds = array.filter((e) => e.includes("diamond")).length;
  triangles = array.filter((e) => e.includes("triangle")).length;
  circles = array.filter((e) => e.includes("circle")).length;
  console.log(`There are ${hearts} hearts left on the board`);
  console.log(`There are ${stars} stars left on the board`);
  console.log(`There are ${diamonds} diamonds left on the board`);
  console.log(`There are ${triangles} triangles left on the board`);
  console.log(`There are ${circles} circles left on the board`);
}
