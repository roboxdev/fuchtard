$('tr[data-href]').on("click", function() {
    document.location = $(this).data('href');
});