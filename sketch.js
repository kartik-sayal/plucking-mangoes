
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine, world;

var chain1;
var ground;

function preload()
{
	tree1 = loadImage("tree.png");

	boy1 = loadImage("boy.png");
}

function setup() {
	createCanvas(1400,600);


	engine = Engine.create();
	world = engine.world;

   stone1 = new stone (220,420,90);

   mango1 = new mango(1140,180,30);

   mango2 = new mango(1120,240,30);

   mango3 = new mango(1190,260,30);

   mango4 = new mango(1270,270,30);

   mango5 = new mango(1220,180,30);

  chain1 = new chain(stone1.body, {x:240,y:390})

  ground = createSprite(700,550,1400,30);

	Engine.run(engine);
  
}


function draw() {
 
  background(2,198,252);

  image(tree1,1020,100,350,450);

  image (boy1,200,350,200,250);
  Engine.update(engine);

 detectcollision(stone1,mango1);

 detectcollision(stone1,mango2);

 detectcollision(stone1,mango3);
 
 detectcollision(stone1,mango4);

 detectcollision(stone1,mango5);

 stone1.display();

 mango1.display();

 mango2.display();

 mango3.display();
 
 mango4.display();
 
 mango5.display();

 chain1.display();

 ground.display();

  drawSprites();
 
}

function mouseDragged(){
    Matter.Body.setPosition(stone1.body, {x: mouseX , y: mouseY});
}

function mouseReleased(){
    chain1.fly();
}

function detectcollision(stone,mango){

	mangopos = mango.body.position
	stonepos = stone.body.position

	var distance = dist(stonepos.x,stonepos.y,mangopos.x,mangopos.y);
	console.log(mango.r);
	if(distance <= mango.r + stone.r){
	
		Matter.Body.setStatic(mango.body,false);

	}
}