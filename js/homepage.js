$(function() {
    $('.accordion-item .title-bar').each(function() {
        $(this).click(toggleSection);
    })
});

function toggleSection() {
    let $container = $(this).parent();

    $('.accordion-item').not($container).each(function() {
        $(this).addClass('collapse');
        $(this).removeClass('active');
    });
    $container.removeClass('collapse');
    $container.addClass('active');
}
