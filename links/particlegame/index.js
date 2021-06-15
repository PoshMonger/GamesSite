var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

var testarray = [];
var bouncyballarray = [];
var floatingballarray = [];
var magnetizedballarray = []
var perpetualballarray = [];
var hypnoballarray = [];
var shootforcornersarray = [];
var shootforcornersarray2 = [];
var shootforcornersarray3 = [];
var changebackgroundarray = [];
var floatingballarraysquare = [];
var magnetizedballarraysquare = []
var shootforcornersarraysquare = [];
var shootforcornersarray2square = [];
var shootforcornersarray3square = [];

class Particle {

  constructor(x, y,shape) {
    this.x = x;
    this.y = y;
    this.color = "#" + Math.floor(Math.random() * 16777215).toString(16);
    this.radius = Math.random() * 45;
    this.dx = (Math.random()*2)-1;
    this.dy = (Math.random() * 2)-1;
    this.shape = shape;
    this.changeinangle = .0001;
}


  draw() {

  
    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    ctx.closePath();
    ctx.fill();}

  
 
  


 

  update() {
    this.changeinangle = this.changeinangle + .1;


    if (this.radius<3){
      this.color="white";
    }


    if (this.y > canvas.height || this.y < 0) {
      this.dy = -this.dy;

    }

    if (this.x > canvas.width || this.x < 0) {
      this.dx = -this.dx;
    }
    this.radius = this.radius * .99;
    this.x += this.dx;
    this.y += this.dy;
  }
}

class Particlesquare {

  constructor(x, y,shape) {
    this.x = x;
    this.y = y;
    this.color = "#" + Math.floor(Math.random() * 16777215).toString(16);
    this.radius = Math.random() * 45;
    this.dx = ((Math.random() * 2) - 1);
    this.dy = Math.random() * 2;
    this.shape = shape;
}


  draw() {  ctx.beginPath();
  ctx.fillRect(this.x,this.y,this.radius,this.radius);
  ctx.fillStyle = this.color;
  ctx.stroke();

  
  }
  


  update() {

if (this.radius<2){
  this.color = 'white';




} 
    if (this.y > canvas.height || this.y < 0) {
      this.dy = -this.dy;

    }

    if (this.x > canvas.width || this.x < 0) {
      this.dx = -this.dx;
    }
    this.radius = this.radius * .99;
    this.x += this.dx;
    this.y += this.dy;
  }
}

function init() {
  for (i = 0; i < 100; i++) {

    testarray.push(new Particle(Math.random() * canvas.width, Math.random() * canvas.height,3))
  }
  console.log(testarray);
}




class Shootforcorners extends Particle {

  constructor(x, y,shape) {

    super(x, y,);
    this.x = x;
    this.y = y;
    this.dy = ((Math.random() *2)-1) *2;
    this.dx= ((Math.random() *2)-1) *2;

  }
  
  
  
  update() {
   
this.radius = this.radius *.99;
  this.changeinangle = this.changeinangle + .1;
    this.x += this.dx;
    this.y +=this.dy;
  }
}

function init5() {
  for (i = 0; i < 100; i++) {

    shootforcornersarray.push(new Shootforcorners(canvas.width/2,canvas.height/2,'circl'))
  }
  console.log(shootforcornersarray);
}

function test5() {
  
  for (i = 0; i < shootforcornersarray.length; i++) {
    shootforcornersarray[i].draw();
    shootforcornersarray[i].update();
  }

}

class Floatingball extends Particle {

  constructor(x, y) {

    super(x, y);
    
    this.upordown = (Math.random() * 2) - 1;
    this.leftorright = (Math.random() * 2) - 1;
  }
  update() {

    super.update();

    this.dx = this.leftorright;
    
    
    this.dy = this.dy +this.upordown ;
    this.dy = this.dy * .99;
    this.dx = this.dx * .99;
    
  }
}

function init2() {
  for (i = 0; i < 300; i++) {

    floatingballarray.push(new Floatingball(Math.random() * canvas.width, Math.random() * canvas.height))
  }
  console.log(floatingballarray);
}

function test2() {

  
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  for (i = 0; i < floatingballarray.length; i++) {


    floatingballarray[i].draw();
    floatingballarray[i].update();

}

}


class Magnetizedball extends Particle {

  constructor(x, y) {

    super(x, y);
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
  

    this.leftorright = (Math.random() * 2) - 1;
  }
  update() {
    super.update();
    this.radius = this.radius * .99;
    this.dx = this.dx + this.leftorright;
    this.dx = this.dx * .99;
    this.dy = this.dy * .99;
    
  }

}

function init3() {
  for (i = 0; i < 300; i++) {

    magnetizedballarray.push(new Magnetizedball())
  }
  console.log(magnetizedballarray);
}

function test3() {

  for (i = 0; i < magnetizedballarray.length; i++) {


    magnetizedballarray[i].draw();
    magnetizedballarray[i].update();
}
}




class Shootforcorners2 extends Particle {

  constructor(x, y) {

    super(x, y);
    this.x = canvas.width / 2;
    this.y = canvas.height / 2;
    this.magnitude = Math.random() * 10;
    this.direction = ((Math.random() * 2) - 1)


    this.dx = this.magnitude * this.direction;
    this.dy = this.magnitude * this.direction;
  }
  update() {
    super.update();
}
}

function init6() {
  for (i = 0; i < 100; i++) {

    shootforcornersarray2.push(new Shootforcorners2(Math.random() * canvas.width, Math.random() * canvas.height))
  }
  console.log(shootforcornersarray2);
}

function test6() {
 

  for (i = 0; i < shootforcornersarray2.length; i++) {
    shootforcornersarray2[i].draw();
    shootforcornersarray2[i].update();
  }
}



class Shootforcorners3 extends Shootforcorners2 {

  constructor(x, y) {

    super(x, y);
    this.x = canvas.width/2;
    this.y = canvas.height/2;
    this.dx = -this.dx;
    this.dy = this.magnitude * this.direction;
}
  update() {
    super.update();
}
}

function init7() {
  for (i = 0; i < 100; i++) {

    shootforcornersarray3.push(new Shootforcorners3(Math.random() * canvas.width/2, Math.random() * canvas.height/2))
  }
  console.log(shootforcornersarray3);
}

function test7() {


  for (i = 0; i < shootforcornersarray3.length; i++) {
    shootforcornersarray3[i].draw();
    shootforcornersarray3[i].update();
  }
}




class Changebackground extends Shootforcorners2 {

  constructor(x, y) {

    super(x, y);
    this.x = canvas.width/2;
    this.y = canvas.height/2;
    this.dx = -this.dx;
    this.dy = this.magnitude * this.direction;
}
  draw(){
    ctx.fillStyle= this.color;

  }
  
  update() {
    ctx.fillStyle= this.color;
}
}

function init8() {
  for (i = 0; i < 1; i++) {

    changebackgroundarray.push(new Changebackground(Math.random() * canvas.width/2, Math.random() * canvas.height/2))
  }
  console.log(changebackgroundarray);
}

function test8() {


  for (i = 0; i < changebackgroundarray.length; i++) {
    changebackgroundarray[i].draw();
    changebackgroundarray[i].update();
  }
}




function test() {




 var totalballarray = floatingballarray.length +
                  magnetizedballarray.length +
                  shootforcornersarray.length +
                  shootforcornersarray2.length +
                  shootforcornersarray3.length;
               


                
  if(totalballarray>10000) {
ctx.fillRect(0, 0, canvas.width, canvas.height)
shootforcornersarray = [];
    floatingballarray = [];
shootforcornersarray2 = [];
  shootforcornersarray3 = [];
  magnetizedballarray = [];





  }

test2();
test3();
test5();
test6();
test7();
test8();




  
  requestAnimationFrame(test);
}
test();

function refresh(){

floatingballarray = [];
  shootforcornersarray = [];
  shootforcornersarray2 = [];
  shootforcornersarray3 = [];
  magnetizedballarray = [];

}

function changedrawsquare(){


  Shootforcorners.prototype.draw = function(){

      ctx.beginPath();
  ctx.fillRect(this.x,this.y,this.radius,this.radius);
  ctx.fillStyle = this.color;
  ctx.stroke();
  }


Shootforcorners2.prototype.draw = function(){

      ctx.beginPath();
  ctx.fillRect(this.x,this.y,this.radius,this.radius);
  ctx.fillStyle = this.color;
  ctx.stroke();
  }
  Shootforcorners3.prototype.draw = function(){

      ctx.beginPath();
  ctx.fillRect(this.x,this.y,this.radius,this.radius);
  ctx.fillStyle = this.color;
  ctx.stroke();
  }
  Floatingball.prototype.draw = function(){

      ctx.beginPath();
  ctx.fillRect(this.x,this.y,this.radius,this.radius);
  ctx.fillStyle = this.color;
  ctx.stroke();
  }
  Magnetizedball.prototype.draw = function(){

      ctx.beginPath();
  ctx.fillRect(this.x,this.y,this.radius,this.radius);
  ctx.fillStyle = this.color;
  ctx.stroke();
  }
  





}


function changedrawcircle(){


  Shootforcorners.prototype.draw = function(){

    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    ctx.closePath();
    ctx.fill();}

    Shootforcorners2.prototype.draw = function(){

    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    ctx.closePath();
    ctx.fill();}
    Shootforcorners3.prototype.draw = function(){

    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    ctx.closePath();
    ctx.fill();}
    Floatingball.prototype.draw = function(){

    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    ctx.closePath();
    ctx.fill();}
    Magnetizedball.prototype.draw = function(){

    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * .2, true);
    ctx.closePath();
    ctx.fill();}
  }

function changedrawsemicircle(){


  Shootforcorners.prototype.draw = function(){
ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 100 - this.changeinangle, true);
    ctx.closePath();
    ctx.fill();}

    Shootforcorners2.prototype.draw = function(){

    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 100 - this.changeinangle, true);
    ctx.closePath();
    ctx.fill();}

    Shootforcorners3.prototype.draw = function(){

ctx.fillStyle = this.color;
    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 100 - this.changeinangle, true);
    ctx.closePath();
    ctx.fill();}

    Magnetizedball.prototype.draw = function(){
     ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 100 - this.changeinangle, true);
    ctx.closePath();
    ctx.fill();
  }

Floatingball.prototype.draw = function(){
  
  ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 100 - this.changeinangle, true);
    ctx.closePath();
    ctx.fill();

}


}

function changemagnetizedball(){

  Magnetizedball.prototype = Particlesquare;



  }







   




