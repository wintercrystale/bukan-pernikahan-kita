(function ($) {
    "use strict";


    // Loading screen hide?
    window.onload = function () {
        //$('#load-page').addClass('hide-load-page');
        $('.gia-slide-up').addClass('slide-up');
        $('.gia-fade-in-slow').addClass('fade-in-slow');
    };

    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            $('.navbar').fadeIn('slow').css('display', 'flex');
        } else {
            $('.navbar').fadeOut('slow').css('display', 'none');
        }
    });



    // Scroll back up after refresh
    $(document).ready(function () {
        $('html, body').animate({ scrollTop: 0 }, 150, 'easeInOutExpo');
    })


    // Navbar on scrolling
    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            $('.navbar').fadeIn('slow').css('display', 'flex');
        } else {
            $('.navbar').fadeOut('slow').css('display', 'none');
        }
    });



    // Section title fade in
    // $(window).scroll(function () {
    //     $('.section-title').each(function (i) {

    //         $(this).css('opacity', '0');

    //         var bottom_of_object = $(this).position().top + $(this).outerHeight();
    //         var bottom_of_window = $(window).scrollTop() + $(window).height();

    //         /* If the object is completely visible in the window, fade it in */
    //         if( bottom_of_window > bottom_of_object ){

    //             $(this).addClass("fade-in");

    //         }
    //     })
    // })
    $(window).on("load", function () {
        $(window).scroll(function () {
            var windowBottom = $(this).scrollTop() + $(this).innerHeight();
            $(".section-title").each(function () {
                /* Check the location of each desired element */
                var objectBottom = $(this).offset().top + $(this).outerHeight();

                /* If the element is completely within bounds of the window, fade it in */
                if (objectBottom < windowBottom) { //object comes into view (scrolling down)
                    if ($(this).css("opacity") == 0) { 
                        $(this).addClass("fade-in") 
                        $(this).fadeTo(500, 1)
                    }
                } else { //object goes out of view (scrolling up)
                    if ($(this).css("opacity") == 1) {
                        $(this).removeClass("fade-in") 
                        $(this).fadeTo(500, 0); 
                    }
                }
            });
        }).scroll(); //invoke scroll-handler on page-load
    });


    // Section content fade in
    // $(window).scroll(function () {
    //     $('.col-md-6').each(function (i) {

    //         $(this).css('opacity', '0');

    //         var bottom_of_object = $(this).position().top + $(this).outerHeight();
    //         var bottom_of_window = $(window).scrollTop() + $(window).height();

    //         /* If the object is completely visible in the window, fade it in */
    //         if( bottom_of_window > bottom_of_object ){

    //             $(this).addClass("fade-in");

    //         }
    //     })
    // })
    $(window).on("load", function () {
        $(window).scroll(function () {
            var windowBottom = $(this).scrollTop() + $(this).innerHeight();
            $(".custom-gia").each(function () {
                /* Check the location of each desired element */
                var objectBottom = $(this).offset().top + $(this).outerHeight();

                /* If the element is completely within bounds of the window, fade it in */
                if (objectBottom < windowBottom) { //object comes into view (scrolling down)
                    if ($(this).css("opacity") == 0) { 
                        $(this).addClass("fade-in") 
                        $(this).fadeTo(500, 1)
                    }
                } else { //object goes out of view (scrolling up)
                    if ($(this).css("opacity") == 1) {
                        $(this).removeClass("fade-in") 
                        $(this).fadeTo(500, 0); 
                    }
                }
            });
        }).scroll(); //invoke scroll-handler on page-load
    });


    // Smooth scrolling on the navbar links
    $(".navbar-nav a").on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();
            
            $('html, body').animate({
                scrollTop: $(this.hash).offset().top - 45
            }, 1500, 'easeInOutExpo');
            
            if ($(this).parents('.navbar-nav').length) {
                $('.navbar-nav .active').removeClass('active');
                $(this).closest('a').addClass('active');
            }
        }
    });


    // Modal Video
    $(document).ready(function () {
        var $videoSrc;
        $('.btn-play').click(function () {
            $videoSrc = $(this).data("src");
        });
        console.log($videoSrc);

        $('#videoModal').on('shown.bs.modal', function (e) {
            $("#video").attr('src', $videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0");
        })

        $('#videoModal').on('hide.bs.modal', function (e) {
            $("#video").attr('src', $videoSrc);
        })
    });


    // Scroll to Bottom
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.scroll-to-bottom').fadeOut('slow');
        } else {
            $('.scroll-to-bottom').fadeIn('slow');
        }
    });


    // Portfolio isotope and filter
    // var portfolioIsotope = $('.portfolio-container').isotope({
    //     itemSelector: '.portfolio-item',
    //     layoutMode: 'fitRows'
    // });
    // $('#portfolio-flters li').on('click', function () {
    //     $("#portfolio-flters li").removeClass('active');
    //     $(this).addClass('active');

    //     portfolioIsotope.isotope({filter: $(this).data('filter')});
    // });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });

    // Music toggle button
    $('.music-toggle').click(function () {

        const audio = document.querySelector("#audioplay audio");

        if (audio.duration > 0 && !audio.paused) {

            //Its playing...do your job
            audio.pause();
            $('.music-toggle').removeClass('music-rotate');

        } else {

            //Not playing...maybe paused, stopped or never played.
            audio.play();
            $('.music-toggle').addClass('music-rotate');

        }
        return false;
    });


    // Gallery carousel
    $(".gallery-carousel").owlCarousel({
        autoplay: false,
        smartSpeed: 1500,
        dots: false,
        loop: true,
        nav : true,
        navText : [
            '<i class="fa fa-angle-left" aria-hidden="true"></i>',
            '<i class="fa fa-angle-right" aria-hidden="true"></i>'
        ],
        responsive: {
            0:{
                items:1
            },
            576:{
                items:2
            },
            768:{
                items:3
            },
            992:{
                items:4
            },
            1200:{
                items:5
            }
        }
    });


    // Countdown
    $('#clock').countdown('2025/09/26', function (event) {
        $(this).html(event.strftime(
            '<div class="position-relative text-center"><div class="mb-3"><h3>%D</h3><span>Days</span></div><div class="mb-3"><h3>%H</h3><span>Hours</span></div><div class="mb-3"><h3>%M</h3><span>Minutes</span></div><div class="mb-3"><h3>%S</h3><span>Seconds</span></div></div>'
        ));
    });



    // Buka Undangan
    $('#open-invitation').click(function (){
		$('#overlay').addClass('hide-overlay');


        $('html, body').animate({ scrollTop: 0 }, 150, 'easeInOutExpo');


        let isPLaying = false;

        const audio = document.querySelector("#audioplay audio");
        if (!isPLaying) {
            console.log("play")
            audio.play();
            isPLaying = true
        }

        $('.music-toggle').fadeIn('slow');
        $('.music-toggle').addClass('music-rotate');
	});


    // let isPLaying = false;

    // window.addEventListener('scroll', () => {

    // const audio = document.querySelector("#audioplay audio");
    // if (!isPLaying && window.scrollY > 200) {
    //     console.log("play")
    //     audio.play();
    //     isPLaying = true
    // }
    // });

    
})(jQuery);

