var a=5
circle1={ //creating two circles
 x:300,
 y:200
};
circle2={
   x:40,
   y:130,
   l:80,
   w:80,
};
function setup() {
createCanvas(600,400);  //creating a canvas or 600,400
}
function draw() {
background(21,42,123);//creating a background

fill(98,32,10); //filling the rectangle with color
strokeWeight(4);//making the edges thicker
rect(250,150,100,100);//creating rectangle

 
fill(182,102,201); //filling up first circle with color
ellipse(circle1.x,circle1.y,50,50) //creating first circle

if (key ==='d') {
       circle1.x=circle1.x+1;//moves the circle towards right when pressed
   }
if (key ==='a') {
       circle1.x=circle1.x-1;//moves the circle left when pressed
}
if (key ==='w') {
       circle1.y=circle1.y-1;//moves the circle up when pressed
   }  
if (key ==='s') {
       circle1.y=circle1.y+1;//moves the circle down when pressed
   }
fill(172,129,21);//fills the circle with pink color
if (circle1.y<180) {
  fill(random(255),random(255),random(255));//randomizes the circle's color when you move the circle upwards
}
ellipse(circle2.x,circle2.y,circle2.w,circle2.l);//creates second circle
if (circle1.y>220) {
 circle2.x=circle2.x+a;//moves the bigger circle towards right 
}
if (circle2.x>600 || circle2.x<0) {
 a = -a//moves the circle towards opposite direction when it reaches the end of the canvases
}
if (circle1.x>325) {
  circle2.w=circle2.w+1;//increases the width and height of the circle when small circle gets to 325 of the canvas
  circle2.l=circle2.l+1;
  
}
else circle2.l=80, circle2.w=80;//circle resets to the original value
}