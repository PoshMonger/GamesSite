var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var floatingballarray = [];
var numberoffloatingballs = 1;


class Ballfloating {

constructor (x,y){

  this.x = x;
  this.y = y;
  this.dx = (Math.round(Math.random()) * 2 - 1) *3;
  this.dy = Math.random() * -3  ;
  
  this.radiusmagnitude = document.getElementById("floatingballsradius").value;  ;
  this.radius = Math.random() * this.radiusmagnitude;
  this.color = "#" + Math.floor(Math.random()*16777215).toString(16);
  this.radiuschangedirection = Math.round(Math.random()) * 2 - 1;
}
draw(){

  ctx.fillStyle = this.color;
  ctx.beginPath();
  ctx.arc(this.x,this.y,this.radius,0,Math.PI * 2,false);
  ctx.closePath();
  ctx.fill();
}

update(){

if (this.y > canvas.height){

  this.dy = -this.dy

}
if(this.x > canvas.width || this.x  < 0){

  this.dx = -this.dx


}

  this.radius = this.radius * .99;


if (this.radius<2){

  this.color = "white"
}

this.dx = .99 * this.dx;
 this.x += this.dx;
 this.y += this.dy;
 this.dy = this.dy *1.007;
}

}
function floatingballinit(){
numberoffloatingballs = document.getElementById("numberoffloatingballs").value;
for(i=0;i<numberoffloatingballs;i++){


  floatingballarray.push(new Ballfloating(Math.random()* canvas.width, Math.random() * canvas.height))  
  
}
}

function animatefloatingball(){

ctx.fillStyle = 'rgba(255,255,255, .2)'
  ctx.fillRect(0,0, canvas.width, canvas.height);

for(i=0; i<floatingballarray.length; i++){

floatingballarray[i].draw();
floatingballarray[i].update();

}
requestAnimationFrame(animatefloatingball);

}

animatefloatingball();

var ballarray = [];
var numberofballs = 1;


class Ball {

constructor (){

  this.x = Math.random() * canvas.width;
  this.y = Math.random() * canvas.height;
  this.dx = Math.random() * 2;
  this.dy = Math.random() * 2 ;
  
  this.radiusmagnitude = document.getElementById("bouncyballsradius").value; 
  this.radius = Math.random() * this.radiusmagnitude;
  this.color = "#" + Math.floor(Math.random()*16777215).toString(16);

}


draw(){

  ctx.fillStyle = this.color;
  ctx.beginPath();
  ctx.arc(this.x,this.y,this.radius,0,Math.PI * 2,false);
  ctx.closePath();
  ctx.fill();
}

update(){

if (this.y  > canvas.height){

  this.dy = -this.dy *.90;
  

}

if(this.x > canvas.width || this.x < 0){

  this.dx = -this.dx

}

  this.radius = this.radius * .99;
//}

if (this.radius<2){

  this.color = "white"
}

this.dy += .4;
 this.x += this.dx;
 this.y += this.dy;
}

}

function init(){
numberofballs = document.getElementById("numberofbouncyballs").value;
for(i=0;i<numberofballs;i++){


  ballarray.push(new Ball() ) 
}
}

function animate(){
ctx.fillStyle = 'rgba(255,255,255, .2)'
  ctx.fillRect(0,0, canvas.width, canvas.height);

for(i=0; i<ballarray.length; i++){

ballarray[i].draw();
ballarray[i].update();

}
requestAnimationFrame(animate);

}

animate();

function increaseballsize(){

for (i=0;i<ballarray.length;i++){

ballarray[i].radius = ballarray[i].radius + 1;


}
}

function changeballdirection(){
  
for (i=0;i<floatingballarray.length;i++){

floatingballarray[i].dx = - floatingballarray[i].dx ;

floatingballarray[i].dy = - floatingballarray[i].dy ;


}
}







