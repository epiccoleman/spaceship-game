var myShip =
              { crew: [{name: "Eric"}],
                engine: { type: "shitty", charge: 1, speed: 10 },
                gun: { type: "crappy", chargeCapacity: 1, damage: 10, accuracy: .5 },
                hull: 10
                position: {x: 0, y: 0}}
// battleships confide in me and tell me where you are

update(){
  myShip.position.x += charge;
}
