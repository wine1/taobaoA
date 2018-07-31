$(function () {
	$('.nav-right li').eq(2).hover(function () {
			$('.gouwuche').show();
		},
		function () {
			$('.gouwuche').hide();
		})
	$('.nav-right li').eq(3).hover(function () {
			$('.shoucangjia').show();
		},
		function () {
			$('.shoucangjia').hide();
		})
	$('.nav-right li').eq(5).hover(function () {
			$('.maijia').show();
		},
		function () {
			$('.maijia').hide();
		})
	$('.nav-right li').eq(6).hover(function () {
			$('.kefu').show();
		},
		function () {
			$('.kefu').hide();
		})
})