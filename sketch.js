const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint= Matter.Constraint;

var mango1,mango2,mango3,mango4,mango5,mango6,mango7,mango8,mango9,mango10
var mango11,ground,tree,launcherObj,stone,boy;
var launchingForce = 100;



function setup() {
	createCanvas(1350, 650);

	engine = Engine.create();
	world = engine.world;

  //Create the Bodies Here.
  stone = new Stone(1100,440,30);
  tree = new Tree(250,600);
  mango1 = new Mango(220,250,30);    
 mango2 = new Mango(265,125,30);    
 mango3 = new Mango(140,270,30);  
 mango4 = new Mango(430,270,30);    
 mango5 = new Mango(95,185,30);
 mango6= new Mango(350,170,30);    
 mango7 = new Mango(290,55,30);     
 mango8 = new Mango(320,260,30);
 mango9 = new Mango(190,75,30);     
 mango10 = new Mango(190,180,30);    
 mango11 = new Mango(440,200,30); 
 ground = new Ground(700,630,1450,20);
 boy= new Boy(1170,520,200,350)
 launcherObj= new Launcher(stone.body,{x:1100, y:440});

Engine.run(engine);
  
}

function draw() {
  rectMode(CENTER);
  background(300);
  Engine.update(engine);

  textSize(25);
  text("!!Press Space to play again!!",500,100);

  tree.display();
  stone.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();
  mango11.display();
  
  boy.display();
  ground.display();
  launcherObj.display();
  
  detectollision(stone,mango1);
  detectollision(stone,mango2);
  detectollision(stone,mango3);
  detectollision(stone,mango4);
  detectollision(stone,mango5);
  detectollision(stone,mango6);
  detectollision(stone,mango7);
  detectollision(stone,mango8);
  detectollision(stone,mango9);
  detectollision(stone,mango10);
  detectollision(stone,mango11);
  
}

function mouseDragged(){
  Matter.Body.setPosition(stone.body,{x:mouseX, y:mouseY});
}

function mouseReleased(){
  launcherObj.fly();
}

function keyPressed(){
  if(keyCode=== 32){
    Matter.Body.setPosition(stone.body,{x:1100, y:440});
    launcherObj.attach(stone.body);
  }
}

function detectollision(lstone, mango){

  mangoBodyPosition= mango.body.position;
  stoneBodyPosition= lstone.body.position;

  var distance= dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y);

  if(distance<=mango.r + lstone.r){
  Matter.Body.setStatic(mango.body,false);
  }
}
