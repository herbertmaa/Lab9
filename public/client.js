/** This method calls from our server and loads the carousel based on the movies playing. It automatically updates the carousel when this information is changed **/
function callHTML(number) {
    // Request for .HTML file

    $.ajax({

        type: "get",
        url: ("/term" + number + ".html"),
        success: function (data) {

            var element = '#term' + number + 'descript ' + '.card';
            $(element).html(" ");
            $(element).append(data);
        }

    });

}


function callJSON(number) {

    // Request for .JSON file
    $.ajax({

        type: "get",
        url: ("/term" + number + ".json"),
        success: function (data) {
            var element = '#term' + number + 'descript ' + '.card';
            $(element).html(" ");
            var myDivArray = parseJSON2HTML(data);
            for (var i = 0; myDivArray.length > i; i++) {
                $(element).append(myDivArray[i]);
            }
        }

    });


}


function parseJSON2HTML(myJSON) {

    var divArray = [];
    for (var i = 0; i < myJSON.length; i++) {
        var div = $('<div> </div>');
        var h6 = $('<h6>' + myJSON[i].course_credits + '</h6');
        var h4 = $('<h4>' + myJSON[i].course_name + '</h4>');
        var h5 = $('<h5>' + myJSON[i].course_id + '</h5>');
        div.append(h4).append(h5).append(h6);
        divArray.push(div);
    }

    return divArray;
}
