let colors= ['red','blue','green'];
let randPallet;
let bubble = [];
let vel = 5;
let minusx = -(vel);
let minusy = -(vel);
let posx = vel;
let posy = vel;
var t = 0;
var count = 0;
pallet = ('red');
function setup() {
  createCanvas(400, 400);
}

function mouseDragged() {
  bubble[t]=new Bubble(mouseX,mouseY,5,0);
t+=1
}



function doubleClicked() {
  count+=1
if (count>2)count=0
  pallet=colors[count]
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
constructor(x,y,r,o) {
  this.x=x;
  this.y=y;
  this.color=random(colors);
  this.r=random(25,50);
  this.stroke=random(1,r);
  this.opac=random(o,255)
}

move() {
  this.x+=random(-2,2);
  this.y+=random(-2,2);

}



  show() {
  switch(pallet) {
    case 'green':
      stroke(this.x,this.y,0,this.opac);
    break;
    case 'red':
      stroke(this.y, 0,this.x,this.opac);
    break;
    case 'blue':
      stroke(0, this.x,this.y,this.opac);
    break;
  }

  strokeWeight(this.stroke);
  noFill();
  ellipse(this.x,this.y,this.r);


  }
}
