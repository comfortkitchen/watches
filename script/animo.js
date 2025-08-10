// const box = document.getElementById('box');
//     let position = 1;
//     let direction = 1; // 1 for forward, -1 for backward
//     const speed = 10; // Speed of movement in pixels
//     const containerWidth = document.getElementById('container').offsetWidth;
//     const boxWidth = window.innerHeight;

//     function animate() {
//       position += direction * speed;

//       // Reverse direction if the box hits the edges
//       if (position + boxWidth >= containerWidth || position <= 0) {
//         direction *= -1;
//       }

//       box.style.left = position + 'px';
//       requestAnimationFrame(animate);
//     }

//     animate(); // Start the animation back and forth
   
// const boxtwo = document.getElementById('boxtwo');
// const screenHeight = window.innerHeight;
// const containerheighttwo = document.getElementById('container').offsetHeight;
// let positiontwo = 1;
// let speedtwo = 5;
// let directiontwo = 1; // 1 = down, -1 = up

// function animatetwo() {
//   positiontwo += speedtwo * directiontwo;
//   boxtwo.style.top = positiontwo + 'px';

//   // Reverse direction at top or bottom
//   if (positiontwo >= containerheighttwo - 10) {
//     directiontwo = -1; // go up
//   } else if (positiontwo <= 0) {
//     directiontwo = 1; // go down
//   }

//   requestAnimationFrame(animatetwo);
// }

// animatetwo();// Start the animation top and down


const boxthree = document.getElementById('boxsix');
let scale = 1;
let growing = true;

function animateZoom() {
  if (growing) {
    scale += 0.002;
    if (scale >= 1.2) growing = false;
  } else {
    scale -= 0.002;
    if (scale <= 1) growing = true;
  }

  boxthree.style.transform = `scale(${scale})`;
  requestAnimationFrame(animateZoom);
}

animateZoom();

//  function hoverFunction() {    
//       document.getElementById("boxsix").style.zIndex="0";
//  }

        setInterval(function() {
          document.getElementById("plj").play()
        }, 500);
     