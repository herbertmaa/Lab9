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


        // Request for .HTML file
        $.ajax({

            type: "get",
            url: "/movies.html",
            success: function (data) {


                console.log(data);
            }

        });
    }, 10000);





});
