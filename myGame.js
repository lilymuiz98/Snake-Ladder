let turns = 0;

const position =[{name: "Player 1", pos: 0}, 
                {name: "Player 2", pos: 0}];



function rollDice(){

  var diceVal = Math.floor(Math.random() * 6) + 1;
  var move = document.querySelector('.move');   // position movement
  var dice = document.querySelector('.dice');   // position of the rolling dice
  var next = document.querySelector('.next');   // next player

  dice.textContent = position[turns].name + " rolled " + diceVal;
  position[turns].pos += diceVal;

  switch(position[turns].pos){
    //ladders
    case 8: alert(position[turns].name + " found a ladder! Advance to position 15.");
            position[turns].pos = 15; break;
    case 19: alert(position[turns].name + " found a ladder! Advance to position 24.");
            position[turns].pos = 24; break;

    //snakes
    case 15: alert(position[turns].name + " gulped by a snake! Fall to position 5.");
            position[turns].pos = 5; break;
    case 23: alert(position[turns].name + " gulped by a snake! Fall to position 16.");
            position[turns].pos = 16; break;
  }
  move.textContent = position[turns].name + " is at position " + position[turns].pos;

  if (position[turns].pos >= 25){
    alert("Congratulation " + position[turns].name + "! You won the game.");
    gameOver();
}

turns++;
next.textContent = ("Player 2, you're next!");
if (turns >= position.length) {
  turns = 0;
  next.textContent = ("Player 1, you're next!");
 }

}


function gameOver()
  {
window.location.reload();  // refresh or reload game once finish
  }