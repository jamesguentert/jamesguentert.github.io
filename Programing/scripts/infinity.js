var palletCoices=[1, 2, 3,4, 5, 6];
function setup() {
  createCanvas(400, 400);
  pallet = random(palletCoices)
}
var i =100
function draw() {
  background(0);
  for (var x=0; x<=width; x+=i){
    if (pallet ==1)fill(i,x,0)
    if (pallet ==2)fill(0,x,i)
    if (pallet ==3)fill(x,i,x)
    if (pallet ==4)fill(0,i,x)
    if (pallet ==5)fill(x,0,i)
    if (pallet ==6)fill(i,0,x)
    ellipse(x,x,x)
}
if (i > 1){
i-=0.5
}
else {
i=100
pallet = random(palletCoices)
}
}
