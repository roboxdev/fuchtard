import React from 'react';
import {GiftsForm} from 'components/gifts';
import {Cart} from 'components/cart';
import {OrderForm} from 'components/order';

export class Checkout extends React.Component {
    render() {
        return (
            <div>
                <Cart/>
                <GiftsForm/>
                <OrderForm/>
            </div>
        )
    }
}