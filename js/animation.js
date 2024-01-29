
// circles movement
const circleOver = () => {
    let circles = document.getElementById("circles");
    let each = circles.getElementsByClassName("circle");
    each[1].style.transform = "translate(100px,-209px)";
    each[2].style.transform = "translate(-100px,-209px)";
}

const circleLeave = () => {
    let circles = document.getElementById("circles");
    let each = circles.getElementsByClassName("circle");
    each[1].style.transform = "translate(0,0)";
    each[2].style.transform = "translate(0,0)";
}
// end of movement

var i = 0;
var txt = " work";
var txt1= " experiences.";
var txt2= "// from initial design to final implementation"
var speed = 100;



// if (location.pathname == '/portifolio/index.html') {
//     typeWriter()
// }


$(document).ready(
  $(".toggle-item").on( "click", function() {
      $(".toggle-menu").slideToggle("slow");}),
);


