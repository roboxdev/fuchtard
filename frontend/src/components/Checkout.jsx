import React from 'react';
import { connect } from 'react-redux';
import { minimalOrderRequirementSatisfiedSelector, subtotalSelector } from 'selectors/app';

import { Card, CardText } from 'react-toolbox/lib/card';
import Collapse from 'react-collapse';
import MediaQuery from 'react-responsive';

import CheckoutHowto from 'components/CheckoutHowto';
import Cart from 'components/Cart';
import GiftsForm from 'components/GiftsForm';
import OrderForm from 'components/OrderForm';


import styles from 'styles/Checkout.css';

export class Checkout extends React.Component {
    render() {
        const {minimalOrderRequirementSatisfied, cartSubtotal} = this.props;
        const cartIsEmpty = !(cartSubtotal > 0);
        return (
            <div className={styles.wrapper}>
                <Card>
                    <Collapse isOpened={cartIsEmpty}>
                        <CardText>
                            <CheckoutHowto />
                        </CardText>
                    </Collapse>
                </Card>
                <Cart/>
                <Collapse isOpened={minimalOrderRequirementSatisfied}>
                    <GiftsForm/>
                    <OrderForm/>
                </Collapse>
            </div>
        )
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
        return <MediaQuery maxWidth={960}>
            <CheckoutConnected/>
        </MediaQuery>
    }
}


export default CheckoutConnected;
