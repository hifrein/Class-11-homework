var path,boy, leftBoundary,rightBoundary;
var pathImg,boyImg;
var i;
var can,canImg;
var coin, coinImg;

function preload(){
  pathImg = loadImage("path.png");
  boyImg = loadAnimation("Runner-1.png","Runner-2.png");
  canImg = loadImage("energyDrink.png");
  coinImg = loadImage("coin.png")

}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
path=createSprite(200,200);
path.addImage(pathImg);
path.velocityY = 4;
path.scale=1.2;

//creating boy running
boy = createSprite(180,340,30,30);
boy.scale=0.08;
boy.addAnimation("JakeRunning",boyImg);
  
//Create can sprite
can = createSprite(200,50,30,30);
can.scale = 0.06;
can.addImage(canImg);

//Create coin Sprite
coin = createSprite(100,50,30,30);
coin.scale = 0.2;
coin.addImage(coinImg);

leftBoundary=createSprite(0,0,100,800);

// leftBoundary.invisible = false;
// leftBoundary.visible = true;
// leftBoundary.invisible = true;
 leftBoundary.visible = false;


rightBoundary=createSprite(410,0,100,800);
rightBoundary.visible = false;
}

function draw() {
  background(0);
  path.velocityY = 4;
  
  can.velocityY = 3;

  boy.x = World.mouseX;
  
  coin.velocityY = 5;

  edges= createEdgeSprites();
  boy.collide(edges[3]);
  boy.collide(leftBoundary);
  boy.collide(rightBoundary);
  
  if(can.collide(boy)){
    console.log("Good Job!!");
    can.visible = false;
  }

  if(coin.collide(boy)){
    console.log("Awesome Job!! Take a drink!!");
    coin.visible = false;
  }
  //code to reset the background

  if(path.y > 400 ){
    path.y = height/2;
  }
  // All bellow code block, the code is correct, but the indentation in incorrect.
  
  /*if(path.y > 400 ){
   
  path.y = height/2;
  }*/

  /*if(path.y > 400 ){
path.y = height/2;}*/

/*if(path.y > 400 ){path.y = height/2;}*/
  
  drawSprites();
}
