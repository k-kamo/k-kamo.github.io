$(function(){
	$('.pagetop').hide();
	$(window).scroll(function(){
		if($(this).scrollTop() > 120){
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
