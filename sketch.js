var pathImg;
var path;
var runner, running;
function preload(){
    pathImg = loadImage("path.png");
    running = loadAnimation("Runner-1.png","Runner-2.png");
}
 
function setup(){
    createCanvas(400, 400);

    //create sprites here
    path = createSprite(205, 195);
    path=createSprite(200,200);
    path.addImage(pathImg);
    path.velocity=4;
    path.velocityY = 4;
    path.scale=1.2;



 function draw() {
    

     if(keyIsDown(LEFT_ARROW)){
       runner.veloctiyY = -10;
       runner.x -= 3;
     }
    }
}
