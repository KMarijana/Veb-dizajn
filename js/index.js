$(document).ready(function () {
    $(".navigation-menu").toggleClass("active");

    $(".mobile-button").click(function () {
        mobileMenu();

    });

    $(".mobile-close").click(function () {
        mobileMenu();
    });


    $("header > nav > ul > li a").click(function () {
        if ($(window).width() < 1125) {
            $(".navigation-menu").toggleClass("active");
            $(".mobile-close").toggleClass("removeClose");
            $(".mobile-button").toggleClass("remove"); 
            setTimeout(function () {
                $('body').toggleClass('no-scroll');
            }, 500);
        }
    });


    var $selectedLinks = $("header > nav > ul > li > *");


    $(window).on("scroll", function () {

        if ($(window).scrollTop()) {
            $("header").css({ "position": "fixed" });
            $(".logo").css({ "width": "180px" });
            $("li").css({ "margin-top": "0px" });
            if ($(window).width() < 1125) {
                $(".nav-item").css({ "font-size": "22px" });
            }
            else {
                $(".nav-item").css({ "font-size": "20px" });
            }


            activeLink();
        }
        else {
            unselect();

            $("header").css({ "position": "relative" });
            $(".logo").css({ "width": "220px" });
            $("li").css({ "margin-top": "15px" });
            $(".nav-item").css({ "font-size": "22px" });
            $($selectedLinks).eq(0).addClass(".nav-item is-active");
        }


    });


    function activeLink() {

        $scrolledHeight = $(window).scrollTop();
        $home = $("#home").position().top;
        $services = $("#services").position().top;
        $about = $("#about").position().top;
        $gallery = $("#gallery").position().top;
        $map = $("#map").position().top;

        if ($scrolledHeight >= $home - 150) {
            unselect();
            $($selectedLinks).eq(0).addClass(".nav-item is-active");
        }

        if ($scrolledHeight >= $services - 150) {
            unselect();
            $($selectedLinks).eq(1).addClass(".nav-item is-active");
        }

        if ($scrolledHeight >= $about - 150) {
            unselect();
            $($selectedLinks).eq(2).addClass(".nav-item is-active");
        }

        if ($scrolledHeight >= $gallery - 200) {
            unselect();
            $($selectedLinks).eq(3).addClass(".nav-item is-active");
        }

        if ($scrolledHeight >= $map - 100) {
            unselect();
            $($selectedLinks).eq(4).addClass(".nav-item is-active");
        }
    }


    function unselect() {
        $selectedLinks = $("header > nav > ul > li > *");
        for (var i = 0; i < $selectedLinks.length; i++) {
            $($selectedLinks).eq(i).removeClass(".nav-item is-active")
        }
    }

    function mobileMenu() {

        $(".mobile-button").toggleClass("remove");
        $(".mobile-close").toggleClass("removeClose");
        $(".navigation-menu").toggleClass("active");
        $('body').toggleClass('no-scroll');
    }

    $(".photo-gallery a").click(function () {
        var pop_img = $(this).attr("href");
        $(".gallery-wrapper .photo-gallery").append('<div class="pop_img_wrap"><div class="pop_img"><img src="' + pop_img + '"></div></div>');

        $(".pop_img_wrap").click(function () {
            $(".pop_img_wrap").remove()
        });

        return false;
    });



    $(".gallery-nav label").eq(0).css("color", "#993333");

    $(".photo-gallery .pic-coloring").css({ "opacity": "0", "transform": "scale(0)", "position": "absolute", "transition": "0s" });
    $(".photo-gallery .pic-salon ").css({ "opacity": "0", "transform": "scale(0)", "position": "absolute", "transition": "0s" });
    $(".photo-gallery .pic-hairstyles ").css({ "opacity": "1", "transform": "scale(1)", "position": "relative", "transition": "0.5s" });


    $(".gallery-nav label").click(function () {

        $inputs = $(this);
        resetValues();

        $(this).css("color", "#993333");
        showGallery($inputs);


    });

    function resetValues() {
        $(".gallery-nav label").css("color", "");

        $(".photo-gallery .pic-haistyles").css({ "opacity": "", "transform": "", "position": "", "transition": "" });
        $(".photo-gallery .pic-coloring").css({ "opacity": "", "transform": "", "position": "", "transition": "" });
        $(".photo-gallery .pic-salon").css({ "opacity": "", "transform": "", "position": "", "transition": "" });
    }



    function showGallery($inputs) {

        if ($($inputs[0]).text() == "Hairstyles") {

            $(".photo-gallery .pic-coloring").css({ "opacity": "0", "transform": "scale(0)", "position": "absolute", "transition": "0s" });

            $(".photo-gallery .pic-salon ").css({ "opacity": "0", "transform": "scale(0)", "position": "absolute", "transition": "0s" });

            $(".photo-gallery .pic-hairstyles ").css({ "opacity": "1", "transform": "scale(1)", "position": "relative", "transition": "0.5s" });

        }

        if ($($inputs[0]).text() == "Hair coloring") {

            $(".photo-gallery .pic-coloring").css({ "opacity": "1", "transform": "scale(1)", "position": "relative", "transition": "0.5s" });

            $(".photo-gallery .pic-salon ").css({ "opacity": "0", "transform": "scale(0)", "position": "absolute", "transition": "0s" });

            $(".photo-gallery .pic-hairstyles ").css({ "opacity": "0", "transform": "scale(0)", "position": "absolute", "transition": "0s" });

        }

        if ($($inputs[0]).text() == "Salon") {

            $(".photo-gallery .pic-coloring").css({ "opacity": "0", "transform": "scale(0)", "position": "absolute", "transition": "0s" });

            $(".photo-gallery .pic-salon ").css({ "opacity": "1", "transform": "scale(1)", "position": "relative", "transition": "0.5s" });

            $(".photo-gallery .pic-hairstyles ").css({ "opacity": "0", "transform": "scale(0)", "position": "absolute", "transition": "0s" });

        }
    }


    $("#name-error-message").hide();
    $("#lastname-error-message").hide();
    $("#email-error-message").hide();
    $("#number-error-message").hide();

    var error_name = false;
    var error_lastname = false;
    var error_email = false;
    var error_number = false;

    $("#form-name").focusout(function () {
        check_name();
    });
    $("#form-lastname").focusout(function () {
        check_lastname();
    });
    $("#form-email").focusout(function () {
        check_email();
    });
    $("#form-number").focusout(function () {
        check_number();
    });


    function check_name() {
        var pattern = /^[a-zA-Z]*$/;
        var name = $("#form-name").val()
        if (pattern.test(name)) {
            $("#name-error-message").hide();
            $("#span-name").show();
            $("#form-name").css("border-bottom", "1px solid gray");

        } else {
            $("#name-error-message").html("Invalid input");
            $("#name-error-message").show();
            $("#span-name").hide();
            $("#form-name").css("border-bottom", "2px solid #993333");
            error_name = true;
        }
    }

    function check_lastname() {
        var pattern = /^[a-zA-Z]*$/;
        var lastname = $("#form-lastname").val()
        if (pattern.test(lastname)) {
            $("#lastname-error-message").hide();
            $("#span-lastname").show();
            $("#form-lastname").css("border-bottom", "1px solid gray");
        } else {
            $("#lastname-error-message").html("Invalid input");
            $("#lastname-error-message").show();
            $("#span-lastname").hide();
            $("#form-lastname").css("border-bottom", "2px solid #993333");
            error_lastname = true;
        }
    }

    function check_email() {
        var pattern = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
        var email = $("#form-email").val()
        if (pattern.test(email)) {
            $("#email-error-message").hide();
            $("#span-email").show();
            $("#form-email").css("border-bottom", "1px solid #gray");

        } else {
            $("#email-error-message").html("Invalid input");
            $("#email-error-message").show();
            $("#span-email").hide();
            $("#form-email").css("border-bottom", "2px solid #993333");
            error_email = true;
        }
    }

    function check_number() {
        var pattern = /^(\d)?$/;
        var number = $("#form-number").val()
        if (pattern.test(number)) {
            $("#number-error-message").hide();
            $("#span-number").show();
            $("#form-number").css("border-bottom", "1px solid #gray");
        } else {
            $("#number-error-message").html("Invalid input");
            $("#number-error-message").show();
            $("#span-number").hide();
            $("#form-number").css("border-bottom", "2px solid #993333");
            error_number = true;
        }
    }
    
});
