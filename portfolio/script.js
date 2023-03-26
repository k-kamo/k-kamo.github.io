$(function(){
	$('.pagetop').hide();
	$(window).scroll(function(){
		if($(this).scrollTop() > 180){
			$('.pagetop').fadeIn();
			$('#menu-btn').removeAttr("checked").prop("checked",false).change();
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
	$('#h-menu .modal').click(function(){
		$('#menu-btn').removeAttr("checked").prop("checked",false).change();
	});

	$('#menu-btn').change(function(){
		if($('#menu-btn').prop("checked")){
			$('#h-menu label div').html('CLOSE');
		}else{
			$('#h-menu label div').html('MENU');
		}

	});
});
