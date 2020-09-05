var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;

var cars, car1, car2, car3, car4;

var loadCar1,loadCar2,loadCar3,loadCar4;

var loadGround, loadTrack;



function preload(){
    loadCar1 = loadImage("images/car1.png");
    loadCar2 = loadImage("images/car2.png");
    loadCar3 = loadImage("images/car3.png");
    loadCar4 = loadImage("images/car4.png");

    loadGround = loadImage("images/ground.png");

    loadTrack = loadImage("images/track.png");
}

function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
}
