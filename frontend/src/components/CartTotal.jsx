import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { actions as uiActions } from 'reducers/ui';
import { actions as cartActions } from 'reducers/cart';
import { subtotalSelector, minimalOrderRequirementSatisfiedSelector } from 'selectors/app';

import Collapse from 'react-collapse';
import { Card, CardActions, CardText } from 'react-toolbox/lib/card';
import { Button } from 'react-toolbox/lib/button';

import styles from 'styles/Cart.css';


export class CartTotal extends React.Component {
    render() {
        const {
            cartSubtotal,
            clearCart,
            isExpanded,
            expandedCartItemToggle,
            minimalOrderRequirementSatisfied } = this.props;
        return (cartSubtotal > 0) && <Card theme={{card: styles.card}}>
            <div onClick={expandedCartItemToggle}>
            <CardText theme={{cardText: styles.totalCardText}}>
                <span className={styles.foodTitle}>
                    <span>Итого</span>
                </span>
                <span className={!minimalOrderRequirementSatisfied && styles.lessThanMinimalOrder}>
                    {cartSubtotal}&nbsp;₸
                </span>
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
        cartSubtotal: subtotalSelector(state),
        isExpanded: state.ui.expandedCartItem === 'total',
        minimalOrderRequirementSatisfied: minimalOrderRequirementSatisfiedSelector(state),
    }),
    (dispatch, props) => ({
        expandedCartItemToggle: () => dispatch(uiActions.expandedCartItemToggle('total')),
        ...bindActionCreators(cartActions, dispatch),
    })
)(CartTotal)

