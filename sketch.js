
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var particles=[];
var plinkos=[];
var divisions=[];

var divisionHeight=300;


var ground1;


function preload()
{
	
}

function setup() {
	createCanvas(500,800);
  //createSprite(400, 200, 50, 50);


	engine = Engine.create();
  world = engine.world;
  for(var k=0;k<=width; k=k+70){
    divisions.push(new Division (k,height-divisionHeight/2,5,divisionHeight)); 

  }
  for(var j=40;j<=width;j=j+50){
    plinkos.push(new Plinkos(j,75,10));
  }
  
  for(var j=15;j<=width-10;j=j+50){
   plinkos.push(new Plinkos(j,175,10)); 
  }

  for (var j=40;j<=width;j=j+50){
    plinkos.push(new Plinkos(j,275,10));  
  }

  for (var j=15;j<=width;j=j+50){
    plinkos.push(new Plinkos(j,375,10)); 
  }
  

 
	//Create the Bodies Here.
  ground1=new Ground(220,795,560,10);

  



	Engine.run(engine);
  
}


function draw() {
  background("black");  
  for (var k = 0; k < divisions.length; k++) { 
    divisions[k].display(); } 

    for(var j = 0; j < plinkos.length; j++){
      plinkos[j].display(); }
    
      if(frameCount%60===0){
        particles.push(new Particle(random(10,200),10,15));
        
      }
   
    for(var m=0; m < particles.length; m++){
      particles[m].display();
    }

  drawSprites();


ground1.display();


}






