//Fading timeline cards
$(function(){
    window.scrollReveal = ScrollReveal();

    const fadeRightOptions = {
        origin: 'right',
        distance: '40px',
        easing: 'ease-in-out',
        duration: 900,
    };

    const fadeLeftOptions = {
        origin: 'left',
        distance: '40px',
        easing: 'ease-in-out',
        duration: 900,
    };

    if($(window).width() < 768) {
        $('.fadeInLeft').removeClass('fadeInLeft').addClass('fadeInRight');
        // Check later
        /* if($('.timeline-content').hasClass('fadeInLeft')) {
            $('.timeline-content').removeClass('fadeInLeft').addClass('fadeInRight');
        } */

    } else {
        scrollReveal.reveal('.fadeInLeft', fadeLeftOptions);
    }

    scrollReveal.reveal('.fadeInRight', fadeRightOptions);

    //Scroll to top
    scrollToTop();

    $('#scroll-to-top').click(() => {
        $('html, body').animate({
            scrollTop: 0
        }, 800);
    });
   
    function scrollToTop(){
        $(document).scroll(() => {
            const distanceFromTop = $(this).scrollTop();
    
            if(distanceFromTop > 700) {
                $('#scroll-to-top').fadeIn();
            } else {
                $('#scroll-to-top').fadeOut();
            }
        });
    }

});