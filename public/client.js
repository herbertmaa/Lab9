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
                $(element).html = "";
                $(element).append(myDivArray[i]);
            }
        }

    });


}


function parseJSON2HTML(myJSON) {

    var divArray = [];
    var divArray = [];     
    for (var i = 0; i < myJSON.length; i++) {
        var div = $('<div class = "course"> </div>');
        var temp1 = $('<h6>' + myJSON[i].course_name + '</h6>');
        var temp2 = $('<p>' + myJSON[i].course_id + ' Credits: ' + myJSON[i].course_credits + '</p>');
        div.append(temp1).append(temp2);
        divArray.push(div);
    }

    return divArray;
}
