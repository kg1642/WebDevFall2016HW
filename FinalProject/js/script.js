//jquery for scrolling to the assigned div when clicked on the button
$(document).ready(function() {

    // mountain-climbing
    $("#mountain-climbing").on('click', function() {
        // scrolling to the assigned div 
        $('html, body').animate({
            scrollTop: $("#mountain-climbingd").offset().top
        }, 1000);

        // enlarging and displaying the content
        $("#mountain-climbing-image").css({
            "transform": "scale(1.1)",
            "filter": "brightness(50%)",
            "transition": "all 2s"

        });
        $("#mountain-climbing-content").css({
            "display": "block"
        });
        // undoing the change after 7 seconds
        setTimeout(
            function() {
                $("#mountain-climbing-image").css({
                    "transform": "scale(1)"
                });
            }, 7000);
    });
    $("#mountain-cycling").on('click', function() {
        // scrolling to the assigned div 
        $('html, body').animate({
            scrollTop: $("#mountain-cyclingd").offset().top
        }, 1000);

        // enlarging and displaying the content
        $("#mountain-cycling-image").css({
            "transform": "scale(1.1)",
            "filter": "brightness(50%)",
            "transition": "all 2s"

        });
        $("#mountain-cycling-content").css({
            "display": "block"
        });
        // undoing the change after 7 seconds
        setTimeout(
            function() {
                $("#mountain-cycling-image").css({
                    "transform": "scale(1)"
                });
            }, 7000);
    });
    $("#rafting").on('click', function() {
        // scrolling to the assigned div 
        $('html, body').animate({
            scrollTop: $("#raftingd").offset().top
        }, 1000);

        // enlarging and displaying the content
        $("#rafting-image").css({
            "transform": "scale(1.1)",
            "filter": "brightness(50%)",
            "transition": "all 2s"

        });
        $("#rafting-content").css({
            "display": "block"
        });
        // undoing the change after 7 seconds
        setTimeout(
            function() {
                $("#rafting-image").css({
                    "transform": "scale(1)"
                });
            }, 7000);
    });
    $("#paragliding").on('click', function() {
        // scrolling to the assigned div 
        $('html, body').animate({
            scrollTop: $("#paraglidingd").offset().top
        }, 1000);

        // enlarging and displaying the content
        $("#paragliding-image").css({
            "transform": "scale(1.1)",
            "filter": "brightness(50%)",
            "transition": "all 2s"

        });
        $("#paragliding-content").css({
            "display": "block"
        });
        // undoing the change after 7 seconds
        setTimeout(
            function() {
                $("#paragliding-image").css({
                    "transform": "scale(1)"
                });
            }, 7000);
    });
    $("#kathmandu").on('click', function() {
        // scrolling to the assigned div 
        $('html, body').animate({
            scrollTop: $("#kathmandud").offset().top
        }, 1000);

        // enlarging and displaying the content
        $("#kathmandu-image").css({
            "transform": "scale(1.1)",
            "filter": "brightness(50%)",
            "transition": "all 2s"

        });
        $("#kathmandu-content").css({
            "display": "block"
        });
        // undoing the change after 7 seconds
        setTimeout(
            function() {
                $("#kathmandu-image").css({
                    "transform": "scale(1)"
                });
            }, 7000);
    });

    $("#pokhara").on('click', function() {
        // scrolling to the assigned div 
        $('html, body').animate({
            scrollTop: $("#pokharad").offset().top
        }, 1000);

        // enlarging and displaying the content
        $("#pokhara-image").css({
            "transform": "scale(1.1)",
            "filter": "brightness(50%)",
            "transition": "all 2s"

        });
        $("#pokhara-content").css({
            "display": "block"
        });
        // undoing the change after 7 seconds
        setTimeout(
            function() {
                $("#pokhara-image").css({
                    "transform": "scale(1)"
                });
            }, 7000);
    });

    $("#chitwan").on('click', function() {
        // scrolling to the assigned div 
        $('html, body').animate({
            scrollTop: $("#mountain-cyclingd").offset().top
        }, 1000);

        // enlarging and displaying the content
        $("#chitwan-image").css({
            "transform": "scale(1.1)",
            "filter": "brightness(50%)",
            "transition": "all 2s"

        });
        $("#chitwan-content").css({
            "display": "block"
        });
        // undoing the change after 7 seconds
        setTimeout(
            function() {
                $("#chitwan-image").css({
                    "transform": "scale(1)"
                });
            }, 7000);
    });


    $("#janakpur").on('click', function() {
        // scrolling to the assigned div 
        $('html, body').animate({
            scrollTop: $("#janakpurd").offset().top
        }, 1000);

        // enlarging and displaying the content
        $("#janakpur-image").css({
            "transform": "scale(1.1)",
            "filter": "brightness(50%)",
            "transition": "all 2s"

        });
        $("#janakpur-content").css({
            "display": "block"
        });
        // undoing the change after 7 seconds
        setTimeout(
            function() {
                $("#janakpur-image").css({
                    "transform": "scale(1)"
                });
            }, 7000);
    });
});


//jquery for carosel 

$(document).ready(function() {
    $("#myCarousel").carousel({
        interval: 3000,
        pause: "hover"
    });
    // PREV NEXT Buttons
    $(".left").click(function() {
        $("#myCarousel").carousel("prev");
    });
    $(".right").click(function() {
        $("#myCarousel").carousel("next");
    });

    // Enable Carousel Indicators
    $(".item1").click(function() {
        $("#myCarousel").carousel(0);
    });
    $(".item2").click(function() {
        $("#myCarousel").carousel(1);
    });
    $(".item3").click(function() {
        $("#myCarousel").carousel(2);
    });
});
