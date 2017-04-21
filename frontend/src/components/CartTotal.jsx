import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { actions as uiActions } from 'reducers/ui';
import { actions as cartActions } from 'reducers/cart';
import { subtotalSelector } from 'selectors/app';

import { restaurantSettings } from 'config';

import Collapse from 'react-collapse';
import { Card, CardActions, CardText, CardTitle } from 'react-toolbox/lib/card';
import { Button } from 'react-toolbox/lib/button';
import FontIcon from 'react-toolbox/lib/font_icon';


import styles from 'styles/Cart.css';

const {minimalOrderRequirement} = restaurantSettings;

export class CartTotal extends React.Component {
    render() {
        const {cartPrice, clearCart, isExpanded, expandedCartItemToggle} = this.props;
        return (cartPrice > 0) && <Card theme={{card: styles.card}}>
            <div onClick={expandedCartItemToggle}>
            <CardText theme={{cardText: styles.totalCardText}}>
                <span className={styles.foodTitle}>
                    <span>Итого</span>
                </span>
                <span className={cartPrice < minimalOrderRequirement && styles.lessThanMinimalOrder}>{cartPrice}&nbsp;₸</span>
            </CardText>

            </div>
            <Collapse isOpened={isExpanded}>
                <CardActions>
                    <Button primary={true} icon="remove_shopping_cart" onClick={clearCart}/>
                </CardActions>
            </Collapse>
        </Card >
    }
}

export default connect(
    (state, props) => ({
        cartPrice: subtotalSelector(state),
        isExpanded: state.ui.expandedCartItem === 'total',
    }),
    (dispatch, props) => ({
        expandedCartItemToggle: () => dispatch(uiActions.expandedCartItemToggle('total')),
        ...bindActionCreators(cartActions, dispatch),
    })
)(CartTotal)

