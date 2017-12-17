import React from 'react';
import { connect } from 'react-redux';

import { minimalOrderRequirementSatisfiedSelector, cartIsEmptySelector } from 'core/selectors/app';

import Cart from './Cart';
import GiftsForm from './GiftsForm';
import OrderForm from './OrderForm';

import styles from 'styles/CheckoutPage.css';


export class CheckoutPage extends React.Component {
    render() {
        const {minimalOrderRequirementSatisfied, cartIsEmpty} = this.props;
        return <div className={styles.wrapper}>
            <Cart/>
            <GiftsForm/>
            <OrderForm/>
        </div>
    }
}

export default connect(
    state => ({
        minimalOrderRequirementSatisfied: minimalOrderRequirementSatisfiedSelector(state),
        cartIsEmpty: cartIsEmptySelector(state),
    })
)(CheckoutPage);
