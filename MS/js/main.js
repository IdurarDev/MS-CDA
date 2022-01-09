class Players {
  constructor (name, attack, points) {
    this.name = name;
    this.attack = attack;
    this.points = points;
  }
}

const playerOne = new Players("You", attack(), pv);
const playerOne = new Players("Monster", attackMonster(), pv);

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