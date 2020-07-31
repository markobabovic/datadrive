// for wordpress  jQuery(function ($) {
(function() {
    var sboFilterTop = $('.sbo-filters').offset().top;

    $(window).on('load', function(){
        //$("body").addClass("load-done");
        tickFiltersToTop(sboFilterTop);
    });

    $(document).scroll(function(e){
        stickFiltersToTop(sboFilterTop);
    });

    $(window).resize(function(){

    });

    $(".hamburger-menu-icon").click(function (e) {
        e.preventDefault();

        $("body").toggleClass("menu-active");
    });

    $(".custom-select .select-header").click(function (e) {
        e.stopPropagation();
        var thisParent = $(this).parent();
        var thisHeader = $(this);
        var thisbody = thisParent.find(".select-body");

        if (thisParent.hasClass("open-select")) {
            thisParent.removeClass("open-select");
        }
        else {
            $(".custom-select").removeClass("open-select");
            $(".language-bar").removeClass("open-languages");
            thisParent.addClass("open-select");
        }

    });

    $(".custom-select .select-body .item").click(function (e) {
        e.stopPropagation();

        var thisParent = $(this).parent().parent();
        var thisEl = $(this);
        var thisElInput = $(this).parent().parent().find("input");
        var thisElHeader = $(this).parent().parent().find(".select-header");
        thisElValue = thisEl.attr("data-value");
        thisElHeader.text(thisElValue);
        thisParent.removeClass("open-select");

        if (thisElInput.length) {
            thisElInput.attr("value", thisElValue);
            //console.log(thisElValue);
            thisElInput.trigger('change');
        }
    });

    $(window).click(function () {
        $(".custom-select").removeClass("open-select");
    });

    $('.sbo-slider-nav').slick({
        slidesToShow: 5,
        slidesToScroll: 5,
        asNavFor: ".sbo-slider",
        speed: 0,
        dots: false,
        arrows: true,
        centerMode: false,
        focusOnSelect: true,
        infinite: true,
        waitForAnimate: false,
        responsive: [
            {
                breakpoint: 1350,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3
                }
            },
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
        ]
    });

    $('.sbo-slider').each(function (idx, item) {
        var carouselId = "carousel" + idx;

        $(this).next().next().addClass(carouselId);
        $(this).next().next().attr("data-id", carouselId);

        this.id = carouselId;
        $(this).slick({
            slidesToShow: 5,
            slidesToScroll: 5,
            //asNavFor: ".sbo-slider-nav",
            speed: 0,
            dots: false,
            arrows: false,
            swipe: false,
            focusOnSelect: true,
            infinite: true,
            waitForAnimate: false,
            slide: "#" + carouselId + " .slide",
            responsive: [
                {
                    breakpoint: 1350,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3
                    }
                },
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2
                    }
                },
            ]
        });

    });

    function stickFiltersToTop(sboFilterTop) {
        var sboFilters = $(".sbo-filters");
        var sboFiltersH = sboFilters.height();

        if ($(window).scrollTop() > (sboFilterTop + sboFiltersH)) {
            sboFilters.addClass('sticky');
        } else {
            sboFilters.removeClass('sticky');
        }
    }

})();

// for wordpress });



