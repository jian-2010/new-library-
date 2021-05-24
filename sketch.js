var movingRect,fixedRect;
var s1,s2,s3,s4;


function setup() {
  createCanvas(800,400);
  movingRect = createSprite(400, 200, 50, 50);
  movingRect.shapeColor="green"
  fixedRect = createSprite(700, 100, 80, 50);
  fixedRect.shapeColor="green"
  s1 = createSprite(100,100,50,50);
  s1.shapeColor="green"
  s2 = createSprite(200,100,50,50);
  s2.shapeColor="green"
  s3 = createSprite(300,100,50,50);
  s3.shapeColor="green"
  s4 = createSprite(400,100,50,50);
  s4.shapeColor="green"


  //movingRect.debug=true;
  //fixedRect.debug=true;
}

function draw() {
  background("blue");  
  
  movingRect.x= World.mouseX
  movingRect.y= World.mouseY

  if(isTouching(movingRect,s2)){
    s2.shapeColor="red"
    movingRect.shapeColor="red"

  }
  else{
    s2.shapeColor="green"
    movingRect.shapeColor="green"
  }
  
  drawSprites();
}

