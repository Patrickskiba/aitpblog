$(document).ready(function() {

		var slider1 = $('.bxslider1').bxSlider({
			Controls: true,
			slideWidth: 800,
		});
		var slider2 = $('.bxslider2').bxSlider({
			Controls: true,
			slideWidth: 800,
		});
		var slider3 = $('.bxslider3').bxSlider({
			Controls: true,
			slideWidth: 800,
		});
		$('a[href*=#]:not([href=#])').click(function() {
			if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
				var target = $(this.hash);
				target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
				if (target.length) {
					$('html,body').animate({
					scrollTop: target.offset().top
				}, 1000);
				return false;
				}
			}
		});


		$('.slider').slideUp();

	    $('#thumbnail1').on('click', function() {
		$('.slider').not( "#slider1" ).slideUp( function() {
			slider1.reloadSlider();
			$('#slider1').slideDown( "slow", function() {
				$('html, body').animate( {
					scrollTop: $("#slider1").offset().top
				}, 300);
			});
		});
	    });
	    $('#thumbnail2').on('click', function() {
		$('.slider').not( "#slider2" ).slideUp( function() {
			slider2.reloadSlider();
			$('#slider2').slideDown( "slow", function() {
				$('html, body').animate( {
					scrollTop: $("#slider2").offset().top
				}, 300);
			});
		});
	    });
	    $('#thumbnail3').on('click', function() {
		$('.slider').not( "#slider3" ).slideUp( function() {
			slider3.reloadSlider();
			$('#slider3').slideDown( "slow", function() {
				$('html, body').animate( {
					scrollTop: $("#slider3").offset().top
				}, 300);
			});
		});
	    });

	    $('img#thumbnail1.thumbnail').on('mouseenter', function() {
		$('#caption1').show();
	    });
	    $('img#thumbnail1.thumbnail').on('mouseleave', function() {
		$('#caption1').hide();
	    });
	    $('img#thumbnail2.thumbnail').on('mouseenter', function() {
		$('#caption2').show();

	    });
	    $('img#thumbnail2.thumbnail').on('mouseleave', function() {
		$('#caption2').hide();
	    });
	    $('img#thumbnail3.thumbnail').on('mouseenter', function() {
		$('#caption3').show();
	    });
	    $('img#thumbnail3.thumbnail').on('mouseleave', function() {
		$('#caption3').hide();
	    });
	    $('img#thumbnail4.thumbnail').on('mouseenter', function() {
		$('#caption4').css({ "top": "70px", "left": "40px" });
		$('#caption4').show();
	    });
	    $('img#thumbnail4.thumbnail').on('mouseleave', function() {
		$('#caption4').hide();
    	});
});






