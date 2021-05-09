var car;
var carImg;
var backgroundImg;
var backgroundG
function preload(){
  carImg=loadImage("car3.png");
 backgroundImg=loadImage("track.jpg")
}
function setup(){
createCanvas(1600,800);
 
 backgroundG=createSprite(500,800)
 backgroundG.addImage(backgroundImg)
 backgroundG.velocityY=5;
 car=createSprite(500,770,50,50)
 car.addImage(carImg)
 car.velocityY=-1
}
function draw(){
  background("white");
  if (backgroundG.y > 3000){
    backgroundG.y = 800
  }
  camera.position.x = displayWidth/2;
  if(car.y<200){
    car.velocityY=0;
  }

  
  drawSprites();
}