import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { actions as cartActions } from 'reducers/cart';
import { subtotalSelector } from 'selectors/app';

import { Card } from 'react-toolbox/lib/card';
import { Button } from 'react-toolbox/lib/button';
import FontIcon from 'react-toolbox/lib/font_icon';

import styles from 'styles/Checkout';
import cardStyles from 'styles/cart-card';


export class CartTotal extends React.Component {
    render() {
        const {cartPrice, clearCart} = this.props;
        return <Card theme={cardStyles}>
            <Button icon="remove_shopping_cart" onClick={clearCart}/>
            <div className={styles.foodTitle}>
                Итого
            </div>
            <p>{cartPrice}₸</p>
        </Card >
    }
}

export default connect(
    state => ({
        cartPrice: subtotalSelector(state),
    }),
    dispatch => ({
        ...bindActionCreators(cartActions, dispatch),
    })
)(CartTotal)

