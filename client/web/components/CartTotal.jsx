import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { actions as uiActions } from 'core/reducers/ui';
import { actions as cartActions } from 'core/reducers/cart';
import { subtotalSelector, minimalOrderRequirementSatisfiedSelector } from 'core/selectors/app';

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
        return <Card>
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
            {cartSubtotal > 0 &&
            <Collapse isOpened={isExpanded}>
                <CardActions>
                    <div className={styles.quantityButtons}>
                        <Button primary={true} icon="remove_shopping_cart" onClick={clearCart}/>
                    </div>
                </CardActions>
            </Collapse>
            }
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

