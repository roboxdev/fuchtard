import React from 'react';
import { connect } from 'react-redux';

import { minimalOrderRequirementSatisfiedSelector, cartIsEmptySelector } from 'selectors/app';

import Cart from 'components/Cart';
import GiftsForm from 'components/GiftsForm';
import OrderForm from 'components/OrderForm';

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
