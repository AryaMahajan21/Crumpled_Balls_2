
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj,groundObject	
var world;
var ball,ballBody

function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	groundObject=new ground(width/2,670,width,20);
	dustbinObj=new dustbin(1200,650);
	ball = new Paper(200,600,20,20)
	

	ballBody = Bodies.rectangle(200,500,20,20)
	World.add(world,ballBody)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(230);
 

  groundObject.display();
  dustbinObj.display();
  ball.display()

}
function keyPressed(){
	if (keyCode === 38){ // when you are using keycode then use code of that key from ASCII chart
	
		Matter.Body.applyForce(ball.body,ball.body.position,{x:85,y:-55}) // I have changed paperobject to ball
	}
}
