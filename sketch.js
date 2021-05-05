var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;

 
var snow = [];
var backgroundImg
function preload() {
  backgroundImg = loadImage("snow2.jpg");
}
function setup() {
  createCanvas(1280, 720);
  engine = Engine.create();
  world = engine.world;

}
 
function draw() {
  background(backgroundImg);
  Engine.update(engine);
  
  if(frameCount%40===0){
    snow.push(new Snow(random(10, 700),0,random(30, 70)));
  }

  for (var j = 0; j < snow.length; j++) {
   
    snow[j].display();
  }

}