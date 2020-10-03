var car,wall,speed,weight,deformation;
function setup() {
  createCanvas(800,400);

  speed=Math.round(random(50,50));
  weight=random(1500,400);

  car=createSprite(200, 200, 50, 50);
  car.shapeColor="grey";
  car.velocityX=speed;

  wall=createSprite(700,200,20,200);
  wall.shapeColor="red";

}

function draw() {
  background(255,255,255);  
  if(wall.x-car.x<car.width/2+wall.width/2){
    car.velocityX=0;
    deformation=0.5*speed*speed*weight/2250;
  if(deformation<100){
    car.shapeColor="green";
  }
  if(deformation<180&&deformation>100){
      car.shapeColor=color(230,230,0);
  }
  if(deformation>180){
      car.shapeColor="red";
  }

  }
  drawSprites();
}