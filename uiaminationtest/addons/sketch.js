let velocitAvg
let Xval;
let Yval;
let CanvasSize;
let size;
let onetothree =[1,2,3]
let velocity1;
let velocity2;
let pallet;
function setup() {
  createCanvas(400, 400);
  velocity1=random(-1,1)
  velocity2=random(-1,1)
  velocitAvg=(abs(velocity1)+abs(velocity2))/2
  pallet=random(onetothree)
  Xval=width/2
  Yval=width/2
}


function draw() {
background(0)
if (pallet ==1) fill(Xval,Yval,(-1*(velocity2)/velocity1)*50)
else if (pallet ==2) fill((-1*(velocity2)/velocity1)*50,Xval,Yval)
else fill(Yval,(-1*(velocity2)/velocity1)*50,Xval)
velocitAvg=(abs(velocity1)+abs(velocity2))/2
size=(width/4)*(0.5**velocitAvg)
CanvasInvisableBoarder=width-(size/2)
ellipse(Xval,Yval,size,size)

if(Xval<=size/2 || Xval>=CanvasInvisableBoarder) {
  Xvelocityreset()}
else if(Yval<=size/2 || Yval>=CanvasInvisableBoarder) {
  Yvelocityreset()}
else move()
}

function move(){
Xval+=velocity1
Yval+=velocity2

}
function Xvelocityreset(){
velocity1*=-1.05
pallet=random(onetothree)
move()
if (velocity1>1000 || velocity1<-1000) velocity1=10
}
function Yvelocityreset(){
velocity2*=-1.05
if (velocity2>1000 || velocity2<-1000) velocity2=10
pallet=random(onetothree)
move()}
