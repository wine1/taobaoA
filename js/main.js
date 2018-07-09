(function () {
	
	'use strict';
	// $('.search-nav li').mouseenter(function () { 
	// 	$(this).css('background-color','pink');
	//  });
	//  $('.search-nav li').mouseout(function () { 
	// 	$(this).css('background-color','#fff');
	//  });
	$('.search-nav li').click(function() {
		$(this).siblings().removeClass('actived');
		$(this).addClass('actived');
	});
	$('#slidebar li').mouseenter(function() {
		$(this).addClass('hover');
		$('#showbox').show();
	});
	$('#slidebar li').mouseleave(function() {
		$(this).removeClass('hover');
		$('#showbox').hide();
	});

	// var rollset = $('#right-slide');
	// var offset = rollset.offset();
	$(window).scroll(function() {
		var scrollTop = $(window).scrollTop();
		if(scrollTop >180) {
			$('.wrap-hidden').show();
		}else {
			$('.wrap-hidden').hide();
		}
		if(scrollTop > 240) {
			$('#right-slide').addClass('fixed');
		}
		else {
			$('#right-slide').removeClass('fixed');
		}
		if(scrollTop>800) {
			$('#scrolltop').show();
		}else {
			$('#scrolltop').hide();
		}
	});
	$('#scrolltop').click(function() {
		$('html,body').stop().animate({scrollTop:0},300);
	})



}());

		
      