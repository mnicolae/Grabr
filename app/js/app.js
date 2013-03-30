$(document).ready(function() {

	$('.jumpup').addClass('animated bounceInDown');

	var selected = false;
	
	$(".img-polaroid").hover( 

		function(){
		if (!selected) {
			$(this).css("width", "110"); $(this).css("height", "110");
			// $(this).css("width", "100"); $(this).css("height", "100");
			}
		},

		function(){
		if (!selected) {
			// $(this).css("width", "110"); $(this).css("height", "110");
			$(this).css("width", "100"); $(this).css("height", "100");
			}
		}
	);

	$(".img-polaroid").click(function() {
		console.log(selected);
		if (selected) {
			$(".img-polaroid").css("width", "100"); $(".img-polaroid").css("height", "100");
			$('#password_field').hide(); $('#username_field').hide();
			$('button#login_button').hide(); $('#forgot').hide();
			selected = false;
		}
		else{
			// $('input#username_field').show();
			$(this).css("width", "110"); $(this).css("height", "110");
			$('#password_field').show();
			$('button#login_button').show(); $('#forgot').show();
			selected = true;
		}
	});

	$(".img-other").click(function() {
		$('#username_field').show();
		$('#password_field').show();
		$('button#login_button').show(); $('#forgot').show();
	});


	$("#reg1").click(function(){
			$('#signup1').addClass('animated bounceOutDown');
			setInterval(function(){$('#signup1').hide();$('#signup2').show()},500);
			$('#signup2').addClass('animated bounceInDown');



	});

});
