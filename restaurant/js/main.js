// Preloader
document.body.onload = function() {
	setTimeout(function() {
		var preloader = document.getElementById('preloader');
		if( !preloader.classList.contains('done'))
		{
			preloader.classList.add('done');
		}
	}, 200);

};
// Slick slider
$(document).ready(function(){
  $('.wrap').slick({
  dots: true,
  arrows: false,
  infinite: true,
  draggable: true,
  autoplay: true,
  autoplaySpeed: 1500,
  speed: 1000,
  slidesToShow: 1,
  slidesToScroll: 1,
  adaptiveHeight: false,
  responsive: [
  ]
  });
});
// Wow JS Init
$(document).ready(function(){
	var wow = new WOW;
	wow.init();
});
// Menu button
$(document).ready(function(){
	$('#nav-icon1').click(function(){
		$(this).toggleClass('open');
	});
	$('#nav-icon1').click(function(){
		$('nav').toggleClass('opened');
	});
});