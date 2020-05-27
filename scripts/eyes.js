function setup() {
  createCanvas(400, 400);
}
x1=100
y=200
x2=300
function draw() {
    background('#333');
  fill(255);
  ellipse(100,200,100);
  ellipse(300,200,100);
fill(0);
//eye tracking
if (mouseX>=125) x1=125;
else if (mouseX<=75) x1=75;
else x1=mouseX;
if (mouseY>=225) y=225;
else if (mouseY<=175) y=175;
else y=mouseY;
ellipse(x1,y,25)
if (mouseX>=325) x2=325;
else if (mouseX<=275) x2=275;
else x2=mouseX;
ellipse(x2,y,25)
}
