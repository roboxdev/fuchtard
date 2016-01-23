$('.with-hidden-fields input[type=radio]').change(function() {
    var radiobutton = $(this);
    var hidden_fields = radiobutton.parents('.with-hidden-fields').find('.collapse');
    if (radiobutton.hasClass('expand-hidden-fields')) {
        hidden_fields.collapse('show');
    } else {
        hidden_fields.collapse('hide');
    }
});

$('#input_phone_new').mask('+7 999 999-99-99');

$('#order_form').submit(function() {

});