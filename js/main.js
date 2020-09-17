


// comming soon

	$('#clock').countdown('2021/01/01', function(event) {
		    $(this).html(event.strftime(''
		    	+'<div><span>%d</span><span>Days</span></div>'
		    	+'<div><span>%H</span><span>Hr</span></div>'
		    	+'<div><span>%M</span><span>Min</span></div>'
		    	+'<div><span>%S</span><span>Sec</span></div>'
		    	));
		  });
	$('#clock2').countdown('2021/03/9', function(event) {
		    $(this).html(event.strftime(''
		    	+'<div><span>%d</span><span>Days</span></div>'
		    	+'<div><span>%H</span><span>Hr</span></div>'
		    	+'<div><span>%M</span><span>Min</span></div>'
		    	+'<div><span>%S</span><span>Sec</span></div>'
		    	));
		  });
// fillter pluging
	var mixer = mixitup('.product-itmes');



// button popup
	function popUp(){
		swal("submitted successfully!", "I received your email!", "success");

	}

// animation

	new WOW().init();

// scrolling top	
	$('.top').click(function(){
		$("html, body").animate({
			scrollTop:0

		},1000);
	});
	$(window).scroll(function(){
		var ourwindow = $(this).scrollTop();
		if(ourwindow<800){
			$('.top').fadeOut();
		}else{
			$('.top').fadeIn();
		}
	});


// scrolling menu

	$('.navbar-nav a[href^="#"]').click(function(e) {
		e.preventDefault();
		var target = this.hash;
		$('html, body').animate({
			scrollTop: $(target).offset().top -50
		},500);
	});

	$('.up-down a[href^="#"]').click(function(e) {
		e.preventDefault();
		var target = this.hash;
		$('html, body').animate({
			scrollTop: $(target).offset().top -50
		},500);
	});

	$('.about-content a[href^="#"]').click(function(e) {
		e.preventDefault();
		var target = this.hash;
		$('html, body').animate({
			scrollTop: $(target).offset().top -50
		},500);
	});

	$('.btn a[href^="#"]').click(function(e) {
		e.preventDefault();
		var target = this.hash;
		$('html, body').animate({
			scrollTop: $(target).offset().top -50
		},500);
	});

// for change menu color

	$('.navbar-nav li').click(function(){
		$(this).addClass('active').siblings().removeClass('active');
	});
// counter
		$('.count').counterUp({
		    delay:2 ,
		    time: 1000
			});

	