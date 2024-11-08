// active navbar
let nav = document.querySelector('.navigation-wrap');
window.onscroll =  function (){
if(document.documentElement.scrollTop > 20){
nav.classList.add("scroll-on");
}
else{
nav.classList.remove("scroll-on");
}
}
// nav hide 
let navBar = document.querySelectorAll('.nav-link');
let navCollapse = document.querySelector('.navbar-collapse.collapse');
navBar.forEach(function(a){
a.addEventListener("click", function(){
navCollapse.classList.remove("show");
})
})


// Counter Design
document.addEventListener("scroll", () =>{
function counter(id, start, end, duration){
let obj = document.getElementById(id),
current = start,
range = end - start,
increment = end > start ? 1 : -1,
step = Math.abs(Math.floor(duration / range)),
timer = setInterval(() => {
current += increment;
obj.textContent = current;
if(current == end){
clearInterval(timer);
}
}, step);
}
counter("count1", 0, 586, 1000);
counter("count2", 0, 2055, 1000);
counter("count3", 0, 826, 2000);
counter("count4", 0, 1475, 1000);
});
(function ($) {
    "use strict";

    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        items: 1,
        dots: false,
        loop: true,
        nav: true,
        navText : [
            '<i class="fa-solid fa-arrow-left"></i>',
            '<i class="fa-solid fa-arrow-right"></i>'
        ]
    });
    $(".submit").on("click", function(e) {
        // remove default of the click
        e.preventDefault();
        // stop propagation
        e.stopPropagation();
   });
       // card carousel
    $(".card-carousel").owlCarousel({
        autoplay:false,
        smartSpeed: 1000,
        items: 1,
        dots: false,
        loop: true,
        nav: true,
        navText : [
            '<i class="fa-solid fa-angles-left"></i>',
            '<i class="fa-solid fa-angles-right"></i>'
        ]
    });
    
})(jQuery);
var x, i, j, l, ll, selElmnt, a, b, c;
/* Look for any elements with the class "custom-select": */
x = document.getElementsByClassName("custom-select");
l = x.length;
for (i = 0; i < l; i++) {
  selElmnt = x[i].getElementsByTagName("select")[0];
  ll = selElmnt.length;
  /* For each element, create a new DIV that will act as the selected item: */
  a = document.createElement("DIV");
  a.setAttribute("class", "select-selected");
  a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
  x[i].appendChild(a);
  /* For each element, create a new DIV that will contain the option list: */
  b = document.createElement("DIV");
  b.setAttribute("class", "select-items select-hide");
  for (j = 1; j < ll; j++) {
    /* For each option in the original select element,
    create a new DIV that will act as an option item: */
    c = document.createElement("DIV");
    c.innerHTML = selElmnt.options[j].innerHTML;
    c.addEventListener("click", function(e) {
        /* When an item is clicked, update the original select box,
        and the selected item: */
        var y, i, k, s, h, sl, yl;
        s = this.parentNode.parentNode.getElementsByTagName("select")[0];
        sl = s.length;
        h = this.parentNode.previousSibling;
        for (i = 0; i < sl; i++) {
          if (s.options[i].innerHTML == this.innerHTML) {
            s.selectedIndex = i;
            h.innerHTML = this.innerHTML;
            y = this.parentNode.getElementsByClassName("same-as-selected");
            yl = y.length;
            for (k = 0; k < yl; k++) {
              y[k].removeAttribute("class");
            }
            this.setAttribute("class", "same-as-selected");
            break;
          }
        }
        h.click();
    });
    b.appendChild(c);
  }
  x[i].appendChild(b);
  a.addEventListener("click", function(e) {
    /* When the select box is clicked, close any other select boxes,
    and open/close the current select box: */
    e.stopPropagation();
    closeAllSelect(this);
    this.nextSibling.classList.toggle("select-hide");
    this.classList.toggle("select-arrow-active");
  });
}

function closeAllSelect(elmnt) {
  /* A function that will close all select boxes in the document,
  except the current select box: */
  var x, y, i, xl, yl, arrNo = [];
  x = document.getElementsByClassName("select-items");
  y = document.getElementsByClassName("select-selected");
  xl = x.length;
  yl = y.length;
  for (i = 0; i < yl; i++) {
    if (elmnt == y[i]) {
      arrNo.push(i)
    } else {
      y[i].classList.remove("select-arrow-active");
    }
  }
  for (i = 0; i < xl; i++) {
    if (arrNo.indexOf(i)) {
      x[i].classList.add("select-hide");
    }
  }
}

/* If the user clicks anywhere outside the select box,
then close all select boxes: */
document.addEventListener("click", closeAllSelect);
function BMI() {
var h = document.getElementById('height').value;
var w = document.getElementById('weight').value;
var bmi = w/(h/100*h/100);
var bmio = (bmi.toFixed(2));

document.getElementById('result').innerHTML = "Your BMI IS" + bmio;
}
fadeout();
function loader(){
document.querySelector('.wrapper-loader').classList.add('active');
}
function fadeout(){
setTimeout(loader, 3000);
}
const coords = { x: 0, y: 0 };
const circles = document.querySelectorAll(".circle1");

const colors = [
  "#2d2d2d",
  "#473e2e",
  "#614f2f",
  "#7c612e",
  "#98742c",
  "#b48727",
  "#d19b1f",
  "#efaf0f",
];

circles.forEach(function (circle, index) {
  circle.x = 0;
  circle.y = 0;
  circle.style.backgroundColor = colors[index % colors.length];
});

window.addEventListener("mousemove", function(e){
  coords.x = e.clientX;
  coords.y = e.clientY;
  
});

function animateCircles() {
  
  let x = coords.x;
  let y = coords.y;
  
  circles.forEach(function (circle, index) {
    circle.style.left = x - 12 + "px";
    circle.style.top = y - 12 + "px";
    
    circle.style.scale = (circles.length - index) / circles.length;
    
    circle.x = x;
    circle.y = y;

    const nextCircle = circles[index + 1] || circles[0];
    x += (nextCircle.x - x) * 0.3;
    y += (nextCircle.y - y) * 0.3;
  });
 
  requestAnimationFrame(animateCircles);
}

animateCircles();
