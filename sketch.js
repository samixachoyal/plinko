const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground,ground2,ground3,ground4;
var plinkos= [];
var particles= [];
var  divisions=[];
var divisionHeight =300;

function setup() {
  createCanvas(480,800);
  engine = Engine.create();
  world = engine.world;
for(var k=0;k<= width; k=k+80){

  divisions.push(new Division(k,height-divisionHeight/2,10,divisionHeight));
}

for(var j = 40; j<=width;j=j+50){
  plinkos.push(new Plinko(j,75));
}

for(var j = 15; j<=width;j=j+50){
  plinkos.push(new Plinko(j,175));
}

for(var j = 30; j<=width;j=j+50){
  plinkos.push(new Plinko(j,275));
}

for(var j = 15; j<=width;j=j+50){
  plinkos.push(new Plinko(j,375));
}
  
  ground = new Ground(240,795,480,10);

  ground2 = new Ground(240,5,480,10);

  ground3 = new Ground(475,400,10,800);

  ground4 = new Ground(5,400,10,800);
}

function draw() {
  background("Blue");
  Engine.update(engine);  

  if(frameCount%60===0){
    particles.push(new Particle(random(100,700),10,10));
  }
  
  for(var i=0 ; i< particles.length; i++){

  particles[i].display();
  }

  for(var j=0 ; j< plinkos.length; j++){

    plinkos[j].display();
  }

  for(var k=0 ; k< divisions.length; k++){

    divisions[k].display();
  }

 

  ground.display();
  ground2.display();
  ground3.display();
  ground4.display();
  drawSprites();
}