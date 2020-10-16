



$(document).ready(function () {
    // $('.line-1').css('transform', 'translateY(0)');
    // $('.line-2').css('transform', 'translateY(0)');
    // $('.line-3').css('transform', 'translateY(0)');
    var delayTimeWelcome = 1;
    for (var i = 1; i <= 3; i++) {
        gsap.to(".line-" + i, {
            duration: 0.9,
            y: 0,
            delay: delayTimeWelcome
        });
        delayTimeWelcome += 0.5;
    }

    gsap.to(".welcome-screen", {
        delay: 3,
        duration: 2,
        opacity: 0,
    });

    gsap.to(".welcome-screen", {
        delay: 5,

        display: 'none'
    });
    var closed = true;
    $('.town').click(function () {
        console.log(closed);
        

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
            closed = false;
        } else {
            for (var i = 19; i >= 1; i--) {
                gsap.to(".nd-item-" + i, {
                    duration: 0.3,
                    x: 160,
                    delay: delayTime
                });
                delayTime += 0.05;
            }
            closed = true;
        }


    });

});





var dropdownClosed = true;





