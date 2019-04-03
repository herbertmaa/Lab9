var previous;

var slickConfig = {
    centerMode: true,
    centerPadding: '60px',
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,

    responsive: [{
            breakpoint: 768,
            settings: {
                arrows: true,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 3
            }
                    },
        {
            breakpoint: 480,
            settings: {
                arrows: true,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 1
            }
                    }
                ]
};




$(document).ready(function () {

    //Ajax poll request every 10 seconds.
    setInterval(function () {


        // Request for .JSON file
        $.ajax({

            type: "get",
            url: "/movies.json",
            success: function (data) {

                console.log(data);
            }

        });

    }, 10000);




});

/** This method calls from our server and loads the carousel based on the movies playing. It automatically updates the carousel when this information is changed **/
function callHTML() {
    // Request for .HTML file

    $.ajax({

        type: "get",
        url: "/movies.html",
        success: function (data) {
            if (previous == undefined) {
                //this is our first time calling the server

                previous = data;
                $('#main_carousel').append(previous);
                $('#main_carousel').slick(slickConfig);

                $('.slick-prev').addClass('fas fa-arrow-circle-left').html("").css("background-color:transparent;");
                $('.slick-next').addClass('fas fa-arrow-circle-right').html("").css("background-color:transparent;");
                
            } else if (previous != data && previous != undefined) {


                $('#main_carousel').html(data);
                $('#main_carousel').slick('unslick');
                $('#main_carousel').slick(slickConfig);


                previous = data;
            } else {
                //Do nothing we do not need to change the carousel
            }
        }

    });




}
