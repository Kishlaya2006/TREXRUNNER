
var trex ,trex_running ,ground ,ground_image;
function preload(){
  

trex_running = loadAnimation("trex1.png","trex3.png","trex4.png");
ground_image = loadAnimation("ground2.png")
}

function setup(){
  createCanvas(600,200)
  
  //create a trex sprite
 trex = createSprite(50, 180, 10, 30);
 trex.addAnimation("running",trex_running);
 trex.scale = 0.5;
 ground = createSprite(300, 200, 600, 5);
 edges = createEdgeSprites();
 ground.addAnimation("moving",ground_image)
}

function draw(){
  background("pink")
  

  if(keyDown("space")){
    trex.velocityY= -13 
  }
  trex.velocityY = trex.velocityY + 1;
  trex.collide(ground )
drawSprites()
}
