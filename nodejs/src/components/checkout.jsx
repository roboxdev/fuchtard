import React from 'react';
import {Cart} from 'components/cart';
import {OrderForm} from 'components/order';

export class Checkout extends React.Component {
    render() {
        return (
            <div>
                <Cart/>
                <OrderForm/>
            </div>
        )
    }
}