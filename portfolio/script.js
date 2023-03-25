$(function(){
	$('.pagetop').hide();
	$(window).scroll(function(){
		if($(this).scrollTop() > 180){
			$('.pagetop').fadeIn();
		}else{
			$('.pagetop').fadeOut();
		}
	});
	$('.pagetop').click(function(){
		$('body,html').animate({scrollTop:0},500);
		return false;
	});

	$('#h-menu a').click(function(){
		$('#menu-btn').removeAttr("checked").prop("checked",false).change();
	});
});
