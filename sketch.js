const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var dustbin1;
var dustbin2,dustbin3;
var paper1;


function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

   
  
   paper1= new Paper(300,320,50,50);
   dustbin1= new Dustbin(120,500,50,50);
   dustbin2= new Dustbin(220,500,50,50);
   dustbin3= new Dustbin(420,500,50,50);
}

function draw(){
    background(0);
    Engine.update(engine);
 
    dustbin1.display();
    dustbin2.display();
    dustbin3.display();
}
