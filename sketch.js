const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;
var playerBase, player, computerBase, computer;


function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  
   //Initialising Engine
  engine = Engine.create();
  world = engine.world;

	
   //Create Player Base and Computer Base Object
   playerBase = new Base(300, random(450, height - 300), 180, 150, false);
   player = new Player(300, playerBase.body.position.y - 153, 50, 180)
   computerBase = new Base(width - 300, random(450, height - 300), 180, 150, true);
   computer = new Player(width - 300, computerBase.body.position.y - 153, 50, 180)

 }

function draw() {

  background(180);

  Engine.update(engine);

  // Title
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("EPIC ARCHERY", width / 2, 100);

   //Display Playerbase and computer base 
   playerBase.display();
   computerBase.display();

   //display Player and computer
   player.display();
   computer.display();


}
