const canvas = document.getElementById("sergal");
const ctx = canvas.getContext("2d");

let x = 0;
let y = 0;
let ys = 2;
let xs = 2;
let gravity = 1;

ctx.fillStyle = color();

function animate(){
	requestAnimationFrame(animate);	
	ctx.clearRect(0,0,600,400);

	x += xs;
	y += ys;

	if (x + 50 > 600 || x < 0) {
		ctx.fillStyle = color();
		xs = -xs;
	}

	if (y + 50 > 400 || y < 0) {
		ctx.fillStyle = color();
		ys = -ys;
	}


ctx.fillRect(x,y,50,50);
}

function color() {
	return `hsl(${Math.random() * 360}, 100%, 50%)`;
}

animate();
