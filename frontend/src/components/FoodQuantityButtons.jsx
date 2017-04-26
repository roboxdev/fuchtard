import React from 'react';
import { connect } from 'react-redux';

import { actions as cartActions } from 'reducers/cart';
import { getQuantityByFoodId } from 'selectors/app';

import { Button } from 'react-toolbox/lib/button';
import FontIcon from 'react-toolbox/lib/font_icon';

import styles from 'styles/FoodItem.css';


export class FoodQuantityButtons extends React.Component {
    render() {
        const {quantity, plusButton, minusButton} = this.props;
        return (
            <div className={styles.foodQuantityButtons}>
                <div>
                    {quantity >= 1 &&
                        <Button icon='shopping_cart' label={`${quantity}`} flat disabled />
                    }
                </div>
                <div>
                    {quantity >= 1 &&
                    <Button
                        // raised={true}
                        primary={true}
                        onClick={minusButton}
                    >
                        <span className={styles.plusminus}>−</span>
                    </Button>
                    }
                    <Button
                        // raised={true}
                        primary={true}
                        disabled={quantity >= 9}
                        onClick={plusButton}
                    >
                        {!quantity || quantity < 1
                            ? <FontIcon value="add_shopping_cart"/>
                            : <span className={styles.plusminus}>+</span>}
                    </Button>
                </div>
            </div>
        )
    }
}


export default connect(
    (state, props) => ({
        quantity: getQuantityByFoodId(state, props),
    }),
    (dispatch, props) => ({
        plusButton: () => dispatch(cartActions.plusButton(props.foodItemId)),
        minusButton: () => dispatch(cartActions.minusButton(props.foodItemId, false)),
    })
)(FoodQuantityButtons);