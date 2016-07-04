class Cart {
    constructor() {
        this.content = {};
    }

    add_to_cart(food_item_id) {
        if (!(food_item_id in this.content)) {
            this.content[food_item_id] = 1;
        } else {
            this.content[food_item_id]++;
        }
        return this.content[food_item_id];
    }

    remove_from_cart(food_item_id) {
        if (food_item_id in this.content) {
            this.content[food_item_id]--;
            if (this.content[food_item_id] == 0) {
                delete this.content[food_item_id];
                return 0
            } else {
                return this.content[food_item_id];
            }
        }
    }

    get_total_price() {
        var total_price = 0;
        $.each(this.content, function (food_item_id, food_item_quantity) {
            var food_item = $(`.food-menu .food-item[data-food-id='${food_item_id}']`);
            var food_price = parseInt(food_item.data('food-price'));
            total_price += food_price * food_item_quantity;
        });
        return total_price;
    }
}

var cart = new Cart;


function set_same_height_for_food_Items() {
    $(function () {
        $('.food-menu .food-item').matchHeight();
    });
}


function cart_overlay_show() {
    $('#cart-overlay').removeClass('hidden');
}

function cart_overlay_hide() {
    $('#cart-overlay').addClass('hidden');
}


function cart_overlay_button() {
    if ($('#cart-overlay').hasClass('hidden')) {
        cart_overlay_show();
    } else {
        cart_overlay_hide();
    }
}


function hide_cart_overlay_if_cart_is_empty() {
    if ($.isEmptyObject(cart.content)) {
        cart_overlay_hide();
    }
}


function update_quantity_button(event) {
    event.preventDefault();
    var button = $(this);
    var food_id = button.parents('.food-item').data('food-id');
    var quantity = 0;
    if (button.hasClass('quantity-increase')) {
        quantity = cart.add_to_cart(food_id);
    }
    else if (button.hasClass('quantity-decrease'))
        quantity = cart.remove_from_cart(food_id);

    update_everything_with_new_price(food_id, quantity);
}


function update_everything_with_new_price(food_id, quantity) {
    hide_cart_overlay_if_cart_is_empty();
    hide_sticky_bar_if_cart_is_empty();
    update_quantity_in_cart(food_id, quantity);
    update_quantity_in_menu(food_id, quantity);
    update_cart_total_price();
    update_available_gifts();
    disable_submit_button_if_cheap_order();
}


function disable_submit_button_if_cheap_order() {
    var button = $("#cart_form_submit_button");
    if (cart.get_total_price() < 3000) {
        button.attr('disabled', 'true')
    } else {
        button.removeAttr('disabled')
    }
}


function hide_sticky_bar_if_cart_is_empty() {
    // if ($.isEmptyObject(cart.content)) {
    //     $('.sticky_bar').addClass('hidden');
    // } else {
    //     $('.sticky_bar').removeClass('hidden');
    // }
}


function update_quantity_in_cart(food_id, quantity) {
    var cart_overlay = $('#cart-overlay');
    var cart_item = cart_overlay.find(`.cart-item[data-food-id='${food_id}']`);
    var food_item = $(`.food-menu .food-item[data-food-id='${food_id}']`);
    var food_title = food_item.data('food-title');
    var food_price = parseInt(food_item.data('food-price'));
    var cart_item_total_price = food_price * quantity;

    var quantity_decrease_button = cart_item.find('.quantity-decrease');
    var quantity_counter = cart_item.find('.quantity-counter');

    if (cart_item.length) {
        if (quantity == 0) {
            cart_item.remove();
        } else {
            cart_item.find('.food-price').html(cart_item_total_price);
            quantity_decrease_button.html('-');
            if (quantity == 1) {
                quantity_decrease_button.html('<i class="material-icons">cancel</i>');
            }
        }


        quantity_counter.html(quantity);
    } else if (quantity) {
        cart_overlay.find('.cart-items-container').append(
            `
                <div class="cart-item food-item" data-food-id="${food_id}">
                  <div class="row">
                    <div class="col-xs-8">
                      <span>${food_title}</span><span> × </span><span class="quantity-counter">0</span>
                      <div class="food-price">${cart_item_total_price} 〒</div>
                    </div>
                    <div class="col-xs-4">
                      <div class="quantity-buttons btn-group btn-group-justified btn-group-raised">
                        <a href="#" class="btn btn-primary quantity-button quantity-decrease">
                          -
                          <div class="ripple-container"></div>
                        </a>
                        
                        <a href="#" class="btn btn-primary quantity-button quantity-increase">
                          +
                          <div class="ripple-container"></div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
            `
        );
        update_quantity_in_cart(food_id, quantity)
    }
}

function update_quantity_in_menu(food_id, quantity) {
    var menu_item = $(`.food-menu .food-item[data-food-id=${food_id}]`);
    var quantity_decrease_button = menu_item.find('.quantity-decrease');
    var quantity_counter = menu_item.find('.quantity-counter');
    var quantity_increase_button = menu_item.find('.quantity-increase');

    menu_item.find('.quantity-decrease, .quantity-counter').toggleClass('invisible', quantity == 0);

    if (quantity == 0) {
        quantity_increase_button.html('<i class="material-icons">add_shopping_cart</i>');
    } else {
        quantity_decrease_button.html('-');
        quantity_increase_button.html('+');

        if (quantity == 1) {
            quantity_decrease_button.html('<i class="material-icons">cancel</i>');
        }

    }
    quantity_counter.html(quantity);

}


function update_cart_total_price() {
    $('#cart-total-price').text(cart.get_total_price());
}


function load_cart() {
    var preloaded_cart = $('#cart-overlay').data('preloaded-cart');
    if (preloaded_cart) {
        cart.content = preloaded_cart;
    }
    $.each(cart.content, function (index, value) {
        update_everything_with_new_price(index, value);
    });
}

function scrollspy_misc() {
    $("#navbar-container").on("activate.bs.scrollspy", function () {
        var navbar = $('#navbar-container');
        if (navbar.find(".dropdown-menu li:first-child.active > a").length) {
            $('.scrollbar').addClass('hidden');
            $('#navbar-container').collapse('hide');
        } else {
            $('.scrollbar').removeClass('hidden');
            $("#current_category").empty().html(navbar.find(".dropdown-menu li.active > a").text());
        }
    })
}


function collapse_nav_on_click() {
    $("#navbar-container").find('.dropdown-menu a').on('click', function (event) {
        event.preventDefault();
        var hash = this.hash;
        $('html, body').animate({
            scrollTop: $(hash).offset().top
        }, 400, function () {
            window.location.hash = hash;
        });
    });
}


function cart_form_submit() {
    var data = JSON.stringify(cart.content);
    var cart_data = $("<input type='hidden' name='cart_data'/>");
    cart_data.val(data);
    $(this).append(cart_data);
}

function cart_form_submit_button() {
    var button = $(this);
    if (button.is("[disabled]")) {
        $.snackbar({
            "content": "Минимальная сумма заказа — 3000&nbsp;〒"
        })
    } else {
        button.button('loading');
        $("#cart_form").submit();
    }
}

function switch_collapse_arrows() {
    $('.food-items-container.collapse').on('shown.bs.collapse', function () {
        $(this).parent().find(".collapse-arrow").text('keyboard_arrow_up');
    }).on('hidden.bs.collapse', function () {
        $(this).parent().find(".collapse-arrow").text('keyboard_arrow_down');
    });
}


function update_available_gifts() {
    var available_gifts = $('.available-gifts');
    var btn_fab = available_gifts.parent('.btn-fab');
    var gifts_counter = available_gifts.find('.gifts-counter');
    var gift_icon = available_gifts.find('.gift-icon');
    var breakpoints = available_gifts.data('gift-breakpoints');
    var cart_total_price = cart.get_total_price();
    var available_gift_count = 0;
    var gifts_list = $('#cart-overlay .gifts_list p');

    gifts_list.removeClass('text-success');
    $.each(breakpoints, function (index, value) {
        if (cart_total_price < value) {
            return false; //break
        }
        available_gift_count = ++index;
        gifts_list.filter(`[data-gift-requirement=${value}]`).addClass('text-success');
    });

    btn_fab.toggleClass('btn-success', available_gift_count != 0);
    btn_fab.toggleClass('btn-primary', available_gift_count == 0);
    gift_icon.toggleClass('hidden', available_gift_count > 1);
    gifts_counter.toggleClass('hidden', available_gift_count <= 1);

    gifts_counter.text(available_gift_count);
}

$(document).ready(function () {
    if ($('body').hasClass('food-menu-page')) {
        load_cart();
        switch_collapse_arrows();
        scrollspy_misc();
        collapse_nav_on_click();
        set_same_height_for_food_Items();
        $('#cart-overlay-button, #gift_button').click(cart_overlay_button);
        $('.fade-overlay').click(cart_overlay_hide);
        $('#cart_form').submit(cart_form_submit);
        $('#cart_form_submit_button').click(cart_form_submit_button);
        $(document).on('click', '.quantity-button', update_quantity_button);
    }
});