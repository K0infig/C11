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
    path=createSprite(200,200);
    path.addImage(pathImg);
    path.velocityY = 4;
    path.scale=1.2;

    runner = createSprite(200,300);
    runner.addAnimation("running",running);
    runner.scale =0.05;

}


function draw() {
   console.log(path.y);

   runner.x = World.mouseX;
  if(path.y>400){
    path.y = width/2
  }

  drawSprites();
}
