class Cart {
    constructor() {
        this.content = {
            '5': 1,
            '4': 2,
            '2': 3,
            '3': 3,
            '6': 3,
            '7': 3,
            '1': 3,
        };
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
}

var cart = new Cart;


function cart_overlay_button(this_button) {
    var button = $(this_button);
    if (!(button.hasClass('toggled'))) {
        console.log('show_cart_overlay');
        button.addClass('toggled');
        $('#cart-overlay').show();
        button.find('i').html('restaurant_menu');
    } else {
        console.log('hide_cart_overlay');
        button.removeClass('toggled');
        $('#cart-overlay').hide();
        button.find('i').html('shopping_cart');
    }
}

function update_quantity_button(this_button) {
    var button = $(this_button);
    var food_id = button.parents('.food-item').data('food-id');
    var quantity = 0;
    if (button.hasClass('quantity-increase'))
        quantity = cart.add_to_cart(food_id);
    //    TODO: animate FAB
    else if (button.hasClass('quantity-decrease'))
        quantity = cart.remove_from_cart(food_id);

    update_quantity_in_menu_and_cart(food_id, quantity);
}

function update_quantity_in_menu_and_cart(food_id, quantity) {
    update_quantity_in_cart(food_id, quantity);
    update_quantity_in_menu(food_id, quantity);
    console.log('update_quantity', food_id, quantity);
}

function update_quantity_in_cart(food_id, quantity) {
    var cart_overlay = $('#cart-overlay');
    var cart_item = cart_overlay.find(`.cart-item[data-food-id='${food_id}']`);
    var food_item = $(`.food-item[data-food-id='${food_id}']`);
    var food_title = food_item.data('food-title');
    var food_price = food_item.data('food-price');
    var cart_item_total_price = food_price * quantity;
    if (cart_item.length) {
        if (quantity == 0) {
            cart_item.remove();
        } else {
            cart_item.find('.food-price').html(cart_item_total_price);

            if (quantity == 1) {
                // bin counter plus
            } else if (quantity >= 10) {
                // minus counter plus_disabled
            } else {
                // minus counter plus
            }
        }


        food_item.find('.quantity-counter').html(quantity);
    } else if (quantity) {
        cart_overlay.find('.list-group').append(
            `
            <div class="list-group-item cart-item food-item" data-food-id="${food_id}">
              <div class="row-content">
                <h4 class="list-group-item-heading food-title">${food_title}</h4>
                <div class="least-content food-price">${cart_item_total_price} 〒</div>
              </div>
              <div class="row">
                <div class="pull-right">
                  <div class="quantity-buttons btn-group btn-group-justified btn-group-raised">
                    <a href="javascript:void(0)" onclick="update_quantity_button(this)"
                       class="btn btn-primary quantity-decrease">-
                      <div class="ripple-container"></div>
                    </a>
                    <a href="javascript:void(0)" class="btn quantity-counter">${quantity}</a>
                    <a href="javascript:void(0)" onclick="update_quantity_button(this)"
                       class="btn btn-primary quantity-increase"><i class="material-icons">add_shopping_cart</i>
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
    if (quantity == 0) {
        // plus_cart
    } else if (quantity == 1) {
        // bin counter plus
    } else if (quantity >= 10) {
        // minus counter plus_disabled
    } else {
        // minus counter plus
    }
    $(`.food-item[data-food-id='${food_id}']`).find('.quantity-counter').html(quantity);
}

function checkout_button(this_button) {
    var action = $(this_button).data('action');
    var data = cart.content;
    $.post(action,
        data,
        function () {

        });
}

function load_cart() {
    $.each(cart.content, function(index, value) {
        update_quantity_in_menu_and_cart(index, value);
    })
}

load_cart();
