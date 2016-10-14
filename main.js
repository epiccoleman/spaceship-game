var appellations = ["dude", "man", "bro", "brotha", "homie", "dawg", "yo", "homes", "ese"];
var spaceMan = document.getElementById("spaceMan");
spaceMan.innerHTML = "You're in space," + appellations[Math.floor(Math.random()*appellations.length)];
