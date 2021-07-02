var sword
var swordImage
var fruit1,fruit2,fruit3,fruit4,fruitGroup
var score
var alien1
var alien2
var PLAY=1;
var END=0;
var gameState=1;
var knifeSwordSound
var gameOverSound




function preload(){
  swordImage=loadImage("sword.png")
  fruit1Image=loadImage("fruit1.png")
  fruit2Image=loadImage("fruit2.png")
  fruit3Image=loadImage("fruit3.png")
  fruit4Image=loadImage("fruit4.png")
  alien1Image=loadImage("alien1.png")
  alien2Image=loadImage("alien2.png")
  knifeSwordSound=loadSound("knifeSwooshSound.mp3")
  gameOverSound=loadSound("gameover.mp3")
  monsterImage=loadAnimation("alien1.png","alien2.png")
  gameoverImage=loadImage("gameover.png")
  

}
function setup(){
  
createCanvas(600,600);
  
  fruitGroup=createGroup();
  enemyGroup=createGroup();
  
  sword=createSprite(400,400,20,20)
  sword.addImage(swordImage);
  sword.scale=0.7
  score=0;
}
function draw(){
  
 
 background("lightblue") 
 
    
  if (gameState==PLAY){
    
  
  
  fruits()
  
  Enemy()
  
 
  
  sword.y=World.mouseY;
  sword.x=World.mouseX;
   
if(fruitGroup.isTouching(sword)){
  fruitGroup.destroyEach();
  score=score+2
  
  
  knifeSwordSound.play();
  
}
  
    
    
    
  } 
  
  
  if(enemyGroup.isTouching(sword)){
    enemyGroup.destroyEach();
    gameState=END;
    
    gameOverSound.play()
    
    
    fruitGroup.destroyEach();
    enemyGroup.destroyEach();
    fruitGroup.setVelocityXEach(0);
    enemyGroup.setVelocityXEach(0);
    
    
    
    
    
    sword.addImage(gameoverImage);
    sword.x=200;
    sword.y=200;
  }
  
 
  
  
  
   text("playerScore" +score,500,50) 
  drawSprites()
  

}

function fruits(){
  if(World.frameCount%80===0){
    position=Math.round(random(1,2));
    fruit=createSprite(400,200,20,20);
    fruit.scale=0.2;
    if(position==1)
      {
        fruit.x=400;
        fruit.velocityX=-(7+(score/4));
      }
    else
      {
        if(position==2){
          fruit.x=0;
          
          
          fruit.velocityX= (7+(score/4));
        }
      }
  
    
    
    r=Math.round(random(1,4));
  if (r==1) {
    fruit.addImage(fruit1Image)
  } else if (r==2){
    fruit.addImage(fruit2Image)
  } else if (r==3) {
    fruit.addImage(fruit3Image)
  } else if (r==4) {
    fruit.addImage(fruit4Image)
  }
    fruit.y=Math.round(random(50,340));
    
    fruit.velocityX=-7
    fruit.setLifetime=100;
     
    fruitGroup.add(fruit);
    
    
   }
  }

 function Enemy(){
   if(World.frameCount%200===0){
     monster=createSprite(400,200,20,20);
monster.addAnimation("moving",monsterImage);
monster.y=Math.round(random(100,300));
monster.velocityX=-(8+(score/10));
monster.setLifetime=50;
     
     enemyGroup.add(monster);
   }
     
    
   
 }



