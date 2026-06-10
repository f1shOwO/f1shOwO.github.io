const canvas = document.getElementById("sergal");
const ctx = canvas.getContext("2d");

ctx.fillStyle = color();

let x = 0;
let y = 0;
let xs = 2;
let ys = 2;
let xs2 = 5;
let ys2 = 5;


function rand() {
	x = Math.floor(Math.random() * 501);
	y = Math.floor(Math.random() * 301);
}
rand();

function animate(){
	requestAnimationFrame(animate);	
	ctx.clearRect(0,0,600,400);

	

ctx.fillRect(x,y,50,50);
}

function color() {
	return `hsl(${Math.random() * 360}, 100%, 50%)`;
}

animate();

function handleKeyDown(e){
	if(e.key == "ArrowDown" || e.key == "s"){
		y += ys;
	} else if (e.key == "S"){
			y += ys2;
		}
	if(e.key == "ArrowUp" || e.key == "w"){
		y += -ys;
	} else if (e.key == "W") {
		y += -ys2;
		}
	if(e.key == "ArrowLeft" || e.key == "a"){
		x += -xs;
	} else if (e.key == "A"){
		x += -xs2;
		}
	if(e.key == "ArrowRight" || e.key == "d"){
		x += xs;
	} else if (e.key == "D") {
		x += xs2;
		}	
}

document.addEventListener('keydown',handleKeyDown);
