var myShip =  { crew: [{name: "Eric"}],
                engine: { type: "shitty", charge: 1, speed: 10 },
                gun: { type: "crappy", chargeCapacity: 1, damage: 10, accuracy: .5 },
                hull: 10,
                position: {x: 0, y: 0}}
// battleships confide in me and tell me where you are

var moveButton = document.getElementById("moveButton");
var positionText = document.getElementById("positionText");
var moveXDistanceBox = document.getElementById("moveXDistanceBox");
var moveYDistanceBox = document.getElementById("moveYDistanceBox");

var moveXDistance = 0;
var moveYDistance = 0;

function update(trigger){
  moveXDistance = Number(moveXDistanceBox.value);
  moveYDistance = Number(moveYDistanceBox.value);
  console.log("move x: " + moveXDistance + ", y: " + moveYDistance);
  myShip.position.x += moveXDistance;
  myShip.position.y += moveYDistance;

  positionText.innerHTML = "Your position is: " + myShip.position.x + ", " + myShip.position.y;
  moveXDistanceBox.value = 0;
  moveYDistanceBox.value = 0;
}

moveXButton.addEventListener('click', update);
moveYButton.addEventListener('click', update);
