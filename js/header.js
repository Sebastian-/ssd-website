$(function() {
    const $hamburger = $('#hamburger');

    $hamburger.click(openMenu);
    $hamburger.mousedown(function(e) {
        e.preventDefault();
    });
})

function openMenu() {
    $('header').toggleClass('show');
}