import React from 'react';
import { connect } from 'react-redux';
import { minimalOrderRequirementSatisfiedSelector, subtotalSelector } from 'selectors/app';

import { Redirect } from 'react-router';

import Cart from 'components/Cart';
import GiftsForm from 'components/GiftsForm';
import OrderForm from 'components/OrderForm';


import styles from 'styles/Checkout.css';

export class Checkout extends React.Component {
    render() {
        const {minimalOrderRequirementSatisfied, cartSubtotal} = this.props;
        const cartIsEmpty = !(cartSubtotal > 0);
        return <div>
            <Cart/>
            {minimalOrderRequirementSatisfied && <GiftsForm/>}
        </div>

    }
}


const CheckoutConnected = connect(
    state => ({
        minimalOrderRequirementSatisfied: minimalOrderRequirementSatisfiedSelector(state),
        cartSubtotal: subtotalSelector(state),
    })
)(Checkout);


export class CheckoutPage extends React.Component {
    render() {
        return <div className={styles.wrapper}>
                <CheckoutConnected/>
                <OrderForm/>
            </div>
    }
}


export default CheckoutConnected;
