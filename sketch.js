var bg,bgImage

function preload() {
    //load the images here
 
    bgImage = loadImage("garden.png")

}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here

    bg = createSprite(500,400);
    bg.addImage(bgImage);


}

function draw() {

    background(0);
    //Write condition here to evalute if tom and jerry collide

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here


}
