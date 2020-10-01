const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var box1, box2, box3;
var ground, groundSprite;
var paper;

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	box1 = new Box(600,650,200,20);
	box2 = new Box(500,610,20,100);
	box3 = new Box(700,610,20,100); 

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color("yellow");

	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	World.add(world, ground);

	paper = new PaperObject(50,500);
  
}


function draw() {
  background(0);
  rectMode(CENTER);

  Engine.update(engine);

  box1.display();
  box2.display();
  box3.display();
  paper.display();

  drawSprites();
 
}

function keyPressed() {
	if(keyCode === UP_ARROW) {

		Matter.Body.applyForce(paper, paper.body.position, {x:625, y:400});
	}
}
