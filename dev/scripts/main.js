const $about = $('nav ul li:nth-child(1)'); 
const $portfolio = $('nav ul li:nth-child(2)');
const $contact = $('nav ul li:nth-child(3');

$('.about').on('inview', function(event, isInView){
	if(isInView){
		$about.css('transform', 'scale(1.3)')
	} else {
		$about.css('transform', 'scale(1)')
	}
});

$('.portfolio').on('inview', function(event, isInView){
	if(isInView){
		$portfolio.css('transform', 'scale(1.3)')
	} else {
		$portfolio.css('transform', 'scale(1)')
	}
});

$('.contact').on('inview', function(event, isInView){
	if(isInView){
		$contact.css('transform', 'scale(1.3)')
	} else {
		$contact.css('transform', 'scale(1)')
	}
});


var $win = $(window);
var winH = $win.height() / 2;   // Get the window height.

$win.on("scroll", function () {
    if ($(this).scrollTop() > winH ) {
        $('nav ul li a').css('color', 'black')
    } else {
        $('nav ul li a').css('color', 'white')
    }
}).on("resize", function(){ // If the user resizes the window
   winH = $(this).height(); // you'll need the new height value
});