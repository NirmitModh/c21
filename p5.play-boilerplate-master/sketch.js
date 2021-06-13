var fixedRect,movingRect;
var stone1,stone2,stone3,stone4;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 200, 50, 50);
  movingRect = createSprite(350,500,100,200);
  fixedRect.shapeColor ="green";
  movingRect.shapeColor ="green";
  fixedRect.debug=true;
  movingRect.debug=true;
  stone1 = createSprite(100,100,50,50);
  stone1.shapeColor ="black";
  stone2 = createSprite(200,100,50,50);
  stone2.shapeColor ="black";
  stone3 = createSprite(300,100,50,50);
  stone3.shapeColor ="black";
  stone4 = createSprite(400,100,50,50);
  stone4.shapeColor ="black";

}

function draw() {
  background("blue");
  
  movingRect.x=mouseX;
  movingRect.y=mouseY;

 if(isTouching(stone1,movingRect)) {
    stone1.shapeColor ="red";
    movingRect.shapeColor ="red";
 }
 else {
  stone1.shapeColor ="black";
  movingRect.shapeColor ="green";

 }

  drawSprites();
}
