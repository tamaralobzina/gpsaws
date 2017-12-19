'use strict';

$('.travelIcons').delegate('li', 'click', function () {
    var index = $(this).index();
    if (index == 0) {
        $('#istanbulCaption').html("Jump across the Black Sea to Turkey");
    }

    if (index == 1) {
        console.log(index);
        $('#tajCaption').html("The Taj at dawn");
    }

    if (index == 2) {
        console.log(index);
        $('#kievCaption').html("The Golden domes of Kiev");
    }

    if (index == 3) {
        console.log(index);
        $('#umanCaption').html("Sofiyivski Park in Autumn");
    }
});