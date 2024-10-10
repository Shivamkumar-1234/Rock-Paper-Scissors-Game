let player1 = document.querySelector(".ply-1");
let player2 = document.querySelector(".ply-2");
let result = document.querySelector(".ply-3");


let turnPlayer1 = true;
let turnPlayer2 = false;
let restart=true


function start_1() {
  if (turnPlayer1 && restart) {
    player1.setAttribute("class", "face1");

    setTimeout(() => {
      player1.classList.remove("face1");
      let num = Math.floor(Math.random() * 3) + 1;
      if (num == 1) {
        player1.innerHTML = "rock";
        player1.setAttribute("class", "rock");
      } else if (num == 2) {
        player1.innerHTML = "paper";
        player1.setAttribute("class", "paper");
      } else {
        player1.innerHTML = "scissors";
        player1.setAttribute("class", "scissors");
      }

      turnPlayer1 = false;
      turnPlayer2 = true;
    }, 4000);
  } else {if(!restart){
    alert("Round is over restart the game");
  }else{
    alert("It's Player 2's turn!");
  }
  
  }
}


function start_2() {
  if (turnPlayer2) {
    player2.setAttribute("class", "face1");

    setTimeout(() => {
      player2.classList.remove("face1");

      let num = Math.floor(Math.random() * 3) + 1;

      if (num == 1) {
        player2.innerHTML = "rock";
        player2.setAttribute("class", "rock");
      } else if (num == 2) {
        player2.innerHTML = "paper";
        player2.setAttribute("class", "paper");
      } else {
        player2.innerHTML = "scissors";
        player2.setAttribute("class", "scissors");
      }

      
      compare();

    
      turnPlayer2 = false;
      turnPlayer1 = true;
      restart=false
    }, 4000);
  } else {
    if(!restart){
        alert("Round is over restart the game");
    }else{
        alert("It's Player 1's turn!");
    }
   
  }
}


function compare() {
  let turn1 = player1.textContent;
  let turn2 = player2.textContent;

  if (turn1 == "rock" && turn2 == "scissors") {
    result.innerHTML = "PLAYER-1";
  } else if (turn1 == "paper" && turn2 == "rock") {
    result.innerHTML = "PLAYER-1";
  } else if (turn1 == "scissors" && turn2 == "paper") {
    result.innerHTML = "PLAYER-1";
  } else if (turn1 == turn2) {
    result.innerHTML = "DRAW";
  } else {
    result.innerHTML = "PLAYER-2";
  }
}


function reset() {
  player1.innerHTML = "";
  player2.innerHTML = "";
  result.innerHTML = "?";
  player1.setAttribute("class", "none1");
  player2.setAttribute("class", "none2");


  turnPlayer1 = true;
  turnPlayer2 = false;
  restart=true
}