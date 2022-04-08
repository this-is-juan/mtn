var Xx;
var Yy;
var i;

function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
  fill(255);
}

function draw() {

  ellipse(Xx, Yy+i,10,10); 
  i++;

  if (i > 80) {
    i = 80
  }

  if(mouseIsPressed == true) {

    translate(mouseX, mouseY);
    scale(0.1)

    i=0;
    Xx=mouseX;
    Yy=mouseY;

    for (let i = 0; i < 5000; i++) {
      let theta = random(0, TWO_PI);
      let h = randomGaussian();
      let r = (exp(h) - 1) / (exp(h) + 1);
      let x = 200 * r * cos(theta);
      let y = 200 * r * sin(theta);

      ellipse(x , y ,1,1); 

    }
  } 
  
}

function keyPressed() {

  if (keyCode === BACKSPACE) {
    location.reload();
    return false;
  }

}

function mySave() {
    save('spray.png');
}



