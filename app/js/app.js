$(document).ready(function() {
	
	$(".img-polaroid").hover(function() {

	});

	$(".img-polaroid").click(function() { 
		$('input#username_field').show();
		$('input#password_field').show();
		$('button#login_button').show();
	});

});