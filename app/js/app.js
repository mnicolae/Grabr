$(document).ready(function() {

	$('#accountSettingsTab a').click(function (e) {
    	e.preventDefault();
    	$(this).tab('show');
    });

	$("#sendPassword").click(function() {
		$("#modalBodyContent").hide();
		$(".modal-body").text("A password has been sent to your email.");
	});

	$(".dropdown-toggle").dropdown();
	$("#status").popover();
	
	$('.jumpup').addClass('animated bounceInDown');

	var selected = false;
	
	$(".img").hover( 

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

	$(".user-photo").click(function() {
		console.log(selected);
		if (selected) {
			$(".img ").css("width", "100"); $(".img ").css("height", "100");
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
			$('#signup1').addClass('animated bounceOutRight');
			setTimeout(function(){
				$('#signup1').hide();
				$('#signup2').show();
				$('#signup1').removeClass('animated bounceOutRight');
				$('#signup2').addClass('animated bounceInLeft');
			},500);
			
	});

	$("#reg2b").click(function(){
			$('#signup2').addClass('animated bounceOutLeft');
			setTimeout(function(){
				$('#signup2').hide();
				$('#signup1').show()
				$('#signup2').removeClass('animated bounceOutLeft');
				$('#signup1').addClass('animated bounceInRight');
			},500);
			
	});

	$("#reg2f").click(function(){
			$('#signup2').addClass('animated bounceOutRight');
			setTimeout(function(){
				$('#signup2').hide();
				$('#signup3').show();
				$('#signup2').removeClass('animated bounceOutRight');
				$('#signup3').addClass('animated bounceInLeft');
			},500);
			
	});

	$("#reg3b").click(function(){
			$('#signup3').addClass('animated bounceOutLeft');
			setTimeout(function(){
				$('#signup3').hide();
				$('#signup2').show()
				$('#signup3').removeClass('animated bounceOutLeft');
				$('#signup2').addClass('animated bounceInRight');
			},500);
			
	});


// Checkbox stuff
	var pop = false;
	var downloads = [];
	$(".checkbox").click(function() {
		var pic = $(this).prev().attr("src")
		if (!pop){
		$("#status").popover("show");
		$(".popover-content").html('<div class="statusbox"> <img class="status-image" src=' + pic + '/> </div></br>');
		pop = true;
		}else{
			$(".popover-content").append('<div class="statusbox"> <img class="status-image" src=' + pic + '/> </div></br>');
		}

	});

	function loadbar(){

	var progress = setInterval(function() {
    var $bar = $('.bar');
    
    if ($bar.width()=="100%") {
        clearInterval(progress);
        $('.progress').removeClass('active');
    } else {
        $bar.width($bar.width() * 2);
    }
		}, 800);

		// var n = 4
		// while (n < 100){
		// 	setInterval(function(){
  //        		n = n + 6;
  //        		var x = n + "%";
		// 		$(".bar").css("width", x);
		// 	},30);
		// }
	}


	$("#download").click(function() {
		$(".status-image").css('float', 'left');
		$(".statusbox").append('<div class=" dbar progress progress-striped active"><div class="bar" style="width: 4%;"></div></div>');
		loadbar();
	});


	// function newstatus(simage){
	// 	var statusbox = document.createElement('div');
	// 	$(statusbox).addClass("status-box");
	// 	$statusbox).append(simage)


	// }


});
