$(function(){
	$('.pagetop').hide();
	$(window).scroll(function(){
		if($(this).scrollTop() > 160){
			$('.pagetop').fadeIn();
		}else{
			$('.pagetop').fadeOut();
		}
	});
	$('.pagetop').click(function(){
		$('body,html').animate({scrollTop:0},500);
		return false;
	});
});
