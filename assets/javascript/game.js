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

var wins = 0;

var losses = 0;

var currentCount = 0;

function gameStart() {

    var currentCount = 0;

    $("#current").text(currentCount);

    // displaying the materia images
    for (i=0; i < 4; i++) {
        var randomMateria = Math.floor(Math.random() * materias.length);

        var randomValue = Math.floor(Math.random() * valueArray.length);

        var materiaValue = valueArray[randomValue];

        var displayedMateria = $("<img>");

        displayedMateria.addClass("materiaImg");

        displayedMateria.attr("src", materias[randomMateria]).attr("data-materiaValue", valueArray[randomValue]);

        // displayedMateria.attr("data-materiaValue", materiaValue);

        $("#materiaBox").append(displayedMateria);

        // removes used Materia images and values from array to avoid duplicates
        materias.splice(randomMateria, 1);

        valueArray.splice(randomValue, 1);
    };

};

function restart() {
    // refills the array with images to start over again
    materias = [
        "./assets/images/bluemateria.png",
        "./assets/images/greenmateria.png",
        "./assets/images/purplemateria.png",
        "./assets/images/redmateria.png",
        "./assets/images/tealmateria.png",
        "./assets/images/whitemateria.png",
        "./assets/images/yellowmateria.png"
    ];
    
    // and numbers
    valueArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

    var currentCount = 0;

    var randomNum = Math.floor(Math.random() * (121+1) + 19);

    $("#goal").text(randomNum);

    $("#materiaBox").empty();

    gameStart(materias, valueArray, currentCount);

    // when materia is clicked
    $(".materiaImg").on("click", function() {
        var materiaNum = ($(this).attr("data-materiaValue"));
        materiaNum = parseInt(materiaNum);
    
        currentCount += materiaNum;
    
        $("#current").text(currentCount);

        // checking for wins and losses
        if (currentCount === randomNum) {
            wins++;
            $("#winNum").text(wins);
            restart();
        } else if (currentCount >= randomNum) {
            losses++;
            $("#lossesNum").text(losses);
            restart();
        };

    });
};

$(document).ready(function() {

    // var randomNum = Math.floor(Math.random() * (121+1) + 19);

    // $("#goal").text(randomNum);

    restart();

    // gameStart(materias, valueArray, randomNum);

    // $(".materiaImg").on("click", function(randomNum) {
    //     var materiaNum = ($(this).attr("data-materiaValue"));
    //     materiaNum = parseInt(materiaNum);
    
    //     currentCount += materiaNum;
    
    //     $("#current").text(currentCount);

    //     if (currentCount === randomNum) {
    //         wins++;
    //         $("#winNum").text(wins);
    //         restart();
    //     } else if (currentCount >= randomNum) {
    //         losses++;
    //         $("#lossesNum").text(losses);
    //         restart();
    //     };

    // });

});