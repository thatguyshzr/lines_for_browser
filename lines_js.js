var x;
var y;

function setup() {
  //createCanvas(displayWidth, displayHeight);
  createCanvas(windowWidth, windowHeight);
  background(0);
  textFont('Helvetica', 16);
  fill(100);
  text("SHZR", 10, windowHeight-10);
}

function draw() {
  x= mouseX;
  y= mouseY;
  rectMode(CENTER);
  rect(x, y, 5, 5);
  noStroke();
  fill(255);
  stroke(255);
  line(x,y, width/2, height/2);

}

function mousePressed() {
  background(0);
}
