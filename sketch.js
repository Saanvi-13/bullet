var bullet,wall;

var speed,weight,thickness;




function setup() {
  createCanvas(1600,400);

  bullet=createSprite(400, 200, 10, 5);
  wall=createSprite(1200,200,thickness,height/2)
  wall.shapeColour=(80,80,80);

speed=random(55,90);
weight=random(400,1500);
thickness=random(22,83);

bullet.velocityX=speed;



}

function draw() {
  background("black");  

if (bullet.x-bullet.x<(bullet.width+wall.width)/2){
bullet.velocityX=4;
bullet.collide(wall);
var deformation=0.5 * weight * speed * speed/22500;

if (deformation>180){

  bullet.shapeColour=(0, 255, 0);
}
if(deformation<800 && deformation>100){

  bullet.shapeColour=(230, 230, 0);
}
}
if(deformation<100){
  bullet.shapeColour=(255, 0, 0);
}

  drawSprites();
}