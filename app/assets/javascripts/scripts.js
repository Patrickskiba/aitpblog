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
		var slider4 = $('.bxslider4').bxSlider({
			Controls: true,
			slideWidth: 640,
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
	$('.navbar-toggle').on('click', function() {
		$('.navbar-collapse').slideToggle();
	});

		$('.slider').slideUp();

	    $('#thumbnail1').on('click', function() {
		$('.slider').not( "#slider1" ).slideUp("500", function() {
			slider1.reloadSlider();
			$('#slider1').slideDown( "500", function() {
				if($( window ).width() >= 756) {
					$('html, body').animate( {
					scrollTop: $("#slider1").offset().top-50
				}, 500);}
			});
		});
	    });
	    $('#thumbnail2').on('click', function() {
		$('.slider').not( "#slider2" ).slideUp("500", function() {
			slider2.reloadSlider();
			$('#slider2').slideDown( "500", function() {
				if($( window ).width() >= 756) {
				$('html, body').animate( {
					scrollTop: $("#slider2").offset().top-50
				}, 500);}
			});
		});
	    });
	    $('#thumbnail3').on('click', function() {
		$('.slider').not( "#slider3" ).slideUp("500", function() {
			slider3.reloadSlider();
			$('#slider3').slideDown( "500", function() {
				if($( window ).width() >= 756) {
				$('html, body').animate( {
					scrollTop: $("#slider3").offset().top-50
				}, 500);}
			});
		});
	    });
	    $('#thumbnail4').on('click', function() {
		$('.slider').not( "#slider4" ).slideUp("500", function() {
			slider4.reloadSlider();
			$('#slider4').slideDown( "500", function() {
				if($( window ).width() >= 756) {
				$('html, body').animate( {
					scrollTop: $("#slider4").offset().top-50
				}, 500);}
			});
		});
	    });

	    $('img#thumbnail1.img-circle').on('mouseenter', function() {
		$('#caption1').show();
	    });
	    $('img#thumbnail1.img-circle').on('mouseleave', function() {
		$('#caption1').hide();
	    });
	    $('img#thumbnail2.img-circle').on('mouseenter', function() {
		$('#caption2').show();

	    });
	    $('img#thumbnail2.img-circle').on('mouseleave', function() {
		$('#caption2').hide();
	    });
	    $('img#thumbnail3.img-circle').on('mouseenter', function() {
		$('#caption3').show();
	    });
	    $('img#thumbnail3.img-circle').on('mouseleave', function() {
		$('#caption3').hide();
	    });
	    $('img#thumbnail4.img-circle').on('mouseenter', function() {
		$('#caption4').css({ "top": "70px", "left": "40px" });
		$('#caption4').show();
	    });
	    $('img#thumbnail4.img-circle').on('mouseleave', function() {
		$('#caption4').hide();
    	});
		
	    $('#calendar').fullCalendar({

                        // THIS KEY WON'T WORK IN PRODUCTION!!!
                        // To make your own Google API key, follow the directions here:
                        // http://fullcalendar.io/docs/google_calendar/
                           header: {
      				left: 'prev,next today',
     				center: 'title',
      				right: 'month,agendaWeek,agendaDay'
    			}, googleCalendarApiKey: 'AIzaSyAMuak3Xzz0bseFZI62U9znaabCUYxevJ4',
                
                        // US Holidays
                         
			events: 'ecsuaitplocker@gmail.com',
			
			
			timezone: 'America/New_York',
			ignoreTimezone: false,
                        
                        eventClick: function(event) {
                                // opens events in a popup window
                                window.open(event.url, 'gcalevent', 'width=700,height=600');
                                return false;
                        },
                        
                        loading: function(bool) {
                                $('#loading').toggle(bool);
                        }
                        
                });
	    
});






