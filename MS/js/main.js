class Players {
  constructor (name, attack, points) {
    this.name = name;
    this.attack = attack;
    this.points = points;
  }
}


const playerOne = new Players("You", attack, 100);
const playerTwo = new Players("Monster", attackMonster, 100);

let btnStart = document.querySelector('.btn-start');
let btnAttack = document.querySelector('.btn-attack');
let my = document.getElementById('you');
let monster = document.getElementById('monster');
let punch = document.querySelector('.punch');
let specialPunch = document.querySelector('.specialPunch');
let health = document.querySelector('.health');
let stopping = document.querySelector('.stop');
let percentY = document.querySelector('.percentYou');
let percentM = document.querySelector('.percentMonster');

percentY.innerHTML = playerOne.points;
percentM.innerHTML = playerTwo.points;

function hideBtnAttacks () {
  btnStart.hidden = false;
  btnAttack.hidden = true;
}

hideBtnAttacks()

function starting () {
  btnStart.hidden = true;
  btnAttack.hidden = false;
  my.value = playerOne.points;
  monster.value = playerTwo.points;
  percentY.innerHTML = playerOne.points;
  percentM.innerHTML = playerTwo.points;
}

btnStart.addEventListener('click', starting);

function attackMonster () {
  return Math.floor(Math.random() * ((10 - 5) + 1) + 5);
}

function attack () {
  my.value -= attackMonster();
  playerOne.points -= attackMonster();
  percentY.innerHTML = playerOne.points;
  let attackMy = Math.floor(Math.random() * ((10 - 3) + 1) + 3);
  monster.value -= attackMy;
  playerTwo.points -= attackMy;
  percentM.innerHTML = playerTwo.points;
  
  checkingScore()
  
}

punch.addEventListener('click', attack);

function specialAttack () {

  my.value -= attackMonster();
  playerOne.points -= attackMonster();
  percentY.innerHTML = playerOne.points;
  let specialMy = Math.floor(Math.random() * ((20 - 10) + 1) + 10);
  monster.value -= specialMy;
  playerTwo.points -= specialMy;
  percentM.innerHTML = playerTwo.points;

  checkingScore()

}

specialPunch.addEventListener('click', specialAttack);

function heal () {
  if ((playerOne.points += 10) >= 100) {
    playerOne.points = 100;
  } else {
    playerOne.points += 10;
  }
  playerOne.points -= attackMonster();
  playerTwo.points;
  percentY.innerHTML = playerOne.points;
  my.value = playerOne.points;

  percentM.innerHTML = playerTwo.points;
  monster.value = playerTwo.points;
  
  checkingScore()
}

health.addEventListener('click', heal);


function giveUp () {
  if(confirm('You are give up, new game ?')) {
    hideBtnAttacks()
  }
  my.value = 100;
  monster.value = 100;
  playerOne.points = 100;
  playerTwo.points = 100;
  percentY.innerHTML = playerOne.points;
  percentM.innerHTML = playerTwo.points;
}

stopping.addEventListener('click', giveUp);

function checkingScore () {
  if (playerOne.points <= 0) {
    if(confirm('Monster is winner, new game?')) {
      starting()
      hideBtnAttacks()
    } else {
      starting()
      hideBtnAttacks()
    }
  } else if (playerTwo.points <= 0) {
    if(confirm('You is winner, new game?')) {
      starting()
      hideBtnAttacks()
    } else {
      starting()
      hideBtnAttacks()
    }
  }
}