var dogi,happyDogi,dog ; 
var foodS,foodStock; 
var database; 
var readStock; 

function preload() 
{
  dogi=loadImage("images/dogImg.png"); 
  happyDogi=loadImage("images/dogImg1.png"); 
}

function setup() { 
  createCanvas(500, 500); 
  database=firebase.database(); 
  foodStock=database.ref('food'); 
  foodStock.on("value",(data)=>{
    foodS=data.val();
  })
  dog=createSprite(250,250,10,10); 
  dog.addImage(dogi); 

}


function draw() {   
  background(46, 139, 87); 

  dog.scale=0.5; 
  drawSprites(); 
  //add styles here 
  if(keyDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(happyDogi);
  }
}

function readStock(data){
  foodS=data.val();
}

function writeStock(x){

  if(x<=0){
    x=0;
  }else{
    x=x-1;
  }
  database.ref('/').update({
    food:x
  })
}