var back, back1;
var cat, cat1, cat2, cat3, cat4;
var mouse, mouse1, mouse2, mouse3, mouse4;

function preload() {
    //preload the images
    back1 = loadImage("garden.png");
    cat1 = loadImage("cat1.png");
    cat2 = loadImage("cat2.png");
    cat3 = loadImage("cat3.png");
    cat4 = loadImage("cat4.png");
    mouse1 = loadImage("mouse1.png");
    mouse2 = loadImage("mouse2.png");
    mouse3 = loadImage("mouse3.png");
    mouse4 = loadImage("mouse4.png");
}

function setup(){
    //create the canvas
    createCanvas(1000,800);

    //create garden
    back = createSprite(500,400);
    back.addImage("garden", back1);
    back.scale = 1.05;

    //create cat sprite
    cat = createSprite(700,625);
    cat.addImage("tom", cat1);
    cat.scale = 0.2;
    cat.debug = false;
    cat.setCollider("rectangle", 0, 0, 10, 10);

    //create mouse sprite
    mouse = createSprite(100, 600);
    mouse.addImage("mouse", mouse1);
    mouse.scale = 0.1;
    mouse.debug = false;
    mouse.setCollider("circle", 0, 0, 5);
}

function draw() {
    //create the background
    background("green");

    //mouse start teasing cat
    if(frameCount % 50 === 0) {
        mouse.addImage("mouse", mouse2);
    }

    if(frameCount % 100 === 0) {
        mouse.addImage("mouse", mouse3);
    }

    //call the keyPressed function under draw
    keyPressed();
    
    //Write condition here to evalute if cat and mouse collide
    if(mouse.x - cat.x < mouse.width/2 + cat.width/2 &&
       cat.x - mouse.x < mouse.width/2 + cat.width/2 &&
       cat.y - mouse.y < mouse.height/2 + cat.height/2 &&
       mouse.y - cat.y < mouse.height/2 + cat.height/2){
        mouse.addImage("mouse", mouse4);
        cat.addImage("tom", cat4);
      }

    //makes the sprite visible
    drawSprites();
}


function keyPressed(){
  //For moving and changing animation of the cat
  if (keyDown("Left_Arrow")) {
      cat.x = cat.x-3;
      cat.addImage("tom", cat2);
  }
}