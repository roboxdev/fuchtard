import React from 'react';
import GiftsForm from 'components/GiftsForm';
import Cart from 'components/Cart';
import OrderForm from 'components/OrderForm';

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