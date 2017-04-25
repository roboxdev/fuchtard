import React from 'react';
import { connect } from 'react-redux';
import { minimalOrderRequirementSatisfiedSelector, subtotalSelector } from 'selectors/app';

import { Redirect } from 'react-router';

import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup'
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
                <div>Корзина</div>
                <div>
                    <CSSTransitionGroup
                        transitionName={{
                            enter: styles.animationEnter,
                            enterActive: styles.animationEnterActive,
                            leave: styles.animationLeave,
                            leaveActive: styles.animationLeaveActive,
                        }}
                        transitionEnterTimeout={1000}
                        transitionLeaveTimeout={1000}>
                        {cartIsEmpty
                            ? <div className={styles.animationWrapper}>
                                <CheckoutHowto key={cartIsEmpty}/>
                            </div>
                            : []
                        }
                    </CSSTransitionGroup>
                    <Cart/>
                </div>
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
            {matches => matches
                ? <CheckoutConnected/>
                : <Redirect to={'/'}/>
            }
        </MediaQuery>
    }
}


export default CheckoutConnected;
