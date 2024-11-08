$('.input-cart-number').on('keyup change', function(){
	$t = $(this);

	if ($t.val().length > 3) {
		$t.next().focus();
	}

	var card_number = '';
	$('.input-cart-number').each(function(){
		card_number += $(this).val() + ' ';
			if ($(this).val().length == 16) {
			$(this).next().focus();
		}
	})

	$('.credit-card-box .number').html(card_number);
});

$('#card-holder').on('keyup change', function(){
	$t = $(this);
	$('.credit-card-box .card-holder div').html($t.val());
});

$('#card-holder').on('keyup change', function(){
	$t = $(this);
	$('.credit-card-box .card-holder div').html($t.val());
});

$('#card-expiration-month, #card-expiration-year').change(function(){
	m = $('#card-expiration-month option').index($('#card-expiration-month option:selected'));
	m = (m < 10) ? '0' + m : m;
	y = $('#card-expiration-year').val().substr(2,2);
	$('.card-expiration-date div').html(m + '/' + y);
})

$('#card-cvv').on('focus', function(){
	$('.credit-card-box').addClass('hover');
}).on('blur', function(){
	$('.credit-card-box').removeClass('hover');
}).on('keyup change', function(){
	$('.cvv div').html($(this).val());
});

setTimeout(function(){
	$('#card-cvv').focus().delay(1000).queue(function(){
		$(this).blur().dequeue();
	});
}, 500);
fadeout();
function loader(){
document.querySelector('.wrapper-loader').classList.add('active');
}
function fadeout(){
setTimeout(loader, 3000);
}
const coords = { x: 0, y: 0 };
const circles = document.querySelectorAll(".circle");

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
