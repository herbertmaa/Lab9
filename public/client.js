
/** This method calls from our server and loads the carousel based on the movies playing. It automatically updates the carousel when this information is changed **/
function callHTML() {
    // Request for .HTML file

    $.ajax({

        type: "get",
        url: "/term3.html",
        success: function (data) {
   
            console.log(data);

        }

    });




}


function callJSON(){
    
     // Request for .JSON file
        $.ajax({

            type: "get",
            url: "/movies.json",
            success: function (data) {

                console.log(data);
            }

        });
    
    
    
}
