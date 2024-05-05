$(document).ready(function () {
    $('.navbar__btn').click(function() {
        $(this).toggleClass('active');
        $('.navbar__list').slideToggle(500);
    });
});
