
$(document).ready(function () {

    //fade in the 3 lines of text with delay
    
    var delayTimeWelcome = 1;
    for (var i = 1; i <= 3; i++) {
        gsap.to(".line-" + i, {
            duration: 0.9,
            y: 0,
            delay: delayTimeWelcome
        });
        delayTimeWelcome += 0.5;
    }

    //fade out the welcome-screen by opacity of 100%

    gsap.to(".welcome-screen", {
        delay: 3,
        duration: 2,
        opacity: 0,
    });

    //setting welcome-screen to display: none
    //to avoid laying on top of any buttons

    gsap.to(".welcome-screen", {
        delay: 5,
        display: 'none'
    });

    //animation of nav-dropdown

    var closed = true;
    $('.town').click(function () {
        
        var delayTime = 0;

        if (closed) {            

            for (var i = 1; i <= 19; i++) {
                gsap.to(".nd-item-" + i, {
                    duration: 0.3,
                    x: 0,
                    delay: delayTime
                });
                delayTime += 0.05;
            }
            $('.nav-dropdown').addClass('dropdown-shadow');
            closed = false;
        } else {

            for (var i = 19; i >= 1; i--) {
                gsap.to(".nd-item-" + i, {
                    duration: 0.3,
                    x: 180,
                    delay: delayTime
                });
                delayTime += 0.05;
            }
            $('.nav-dropdown').removeClass('dropdown-shadow');
            closed = true;
        }
    });
});










