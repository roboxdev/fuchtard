import React from 'react';
import GiftsForm from 'components/gifts';
import Cart from 'components/cart';
import OrderForm from 'components/order';

import styles from '../styles/checkout.css';

class Checkout extends React.Component {
    render() {
        return (
            <div  styleName="styles.wrapper">
                <Cart/>
                <GiftsForm/>
                <OrderForm/>
            </div>
        )
    }
}

export default Checkout;