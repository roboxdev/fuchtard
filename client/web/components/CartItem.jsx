import React from 'react';
import { connect } from 'react-redux';
import { actions as uiActions } from 'core/reducers/ui';

import Collapse from 'react-collapse';
import { Card, CardActions, CardText } from 'react-toolbox/lib/card';

import CartQuantityButtons from './CartQuantityButtons';


import styles from 'styles/Cart.css';


export class CartItem extends React.Component {
    static defaultProps = {
        foodItem: {},
    };

    render() {
        const {foodItemId, foodItem, quantity, isExpanded, expandedCartItemToggle} = this.props;
        return <Card>
            <div onClick={expandedCartItemToggle}>

            <CardText theme={{cardText: styles.cardText}}>
                <span className={styles.foodTitle}>
                    <span>{quantity}</span>
                    <span> × </span>
                    <span>{foodItem.title}</span>
                </span>
                <span>{foodItem.price * quantity}&nbsp;₸</span>
            </CardText>
            </div>
            <Collapse isOpened={isExpanded}>
                <CardActions>
                    <CartQuantityButtons
                        foodItemId={foodItemId}
                        quantity={quantity}
                        foodItemTitle={foodItem.title}
                    />
                </CardActions>
            </Collapse>
        </Card >

    }
}


export default connect(
    (state, props) => ({
        isExpanded: state.ui.expandedCartItem === props.foodItemId,
    }),
    (dispatch, props) => ({
        expandedCartItemToggle: () => dispatch(uiActions.expandedCartItemToggle(props.foodItemId))
    })
)(CartItem)
