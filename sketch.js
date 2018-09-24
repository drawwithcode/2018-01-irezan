function setup() {
	var cnv = createCanvas(500, 500);
  var x = (windowWidth - width) / 2;
  var y = (windowHeight - height) / 2;
  cnv.position(x, y);

	strokeCap(ROUND);
  strokeJoin(ROUND);
}

function draw() {
	background(230);

//Dalek's shadow
  fill(210);
  stroke(210);
  ellipse(300, 410, 300, 10);

//Dalek's head
  fill(0);
  strokeWeight(0);
  arc(300, 170, 100, 100, PI, TWO_PI);

//Dalek's eye
  fill(153, 255, 204);
  quad(200, 150, 200, 140, 100, 100, 100, 190);

  fill(0);
  stroke(0);
  strokeWeight(0);
  ellipse(260, 145, 20, 20);
  arc(200, 145, 20, 20, PI+HALF_PI, HALF_PI);
  strokeWeight(4);
  line(260, 145, 210, 145);

  line(220, 140, 220, 150);
  line(228, 140, 228, 150);
  line(236, 140, 236, 150);

//Dalek's neck
  line(260, 170, 260, 195);
  line(287, 170, 287, 195);
  line(313, 170, 313, 195);
  line(340, 170, 340, 195);

  line(245, 178, 355, 178);
  line(245, 187, 355, 187);
  line(245, 195, 355, 195);

//Dalek's shoulders
  rect(245, 203, 5, 25);
  rect(272.5, 203, 5, 25);
  rect(297.5, 203, 5, 25);
  rect(322.5, 203, 5, 25);
  rect(350, 203, 5, 25);

  fill(0);
  stroke(0);
  rect(240, 235, 120, 5);
  rect(225, 245, 140, 5);

//Dalek's sucker arm
  rect(230, 227, 5, 13);
  line(228, 233, 170, 233);
  strokeWeight(0);
  ellipse(228, 233, 10, 10);
  arc(165, 233, 25, 25, PI+HALF_PI, HALF_PI);

  strokeWeight(2);
  line(190, 230, 190, 236);
  line(195, 230, 195, 236);
  line(200, 230, 200, 236);
  line(205, 230, 205, 236);
  line(210, 230, 210, 236);

//Dalek's body
  strokeWeight(4);
  line(257, 260, 237, 386);
  line(288, 260, 282, 386);
  line(321, 260, 332, 386);
  line(357, 260, 375, 386);

  ellipse(240, 270, 10, 17);
  ellipse(235, 303, 10, 17);
  ellipse(230, 336, 10, 17);
  ellipse(225, 369, 10, 17);

  ellipse(271, 270, 12, 17);
  ellipse(268, 303, 12, 17);
  ellipse(265, 336, 12, 17);
  ellipse(261, 369, 12, 17);

  ellipse(305, 270, 16, 17);
  ellipse(305, 303, 16, 17);
  ellipse(306, 336, 16, 17);
  ellipse(307, 369, 16, 17);

  ellipse(340, 270, 14, 17);
  ellipse(344, 303, 14, 17);
  ellipse(348, 336, 14, 17);
  ellipse(352, 369, 14, 17);

//Dalek's base
  rect(210, 395, 170, 5);
  rect(205, 405, 180, 1);
}
