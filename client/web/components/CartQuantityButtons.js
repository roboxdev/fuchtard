import React from 'react';
import { connect } from 'react-redux';

import { actions as cartActions } from 'core/reducers/cart';

import { Button } from 'react-toolbox/lib/button';


import styles from 'styles/Cart.css';


export class CartQuantityButtons extends React.Component {
    render() {
        const {quantity, plusButton, minusButton} = this.props;
        return (
            <div className={styles.quantityButtons}>
                <Button
                    className={styles.quantityButton}
                    primary={true}
                    onClick={minusButton}
                >
                    <span className={styles.plusminus}>−</span>
                </Button>
                <Button
                    className={styles.quantityButton}
                    disabled={quantity >= 9}
                    primary={true}
                    onClick={plusButton}
                >
                    <span className={styles.plusminus}>+</span>
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
