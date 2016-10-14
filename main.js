var myShip =  { crew: [{name: "Eric"}],
                engine: { type: "shitty", charge: 1, speed: 10 },
                gun: { type: "crappy", chargeCapacity: 1, damage: 10, accuracy: .5 },
                hull: 10,
                position: {x: 0, y: 0}}
// battleships confide in me and tell me where you are

var moveButton = document.getElementById("moveButton");
var positionText = document.getElementById("positionText");
var moveDistanceBox = document.getElementById("moveDistanceBox")
var moveDistance = 0;

function update(){
  console.log(moveDistanceBox.value);
  moveDistance = Number(moveDistanceBox.value);
  console.log('butts');
  console.log(moveDistance);
  myShip.position.x += moveDistance;
  positionText.innerHTML = "Your position is: " + myShip.position.x + ", " + myShip.position.y;
}

moveButton.addEventListener('click', update);
