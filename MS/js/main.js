class Players {
  constructor (name, attack, points) {
    this.name = name;
    this.attack = attack;
    this.points = points;
  }
}

let pvY = 100;
let pvM = 100;

const playerOne = new Players("You", attack, pvY);
const playerTwo = new Players("Monster", attackMonster, pvM);

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



percentY.innerHTML = pvY;
percentM.innerHTML = pvM;

function hideBtnAttacks () {
  btnStart.hidden = false;
  btnAttack.hidden = true;
}

hideBtnAttacks()

function starting () {
  btnStart.hidden = true;
  btnAttack.hidden = false;
  my.value = 100;
  monster.value = 100;
  pvY = 100;
  pvM = 100;
  percentY.innerHTML = pvY;
  percentM.innerHTML = pvM;
}

btnStart.addEventListener('click', starting);

function attackMonster () {
  return Math.floor(Math.random() * ((10 - 5) + 1) + 5);
}

function attack () {
  my.value -= attackMonster();
  pvY -= attackMonster();
  percentY.innerHTML = pvY;
  let attackMy = Math.floor(Math.random() * ((10 - 3) + 1) + 3);
  monster.value -= attackMy;
  pvM -= attackMy;
  percentM.innerHTML = pvM;
  
  checkingScore()
  
}



function specialAttack () {

  my.value -= attackMonster();
  pvY -= attackMonster();
  percentY.innerHTML = pvY;
  let specialMy = Math.floor(Math.random() * ((20 - 10) + 1) + 10);
  monster.value -= specialMy;
  pvM -= specialMy;
  percentM.innerHTML = pvM;

  checkingScore()

}


function heal () {
  if ((pvY += 10) >= 100) {
    pvY = 100;
  } else {
    pvY += 10;
  }
  pvY -= attackMonster();
  pvM;
  percentY.innerHTML = pvY;
  my.value = pvY;

  percentM.innerHTML = pvM;
  monster.value = pvM
  
  checkingScore()
}



function giveUp () {
  if(confirm('You are give up, new game ?')) {
    hideBtnAttacks()
  }
  my.value = 100;
  monster.value = 100;
  pvY = 100;
  pvM = 100;
  percentY.innerHTML = pvY;
  percentM.innerHTML = pvM;
}



function checkingScore () {
  if (pvY <= 0) {
    if(confirm('Monster is winner, new game?')) {
      starting()
      hideBtnAttacks()
    } else {
      starting()

      hideBtnAttacks()
    }
  } else if (pvM <= 0) {
    if(confirm('You is winner, new game?')) {
      starting()
      hideBtnAttacks()
    } else {
      starting()
      hideBtnAttacks()
    }
  }
}