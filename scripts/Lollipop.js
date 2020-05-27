function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0);
  lollipop(mouseX,mouseY,200,0,100)
}
function lollipop(x,y,color1,color2,color3) {
  fill(255);
  rect(x-5,y,10,100)
  fill(color1,color2,color3)
  ellipse(x,y,50,50);
}
