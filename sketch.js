var brush
var ink
var rb,lb,ub,db
var red,blue,green,black



function setup() {
  createCanvas(600,600);

brush = createSprite(400, 200, 20, 20);
rb = createSprite(590,300,50,2000)
lb = createSprite(10,300,50,2000)
db = createSprite(300,590,5000,50)
ub = createSprite(300,20,5000,110)

red = createSprite(20,20,30,30)
blue = createSprite(60,20,30,30)
green = createSprite(100,20,30,30)
black = createSprite(140,20,30,30)

 
}

function draw() 
{ 
background(255);

rb.shapeColor = "orange"
lb.shapeColor = "orange"
ub.shapeColor = "orange"
db.shapeColor = "orange"

red.shapeColor = "red"
blue.shapeColor = "blue"
green.shapeColor = "green"
black.shapeColor = "black"

brush.x = mouseX
brush.y = mouseY



if(mouseIsPressed)
{

 ink = createSprite(mouseX,mouseY,10,10)
 ink.shapeColor = "black"
 ink.depth = rb.depth-10
 brush.shapeColor=ink.shapeColor



 
 
}
if(mouseIsPressed && mouseX>=red.x&&mouseY>=red.y)
 {
    ink.shapeColor=red
 }



drawSprites();
}