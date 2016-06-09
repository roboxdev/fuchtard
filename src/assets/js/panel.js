$('tr[data-href]').on("click", function() {
    document.location = $(this).data('href');
});

$(document).ready(function() {
    if ($('body').hasClass('panel')) {
    }
});