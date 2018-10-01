var materias = [
    "./assets/images/bluemateria.png",
    "./assets/images/greenmateria.png",
    "./assets/images/purplemateria.png",
    "./assets/images/redmateria.png",
    "./assets/images/tealmateria.png",
    "./assets/images/whitemateria.png",
    "./assets/images/yellowmateria.png"
];

var valueArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

$(document).ready(function() {

    var randomNum = Math.floor(Math.random() * (121+1) + 19);

    var scoreCount = 0;

    $("#goal").text(randomNum);

    $("#score").text(scoreCount);

    // displaying the materia images
    for (i=0; i < 4; i++) {
        var randomMateria = Math.floor(Math.random() * materias.length);

        var randomValue = Math.floor(Math.random() * valueArray.length);

        var materiaValue = valueArray[randomValue];

        // var materiaValue = Math.floor(Math.random() * (12*1) + 1);

        var displayedMateria = $("<img>");

        displayedMateria.addClass("materiaImg");

        displayedMateria.attr("src", materias[randomMateria]);

        displayedMateria.attr("data-materiaValue", materiaValue);

        $("#materiaBox").append(displayedMateria);

        // removes used Materia images and values from array to avoid duplicates
        materias.splice(randomMateria, 1);

        valueArray.splice(randomValue, 1);
    };

    $(".materiaImg").on("click", function() {
        var materiaNum = ($(this).attr("data-materiaValue"));
        materiaNum = parseInt(materiaNum);
    
        scoreCount += materiaNum;
    
        $("#score").text(scoreCount);
    });

});