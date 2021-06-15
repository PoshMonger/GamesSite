const canvas = document.getElementById("mycanvas");
const ctx = canvas.getContext('2d');


class player {
	constructor(x, y, radius, color) {
		this.x = x;
		this.y = y;
		this.radius = radius;
		this.color = color;
	}

	draw() {
		ctx.beginPath();
		ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false)
		ctx.fillStyle = this.color;
		ctx.fill();
  
	}


	update1() {
		ctx.beginPath();
		ctx.arc(this.x + deltaX, this.y + deltaY, this.radius, 0, Math.PI * 2, false)
		ctx.fillStyle = this.color;
		ctx.fill();
	}

	update2() {
		ctx.beginPath();
		ctx.arc(this.x + deltaX2, this.y + deltaY2, this.radius, 0, Math.PI * 2, false)
		ctx.fillStyle = this.color;
		ctx.fill();
	}
}


var deltaX = 0;
var deltaY = 0;
var deltaX2 = 0;
var deltaY2 = 0;

speed = 8;

window.addEventListener("keydown", moveSomething2, false);
function moveSomething2(e2) {

	switch (e2.keyCode) {
		case 65: //a
			deltaX2 -= speed;
			break;
		case 87: //w
			deltaY2 -= speed;
			break;
		case 68: //d
			deltaX2 += speed;
			break;
		case 83: //s
			deltaY2 += speed;
			break;
	}
	player2.update2();
}



window.addEventListener("keydown", moveSomething, false);
function moveSomething(e2) {

	
		switch (e2.keyCode) {
        case 37:
            
            deltaX -= speed;
						break;
        case 38:
           
          deltaY -= speed;
					break;
        case 39:
            
            deltaX += speed;
						break;
        case 40:
          
					deltaY += speed;
					break;
    }
	
	player1.update1();
}


ratio = (canvas.height + canvas.width) / 50;
console.log(canvas.height, canvas.width);

centerHeight = canvas.height / 2;

centerWidth = canvas.width / 2;


var _r = (Math.floor(Math.random()* 255));
var _g = (Math.floor(Math.random()* 255));
var _b = (Math.floor(Math.random()* 255));
const player2 = new player(centerWidth, centerHeight, ratio, 
('rgb' + '(' + _r + ',' + _g + ',' + _b + ')'));
var _r = (Math.floor(Math.random()* 255));
var _g = (Math.floor(Math.random()* 255));
var _b = (Math.floor(Math.random()* 255));
const player1 = new player(centerWidth/2, centerHeight, ratio, 
('rgb' + '(' + _r + ',' + _g + ',' + _b + ')'));
player1.draw();
player2.draw();



