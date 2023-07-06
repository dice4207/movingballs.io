var positionX = 100;//x-axis
var positionY = 40;// y-axis
var velocity = 10; // speed
var reverse = false;  // direction
var ball = document.getElementById("ball");// html element

//write a function that can change the position of the html element "ball"
function moveBall() {
  // two x-axis coordinates
  var Xmin = 0;
  var Xmax = 800;

  // two y-axis coordinates
  var Ymin = 0;
  var Ymax = 700;
 console.log(reverse);
 console.log(velocity);
  if (reverse) {
    positionX = positionX - velocity;
    positionY = positionY - velocity;
    ball.style.left = positionX + "px";
    ball.style.top = positionY + "px";
  } else {
    positionX = positionX + velocity;
    positionY = positionY + velocity;
    ball.style.left = positionX + "px";
    ball.style.top = positionY + "px";
  }

  if (
    positionX > Xmax ||
    positionX === Xmin ||
    positionY > Ymax ||
    positionY === Ymin
  ) {
    reverse = !reverse;
  }
   console.log(reverse);
  
}


setInterval(moveBall, 100);


createImageBitmap()

