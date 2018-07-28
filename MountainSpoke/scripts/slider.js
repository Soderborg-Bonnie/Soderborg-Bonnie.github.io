$(document).ready(function () {
    $('.next').on('click', function () {
        var currentImage = $('.current');
        var nextImage = currentImage.next();
        if (nextImage.length) {
            currentImage.removeClass('current').css('z-index', -100);
            nextImage.addClass('current').css('z-index', 100);
        }
    });

    $('.previous').on('click', function () {
        var currentImage = $('.current');
        var previousImage = currentImage.prev();
        if (previousImage.length) {
            currentImage.removeClass('current').css('z-index', -100);
            previousImage.addClass('current').css('z-index', 100);
        }
    });
});
