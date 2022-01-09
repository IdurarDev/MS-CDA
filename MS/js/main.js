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