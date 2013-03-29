$(document).ready(function() {
	
	$(".img-polaroid").hover(
		function() { $(this).css("width", "140"); $(this).css("height", "140"); },
		function() { $(this).css("width", "100"); $(this).css("height", "100");}
	);

	$(".img-polaroid").click(function() {
		$('input#username_field').show();
		$('input#password_field').show();
		$('button#login_button').show();
	});

});
