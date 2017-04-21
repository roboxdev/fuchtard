import React from 'react';
import { connect } from 'react-redux';
import { minimalOrderRequirementSatisfiedSelector } from 'selectors/app';

import Collapse from 'react-collapse';
import MediaQuery from 'react-responsive';

import CheckoutHowto from 'components/CheckoutHowto';
import Cart from 'components/Cart';
import GiftsForm from 'components/GiftsForm';
import OrderForm from 'components/OrderForm';

import styles from 'styles/Checkout.css';

export class Checkout extends React.Component {
    render() {
        const {minimalOrderRequirementSatisfied} = this.props;
        return (
            <div className={styles.wrapper}>
                <CheckoutHowto />
                <Cart/>
                <Collapse isOpened={minimalOrderRequirementSatisfied}>
                    <GiftsForm/>
                    <OrderForm/>
                </Collapse>
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


export default connect(
    state => ({
        minimalOrderRequirementSatisfied: minimalOrderRequirementSatisfiedSelector(state),
    })
)(Checkout);