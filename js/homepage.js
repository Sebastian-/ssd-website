// onload = function() {
//     console.log(document.querySelectorAll('.accordion-item:not(:first-of-type) h2'));
//     document.querySelectorAll('.accordion-item:not(:first-of-type) h2').forEach(e => 
//         {e.onclick = toggleSection}
//     );
// }

// function toggleSection() {
//     let section = this.parentElement.querySelector('.accordion-content');
//     if (section.getAttribute('data-collapsed') == null) {
//         section.setAttribute('data-collapsed', 'true');
//     }

//     let isCollapsed = section.getAttribute('data-collapsed') === 'true'
    
//     if(isCollapsed) {
//         expandSection(section)
//     } else {
//         collapseSection(section)
//     }
// }

// function collapseSection(element) {
//     element.style.height = null;
//     element.setAttribute('data-collapsed', 'true');
// }

// function expandSection(element) {
//     let sectionHeight = element.scrollHeight;
//     element.style.height = sectionHeight + 'px';
//     element.setAttribute('data-collapsed', 'false');
// }

$(function() {
    $('.accordion-item h2').each(function() {
        $(this).click(toggleSection);
    })
});

function toggleSection() {
    let $container = $(this).parent();

    $('.accordion-item').not($container).each(function() {
        $(this).addClass('collapse');
    });
    $container.removeClass('collapse');
    $container.addClass('active');

    let $content = $(this).parent().find('.accordion-content');
    let height = $content.prop('scrollHeight');
    $content.css('height', height + 'px');

    $('.accordion-item').not($container).each(function() {
        $(this).find('.accordion-content').css('height', 0);
    });
}

// function toggleSection() {
//     let section = this.parentElement.querySelector('.accordion-content');
//     if (section.getAttribute('data-collapsed') == null) {
//         section.setAttribute('data-collapsed', 'true');
//     }

//     let isCollapsed = section.getAttribute('data-collapsed') === 'true'
    
//     if(isCollapsed) {
//         expandSection(section)
//     } else {
//         collapseSection(section)
//     }
// }

// function collapseSection(element) {
//     element.style.height = null;
//     element.setAttribute('data-collapsed', 'true');
// }

// function expandSection(element) {
//     let sectionHeight = element.scrollHeight;
//     element.style.height = sectionHeight + 'px';
//     element.setAttribute('data-collapsed', 'false');
// }