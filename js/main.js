$('a[data-target^="anchor"]').bind('click.smoothscroll', function () {
    var target = $(this).attr('href'),
     bl_top = $(target).offset().top - 5;
    $('body, html').animate({ scrollTop: bl_top }, 700);
    return false;
   });


   function flipTo(digit, n){
	var current = digit.attr('data-num');
	digit.attr('data-num', n);
	digit.find('.front').attr('data-content', current);
	digit.find('.back, .under').attr('data-content', n);
	digit.find('.flap').css('display', 'block');
	setTimeout(function(){
		digit.find('.base').text(n);
		digit.find('.flap').css('display', 'none');
	}, 350);
}

function jumpTo(digit, n){
	digit.attr('data-num', n);
	digit.find('.base').text(n);
}

function updateGroup(group, n, flip){
	var digit1 = $('.ten'+group);
	var digit2 = $('.'+group);
	n = String(n);
	if(n.length == 1) n = '0'+n;
	var num1 = n.substr(0, 1);
	var num2 = n.substr(1, 1);
	if(digit1.attr('data-num') != num1){
		if(flip) flipTo(digit1, num1);
		else jumpTo(digit1, num1);
	}
	if(digit2.attr('data-num') != num2){
		if(flip) flipTo(digit2, num2);
		else jumpTo(digit2, num2);
	}
}

function setTime(flip){
	var t = new Date();
	updateGroup('hour', t.getHours(), flip);
	updateGroup('min', t.getMinutes(), flip);
	updateGroup('sec', t.getSeconds(), flip);
}

$(document).ready(function(){
	
	setTime(false);
	setInterval(function(){
		setTime(true);
	}, 1000);
	
});



$(document).ready(function(){
    $( '#my-slider' ).sliderPro({
		fadeOutPreviousSlide: false,
		buttons: false,
		fadeDuration: 400,
		fade: true,
		responsive: true,
		width: 445, 
	height: 593,
	thumbnailHeight: 84,
	thumbnailWidth: 62,
	autoplay: false,
        orientation: "vertical",
		 thumbnailsPosition: "left",
		breakpoints: {
			768: {
				buttons: true,
				thumbnailsPosition: "top",
				orientation: "horizontal",
			},
		}
	});
	var slider = $( '#my-slider' ).data( 'sliderPro' );

slider.gotoSlide( 0 );
});

var swiper = new Swiper('.swiper-container', {
	slidesPerView: 1,
	spaceBetween: 18,
	slidesPerGroup: 1,
	AllowSlideNext: true,
	AllowSlidePrev: true,
	autoHeight: true,
	loop: true,
	loopFillGroupWithBlank: true,
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
	breakpoints: {
		800: {
			slidesPerView: 3,
			slidesPerGroup: 1,
			spaceBetween: 18,
		},
	}
});