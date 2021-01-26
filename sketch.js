
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj,groundObject;
var paper;
var world;
var garbajeBody;

function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	groundObject=new ground(width/2,670,width,20);
	dustbinObj=new dustbin(1200,650);
    paper=new Paper(600,650,50,50);
	garbajeBody=new Garbage(1200,645,170,190);
  
}


function draw() {
	Engine.update(engine);
  rectMode(CENTER);
  background(230);
   
  if(paper.body.position.y===470){
	Matter.Body.setVelocity(paper.body,{X:0,Y:0});
	   
   }
  paper.display();
  dustbinObj.display();
  garbajeBody.display();
  groundObject.display();
   
}
function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.setVelocity(paper.body,{x:9,y:-10});
	}
}
