const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var box1, box2, box3;
var paper;
var ground1;

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	box1 = new Box(600,650,200,20);
	box2 = new Box(500,610,20,200);
	box3 = new Box(700,610,20,200); 

	paper = new PaperObject(50,500,55);

	ground1 = new Ground(400,690,800,70);
  
}


function draw() {
  background(0);
  rectMode(CENTER);

  Engine.update(engine);

  box1.display();
  box2.display();
  box3.display();
  paper.display();
  ground1.display();
 
}

function keyPressed() {
	if(keyCode === UP_ARROW) {

		Matter.Body.applyForce(paper.body, paper.body.position, {x:625, y:1500});
	}
}
