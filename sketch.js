let randInt = (a, b) => (floor(random(a, b)));

function setup() {
	createCanvas(windowWidth, windowHeight);
	//colorMode(HSB, 100);
	noLoop();
	noStroke();
}

function draw() {
	let pixelSize = 20;
	let pixWidth = width/pixelSize;
	let pixHeight = height/pixelSize;
	let nRectangles = floor(width*height)/1000;
	let maxW = randInt(6, 10);
	let maxH = randInt(6, 10);

	let alpha = 225;
	let colors = [color(10, 10, 10, alpha),
								color(247, 243, 242, alpha),
								color(0, 119, 225, alpha),
								color(250, 222, 12, alpha),
								color(252, 53, 3, alpha)];

	background(colors[1]);
	for (let i = 0; i < nRectangles; i++) {
		fill(colors[floor(random(colors.length))]);
		let x = randInt(0, pixWidth) * pixelSize;
		let y = randInt(0, pixHeight) * pixelSize;
		let w = randInt(1, maxW) * pixelSize;
		let h = randInt(1, maxH) * pixelSize;
		rect(x, y, w, h);
	}
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
