function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0);
  stroke(225);

for (var x=0; x <= width;x+=25){
for (var y=height; y >= mouseY;y-=25){
fill(x,y,mouseY)
ellipse (x,y,15)}
}
}
