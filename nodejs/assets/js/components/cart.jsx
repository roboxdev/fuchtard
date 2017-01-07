import React from 'react';

export class Cart extends React.Component {
    render() {
        return (
                        <div id="cart-overlay" data-preloaded-cart="{{ cart.json_repr }}" className="hidden">
        <div className="fade-overlay" />
        <div className="container">
          <div className="row">
            <div className="col-sm-6 col-lg-4 center-block">
              <div className="cart-overlay-inner panel panel-primary">
                <div className="panel-heading">
                  <h3 className="panel-title">Корзина</h3>
                </div>
                <div className="panel-body">
                  <div className="cart-items-container" />
                </div>
                {'{'}% with view.get_gifts as gifts %{'}'}
                {'{'}% if gifts.exists %{'}'}
                <div className="panel-footer">
                  <div className="gifts_info">
                    <p>Сделай заказ на указанную сумму и&nbsp;получи подарок</p>
                    <div className="gifts_list">
                      {'{'}% for gift in view.get_gifts %{'}'}
                      <p data-gift-requirement="{{ gift.requirement }}">{'{'}{'{'} gift.requirement {'}'}{'}'} 〒 — {'{'}{'{'} gift.food_item.title {'}'}{'}'}</p>
                      {'{'}% endfor %{'}'}
                    </div>
                  </div>
                </div>
                {'{'}% endif %{'}'}
                {'{'}% endwith %{'}'}
              </div>
            </div>
          </div>
        </div>
      </div>

        )
    }
}