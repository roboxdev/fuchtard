import React from 'react';
import { connect } from 'react-redux';

import { actions as cartActions } from 'reducers/cart';

import { Button } from 'react-toolbox/lib/button';


import styles from 'styles/Checkout.css';


export class CartQuantityButtons extends React.Component {
    render() {
        const {quantity, plusButton, minusButton} = this.props;
        return (
            <div>
                <Button className={styles.quantityButton} onClick={minusButton}>
                    <span className="plusminus">−</span>
                </Button>
                <Button className={styles.quantityButton} disabled={quantity >= 9} onClick={plusButton}>
                    <span className="plusminus">+</span>
                </Button>
            </div>
        )
    }
}


export default connect(
    null,
    (dispatch, props) => ({
        plusButton: () => dispatch(cartActions.plusButton(props.foodItemId)),
        minusButton: () => dispatch(cartActions.minusButton(props.foodItemId)),
    })
)(CartQuantityButtons)
