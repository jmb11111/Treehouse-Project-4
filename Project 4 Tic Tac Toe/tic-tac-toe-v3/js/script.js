$("#player1").attr("class", "players active");
const startGameButton = $("#startButton");
class Player {
  constructor(isTurn, won) {
    this.isTurn = isTurn;
    this.won = won;
  }
}

class Screen {
  constructor(id, active) {
    this.id = $("#" + id);
    this.active = active;
  }
  showHide() {
    if (this.active) {
      this.id.show();
    } else if (this.active === false) {
      this.id.hide();
    }
  }
}

let gameStatus = {
  player1wins: false,
  player2Wins: false,
  tieGame: false
};

const player1 = new Player(true, false);
const player2 = new Player(false, false);
const tieGame = new Player(false, false);
const screen1 = new Screen("screen1", true);
const screen2 = new Screen("board", false);
const screen3 = new Screen("finish", false);

function showScreens() {
  screen1.showHide();
  screen2.showHide();
  screen3.showHide();
}
function screenWin() {
  screen1.active = false;
  screen2.active = false;
  screen3.active = true;
}

function newGameScreen() {
  screen1.active = false;
  screen2.active = true;
  screen3.active = false;
}

showScreens();

startGameButton.click(function() {
  if (document.getElementById("nameInput").value !== "") {
    screen1.active = false;
    screen2.active = true;
    screen3.active = false;
    showScreens();
  } else {
    alert("Please enter your name!");
  }
});

let boxes = [
  (box0 = null),
  (box1 = null),
  (box2 = null),
  (box3 = null),
  (box4 = null),
  (box5 = null),
  (box6 = null),
  (box7 = null),
  (box8 = null)
];
let text = null;

$(".box").click(function(event) {
  if (player1.isTurn && !this.className.includes("box-filled")) {
    $(this).addClass("box-filled-1");
    player1.isTurn = false;
    player2.isTurn = true;
    $("#player1").attr("class", "players ");
    $("#player2").attr("class", "players active ");

    for (let i = 0; i < boxes.length; i++) {
      boxes[i] = $("#box" + i.toString()).attr("class");
    }

    checkPlayer1Win();
    checkTie();
    if (player1.won) {
      gameStatus.player1wins = true;
      gameOver();
    } else if (tieGame.won) {
      gameStatus.tieGame = true;
      gameOver();
    }
  } else if (player2.isTurn && !this.className.includes("box-filled")) {
    $(this).addClass("box-filled-2");
    player1.isTurn = true;
    player2.isTurn = false;
    $("#player2").attr("class", "players ");
    $("#player1").attr("class", "players active");
    for (let i = 0; i < boxes.length; i++) {
      boxes[i] = $("#box" + i.toString()).attr("class");
    }
    checkPlayer2Win();
    checkTie();
    if (player2.won) {
      gameStatus.player2wins = true;
      gameOver();
    } else if (tieGame.won) {
      gameStatus.tieGame = true;
      gameOver();
    }
  } else if (this.className.includes("box-filled")) {
    alert("That Spot Is Taken!!");
  }
});

$(".box").hover(
  function() {
    if (player1.isTurn) {
      $(this).addClass("box1");
    } else if (player2.isTurn) {
      $(this).addClass("box2");
    }
  },
  function() {
    $(this).removeClass("box1");
    $(this).removeClass("box2");
  }
);

function checkPlayer1Win() {
  if (
    (boxes[0].includes("box-filled-1") &&
      boxes[1].includes("box-filled-1") &&
      boxes[2].includes("box-filled-1")) ||
    (boxes[0].includes("box-filled-1") &&
      boxes[3].includes("box-filled-1") &&
      boxes[6].includes("box-filled-1")) ||
    (boxes[0].includes("box-filled-1") &&
      boxes[4].includes("box-filled-1") &&
      boxes[8].includes("box-filled-1")) ||
    (boxes[1].includes("box-filled-1") &&
      boxes[4].includes("box-filled-1") &&
      boxes[7].includes("box-filled-1")) ||
    (boxes[2].includes("box-filled-1") &&
      boxes[5].includes("box-filled-1") &&
      boxes[8].includes("box-filled-1")) ||
    (boxes[2].includes("box-filled-1") &&
      boxes[4].includes("box-filled-1") &&
      boxes[6].includes("box-filled-1")) ||
    (boxes[3].includes("box-filled-1") &&
      boxes[4].includes("box-filled-1") &&
      boxes[5].includes("box-filled-1")) ||
    (boxes[6].includes("box-filled-1") &&
      boxes[7].includes("box-filled-1") &&
      boxes[8].includes("box-filled-1"))
  )
    player1.won = true;
  gameStatus.player1wins = true;
}

function checkPlayer2Win() {
  if (
    (boxes[0].includes("box-filled-2") &&
      boxes[1].includes("box-filled-2") &&
      boxes[2].includes("box-filled-2")) ||
    (boxes[0].includes("box-filled-2") &&
      boxes[3].includes("box-filled-2") &&
      boxes[6].includes("box-filled-2")) ||
    (boxes[0].includes("box-filled-2") &&
      boxes[4].includes("box-filled-2") &&
      boxes[8].includes("box-filled-2")) ||
    (boxes[1].includes("box-filled-2") &&
      boxes[4].includes("box-filled-2") &&
      boxes[7].includes("box-filled-2")) ||
    (boxes[2].includes("box-filled-2") &&
      boxes[5].includes("box-filled-2") &&
      boxes[8].includes("box-filled-2")) ||
    (boxes[2].includes("box-filled-2") &&
      boxes[4].includes("box-filled-2") &&
      boxes[6].includes("box-filled-2")) ||
    (boxes[3].includes("box-filled-2") &&
      boxes[4].includes("box-filled-2") &&
      boxes[5].includes("box-filled-2")) ||
    (boxes[6].includes("box-filled-2") &&
      boxes[7].includes("box-filled-2") &&
      boxes[8].includes("box-filled-2"))
  ) {
    player2.won = true;
    gameStatus.player2wins = true;
  }
}
function checkTie() {
  if (
    boxes[0].includes("box-filled") &&
    boxes[1].includes("box-filled") &&
    boxes[2].includes("box-filled") &&
    (boxes[0].includes("box-filled") &&
      boxes[3].includes("box-filled") &&
      boxes[6].includes("box-filled")) &&
    (boxes[0].includes("box-filled") &&
      boxes[4].includes("box-filled") &&
      boxes[8].includes("box-filled")) &&
    (boxes[1].includes("box-filled") &&
      boxes[4].includes("box-filled") &&
      boxes[7].includes("box-filled")) &&
    (boxes[2].includes("box-filled") &&
      boxes[5].includes("box-filled") &&
      boxes[5].includes("box-filled")) &&
    (boxes[2].includes("box-filled") &&
      boxes[4].includes("box-filled") &&
      boxes[6].includes("box-filled")) &&
    (boxes[3].includes("box-filled") &&
      boxes[4].includes("box-filled") &&
      boxes[5].includes("box-filled")) &&
    (boxes[6].includes("box-filled") &&
      boxes[7].includes("box-filled") &&
      boxes[8].includes("box-filled"))
  ) {
    tieGame.won = true;
    gameStatus.tieGame = true;
  }
}

function gameOver() {
  if (player1.won) {
    $(".screen-win").attr("class", "screen screen-win screen-win-one");
    screenWin();
    showScreens();
    document.getElementById("winner").innerHTML = text + "Wins!";
  } else if (player2.won) {
    $(".screen-win").attr("class", "screen screen-win screen-win-two");
    screenWin();
    showScreens();
    document.getElementById("winner").innerHTML = "X Wins!";
  } else if (tieGame.won) {
    $(".screen-win").attr("class", "screen screen-win  screen-win-tie");
    screenWin();
    showScreens();
    document.getElementById("winner").innerHTML = "Tie Game!!";
  }
}

function newGame() {
  for (let i = 0; i < boxes.length; i++) {
    $("#box" + i.toString()).attr("class", "box");
    boxes[i] = null;
  }
  player1.won = false;
  player2.won = false;
  tieGame.won = false;
  player1.isTurn = true;
  newGameScreen();
  showScreens();
  $("#player1").attr("class", "players active");
  $("#player2").attr("class", "players");
}

function getName() {
  var x = document.getElementById("nameInput");
  text = "";
  text += x.value;
  document.getElementById("player1Name").innerHTML = text;
}
