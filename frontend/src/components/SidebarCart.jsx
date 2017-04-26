import React from 'react';
import { connect } from 'react-redux';

import { minimalOrderRequirementSatisfiedSelector, cartIsEmptySelector } from 'selectors/app';

import { Link, Route } from 'react-router-dom';
import { Button } from 'react-toolbox/lib/button';

import CheckoutHowto from 'components/CheckoutHowto';
import Cart from 'components/Cart';
import GiftsForm from 'components/GiftsForm';

import styles from 'styles/SidebarCart.css';


export class SidebarCart extends React.Component {
    render() {
        const {minimalOrderRequirementSatisfied, cartIsEmpty} = this.props;
        return <div className={styles.wrapper}>
            <Route path="/checkout/" children={
                ({match, ...rest}) =>
                    match
                        ? <CheckoutHowto />
                        : <div>
                        <Cart/>
                        <GiftsForm/>
                        <Link to="/checkout/">
                            <Button
                                primary={true}
                            >
                                Перейти к оформлению
                            </Button>
                        </Link>
                    </div>
            }/>
        </div>    }
}

export default connect(
    state => ({
        minimalOrderRequirementSatisfied: minimalOrderRequirementSatisfiedSelector(state),
        cartIsEmpty: cartIsEmptySelector(state),
    })
)(SidebarCart);
