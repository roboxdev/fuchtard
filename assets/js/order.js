$(document).ready(function() {
    if ($('body').hasClass(' order-checkout')) {
        $('#order_form').submit(order_form_submit);
        $('#id_phone').mask('+7 999 999-99-99');
    }
});


$('.with-hidden-fields input[type=radio]').change(function() {
    var radiobutton = $(this);
    var hidden_fields = radiobutton.parents('.with-hidden-fields').find('.collapse');
    if (radiobutton.hasClass('expand-hidden-fields')) {
        hidden_fields.collapse('show');
    } else {
        hidden_fields.collapse('hide');
    }
});


function order_form_submit() {
    var address = $("<input type='hidden' name='address'/>");
    var address_obj = JSON.stringify({
        'street': $('#input_street').val(),
        'building': $('#input_building').val(),
        'apartment': $('#input_apartment').val(),
        'floor': $('#input_floor').val(),
    });

    $(this).find('button[type=submit]').button('loading');
    address.val(address_obj);
    $(this).append(address);
    //console.log(data);
    return true;

}