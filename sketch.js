// By Roni Kaufman
// inspired by Vera Molnar's "Quatre éléments distribués au hasard" (1959)

let composition = [];
// 0: -
// 1: /
// 2: |
// 3: \
let size = 20; // size of each element
let prev_i = -1;
let prev_j = -1;

let randInt = (x) => (floor(random(x)));

function setup() {
  let greetings = select('#greetings');
  greetings.html(generateGreetings());

  createCanvas(windowWidth, max(windowHeight-1, 680));
  noLoop();
	stroke(255, 232, 25);
	//stroke(0);
	strokeWeight(4);

	for (let i = 0; i < width/size; i++) {
		composition.push([]);
		for (let j = 0; j < height/size; j++) {
			composition[i].push(randInt(4));
		}
	}
}

function draw() {
	background(0);
	//background(255, 232, 25);
  drawComposition();
}

function drawComposition() {
	for (let i = 0; i < width/size; i++) {
		for (let j = 0; j < height/size; j++) {
			let x = i * size;
			let y = j * size;
			switch (composition[i][j]) {
				case 0:
					strokeCap(SQUARE);
					line(x, y + size/2, x + size, y + size/2);
					break;
				case 1:
					strokeCap(PROJECT);
					line(x, y + size, x + size, y);
					break;
				case 2:
					strokeCap(SQUARE);
					line(x + size/2, y, x + size/2, y + size);
					break;
				case 3:
					strokeCap(PROJECT);
					line(x, y, x + size, y + size);
			}
		}
	}
}

function generateGreetings() {
  let word1 = random(["Hey", "Hi", "Hello"]);
  let word2 = random(["", " there"]);
  return word1+word2+"!";
}

function mouseMoved() {
	let i = floor(mouseX/size);
	let j = floor(mouseY/size);
	if (i !== prev_i || j !== prev_j) {
		composition[i][j] = randInt(4);
		draw();
		prev_i = i;
		prev_j = j;
	}
}
