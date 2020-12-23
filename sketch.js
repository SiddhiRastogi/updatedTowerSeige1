const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies
const Constraint = Matter.Constraint

var engine,world;
var ball;
var slingshot;

var GameState = "onSling";
var polygon 

function preload(){
polygon = loadImage('polygon.png')
}

function setup() {
  createCanvas(800,400);

engine = Engine.create();
world = engine.world;

 Engine.run(engine);
 
  ground1 = new Ground(400,390,800,25);
  ground2 = new Ground(250,260,150,20);
  ground3 = new Ground(555,190,150,20);

  box1 = new Box(200,235,30,30);
  box2 = new Box(235,235,30,30);
  box3 = new Box(270,235,30,30);
  box4 = new Box(305,235,30,30);
  box5 = new Box(235,165,30,30);
  box6 = new Box(270,165,30,30);
  box7 = new Box(220,200,30,30);
  box8 = new Box(255,200,30,30);
  box9 = new Box(290,200,30,30);
  box10 = new Box(250,130,30,30);

  box11 = new Box(500,170,30,30)
  box12 = new Box(535,170,30,30);
  box13 = new Box(570,170,30,30);
  box14 = new Box(605,170,30,30);
  box15 = new Box(590,135,30,30);
  box16 = new Box(555,135,30,30);
  box17 = new Box(520,135,30,30);
  box18 = new Box(575,100,30,30);
  box19 = new Box(540,100,30,30);
  box20 = new Box(555,65,30,30);
 
  ball = Bodies.circle(50,200,20);
  World.add(world,this.ball);

  slingshot = new SlingShot(this.ball,{x:100,y:150})
  
}

function draw() {
  background(0,0,0);  
  drawSprites();

  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box1.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();
  box16.display();
  box17.display();
  box18.display();
  box19.display();
  box20.display();
  ground1.display();
  ground2.display();
  ground3.display();
  slingshot.display();

image(polygon , ball.position.x,ball.position.y,40,40);
 

}

function mouseDragged(){
  if(GameState!=="launched"){
  Matter.Body.setPosition(this.ball,{x:mouseX,y:mouseY})
  }
}

function mouseReleased(){
  slingshot.fly();
  GameState = "launched";
}