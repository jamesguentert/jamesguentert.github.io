let colors= ['red','blue','green','magenta','yellow','cyan'];
let randPallet;
let bubble = [];
let vel = 5;
let minusx = -(vel);
let minusy = -(vel);
let posx = vel;
let posy = vel;


function setup() {
  createCanvas(400, 400);
for (var i=0;i<20;i+=1){
bubble[i]=new Bubble(color[i]);
}

}

function draw() {
  background(0);
let bubbleLength=bubble.length;
for (var i=0;i<bubbleLength;i+=1){
  bubble[i].move()
  bubble[i].show()
}


}
class Bubble {
constructor() {
  this.x=random(50,350);
  this.y=random(50,350);
  this.color=random(colors)
}

  move() {
//X velocity Difference
if (0<this.x<200){
minusx=MinusDecrease(this.x);
posx=vel
}
else if (400>this.x>200){
posx=PosDecrease(this.x)
minusx=-vel
}
//Y velocity Difference
if (0<this.y<200){
minusy=MinusDecrease(this.y);
posy=vel
}
else if (400>this.y>200){
posy=PosDecrease(this.y)
minusy=vel
}

  this.x+=random(minusx,posx);
  this.y+=random(minusy,posy);

}
  show() {
let avgPosition =(this.x+this.y)/2
let positionDist= ((this.x-200)**2+(this.y-200)**2)**0.5
  switch(this.color) {
    case 'green':
      stroke(positionDist,avgPosition,positionDist);
        break;
    case 'blue':
      stroke(positionDist,positionDist,avgPosition);
        break;
    case 'red':
      stroke(avgPosition,positionDist,positionDist);
        break;
    case 'magenta':
      stroke(positionDist,this.x,this.y);
        break;
    case 'cyan':
      stroke(this.x,positionDist,this.y);
        break;
    case 'yellow':
      stroke(this.y,this.x,positionDist);
        break;
    default:
      stroke(avgPosition,avgPosition,avgPosition);
  }
  strokeWeight(4);
  noFill();
  ellipse(this.x,this.y,24,24);


  }
}
function MinusDecrease(num) {
var product = -1*((((num-10)/2)**(0.5))*0.5)
return product
}
function PosDecrease(num) {
var product = (((490-num)/2)**0.5)*0.5
return product
}
