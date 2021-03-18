//creating global variable

var play=0;
var end=1;
var gameState=0;
var monkey , monkey_running,monkeyCollided;
var banana ,bananaImage, obstacle, obstacleImage;
var FoodGroup, obstacleGroup;
var score;
var ground;
var survivalTime;



function preload(){
  
  //loading image
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  monkey_coillided=loadAnimation("sprite_8.png");
  
  
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
  
  createCanvas(680,400);
  
  
  //creating sprite for monkey
  monkey=createSprite(100,367,30,30);
  monkey.addAnimation("monkey_running",monkey_running );
   monkey.addAnimation("monkey_collided",monkey_coillided );
  
  monkey.scale=0.1;
  
  //creatig sprite for ground
  ground=createSprite(300,400,700,10);
  ground.velocityX=-5;
 
  
  FoodGroup=new Group();
  obstacleGroup=new Group();
 
  monkey.setCollider("rectangle",0,0,100,monkey.height-50);
  monkey.debug=false;
}


function draw() {
  background("lightcyan");
  
  ground.x=ground.width/2;
  
  text("survivalTime:"+survivalTime,500,20);
  
  if(gameState===play){
    //Assigning position of ground
   
    
    survivalTime=Math.ceil(frameCount/frameRate());
    
     if(frameCount%300==0){
      stone(); 
    }
    
     //Adding fruits
    if(frameCount%150==0){
    fruits();
  }
    
    
    
    if(keyDown("space") && monkey.y>=350 ){
      monkey.velocityY=-12;
    }
    
     if(monkey.isTouching(FoodGroup)){
        FoodGroup[0].destroy();
     }
    
  }
  
  if(monkey.isTouching(obstacleGroup)){
    gameState=end;
    monkey.changeAnimation("monkey_collided",monkey_coillided)
  }
    
 if(gameState===end){
   obstacleGroup.setVelocityXEach(0);
   obstacleGroup.setLifetimeEach(-1);
   
   FoodGroup.setVelocityXEach(0);
   FoodGroup.setLifetimeEach(-1);
   
 } 
    
   

    
    
      
    
    
  
    
 
  
  
  
  
  //Adding gravity
  monkey.velocityY=monkey.velocityY+0.3;  
  monkey.collide(ground);
  
 
  console.log(monkey.y)
  
  
    //
   // monkey.changeAnimation("munker_running",sprite_8.png )
  
  
  drawSprites();
  
 
 

  
}
function fruits(){
  
  banana=createSprite(670,200);
  banana.addImage(bananaImage);
  banana.scale=0.12;
  banana.velocityX=-3;
  banana.y=random(120,200);
  banana.lifetime=233 ;
  FoodGroup .add(banana);
  
}

function stone(){
  obstacle=createSprite(670,370)
  obstacle.addImage(obstaceImage);
  obstacle.scale=0.2;
  obstacle.velocityX=-5;
  obstacle.lifetime=134;
  obstacleGroup.add(obstacle);
  
}




