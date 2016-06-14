$(document).ready(function(){
	$('.bxslider').bxSlider({
		auto: true
	});
	$('.name-playlist').addClass("col-md-2");
	// PLAYLIST
	$(".playlist li")
	.on('mouseenter', function(event) {
		$('img', this).animate({
			opacity: 0.25
		}, 300);
		$('p', this).animate({
			opacity: 1
		}, 300);
	})
	.on('mouseleave', function(event) {
		$('img', this).animate({
			opacity: 1
		}, 300);
		$('p', this).animate({
			opacity: 0
		}, 300);
	});
});
