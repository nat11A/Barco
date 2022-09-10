var sea, seaImage;
var ship, shipImage;

function preload(){
 seaImage = loadImage("sea.png");
 shipImage = loadAnimation("ship-1.png", "ship-2.png", "ship-3.png", "ship-4.png");
}

function setup(){
  createCanvas(400,400);
  sea = createSprite(0,170,10,10);
  sea.addImage(seaImage);
  sea.scale = 0.3;
  ship = createSprite(85,180, 0.5, 0.5);
  ship.addAnimation("ship1", shipImage)
  ship.scale = 0.25;
}

function draw() {
  background("blue");
  if (sea.x <0) {
      sea.x=sea.width/2;
  }
 drawSprites();
}