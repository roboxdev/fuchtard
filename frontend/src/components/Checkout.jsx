import React from 'react';

import MediaQuery from 'react-responsive';

import CheckoutHowto from 'components/CheckoutHowto';
import Cart from 'components/Cart';
import GiftsForm from 'components/GiftsForm';
import OrderForm from 'components/OrderForm';

import styles from 'styles/Checkout.css';

export class Checkout extends React.Component {
    render() {
        return (
            <div className={styles.wrapper}>
                <CheckoutHowto />
                <Cart/>
                <GiftsForm/>
                <OrderForm/>
            </div>
        )
    }
}


export class CheckoutPage extends React.Component {
    render() {
        return <MediaQuery maxWidth={960}>
            <Checkout/>
        </MediaQuery>
    }
}


export default Checkout;