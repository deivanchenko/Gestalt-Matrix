function setup() {
  createCanvas(420, 420);
}

function draw() {
  background(0);
  strokeWeight(15);
  stroke(255,255,255,90);
  for (var i = 70; i < height; i += 70) {
    line(0, i, width, i);
    line(i, width, i, 0);
  }
  for (var i = 70; i < height; i += 70) {
  strokeWeight(17);
  stroke(255,255,255);
  point(70,i);
  point(140,i);
  point(210,i);
  point(280,i);
  point(350,i);
}
}
