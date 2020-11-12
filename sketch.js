const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground;
var rect1,rect2,rect3;
var paper;

function setup() {
	createCanvas(1000, 400);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	
	ground=new Ground(500,380,1000,20);
   
	rect1=new Dustbin(750,330,20,100);
	rect2=new Dustbin(850,370,200,20);
	rect3=new Dustbin(950,330,20,100);

	paper=new Paper(200,350,20);

	Engine.run(engine);
  
}


function draw() {
  background(0);

  rect1.display();
  rect2.display();
  rect3.display();
  ground.display();
  
  paper.display();
  
 
}

function keyPressed()
{
	if(keyCode === UP_ARROW)
	{
		Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-85});
	}
}



