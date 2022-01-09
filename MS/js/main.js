class Players {
  constructor (name, attack, points) {
    this.name = name;
    this.attack = attack;
    this.points = points;
  }
}

const playerOne = new Players("You", attack(), pv);
const playerTwo = new Players("Monster", attackMonster(), pv);

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