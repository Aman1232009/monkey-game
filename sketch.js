
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var foodGroup, obstacleGroup
var survivalTime;
var ground
function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
monkey=createSprite(80,315,20,20)  
monkey.addAnimation("moving",monkey_running)
monkey.scale=0.2;
foodGroup=new Group();
obstacleGroup=new Group();

 
ground=createSprite(400,350,900,10);
ground.velocityX = -4
ground.x = ground.width/2;
console.log(ground.x)
  
survivalTime = 0
}



function draw() {
background("white")

monkey.collide(ground);  

 if (ground.x < 0){
      ground.x = ground.width/2;
    }
  
if(keyDown("space")&& monkey.y >= 100) {
        monkey.velocityY = -12;
}
  monkey.velocityY = monkey.velocityY + 0.8
  
  Bananas();
  Obstacles();
 
  if(monkey.isTouching(foodGroup)){
  foodGroup.destroyEach();  
  }
  
 stroke("white");
 textSize(20);
 fill("white")
  
 
 stroke("black");
 textSize(20);
 fill("black");
 survivalTime=Math.ceil(frameCount/frameRate())
 text("Survival Time:"+survivalTime,100,20);
 
  
  
drawSprites();
}  

function Bananas(){
    if (frameCount % 80===0){
    Banana=createSprite(400,200,20,20);
    Banana.addImage(bananaImage)
    Banana.y=Math.round(random(120,200));
    Banana.velocityX = -3;
    Banana.scale = 0.1;
    Banana.setLifetime=100;
      
    foodGroup.add(Banana);
    }
    }
    

function Obstacles(){
    if (frameCount % 300===0){
    Obstacle=createSprite(400,330,20,20);
    Obstacle.addImage(obstacleImage)
    Obstacle.velocityX = -5;
    Obstacle.scale = 0.2; 
    Obstacle.Lifetime=100;
     
    obstacleGroup.add(Obstacle);
    }
} 