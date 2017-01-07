import React from 'react';
import {connect} from 'react-redux';

import * as actions from '../actions/app';

class FoodItem extends React.Component {
    render() {
        const food = this.props.food;
        const foodId = food.get('id');
        const cartItem = this.props.cart.get(foodId);
        const quantity = cartItem ? cartItem.get('quantity'): 0;
        return (
            <div>
                {food.get('title')}
                <button onClick={() => this.props.plusButton(food, quantity)}>+</button>
                <span>{quantity}</span>
                <button onClick={() => this.props.minusButton(food, quantity)}>-</button>
            </div>
        )
    }
}

export const ConnectedFoodItem = connect(
    function mapStateToProps(state) {
        return {
            cart: state.get('cart'),
        }
    },
    function mapDispatchToProps(dispatch) {
        return {
            plusButton: (foodItem, quantity) => dispatch(actions.plusButton(foodItem, quantity)),
            minusButton: (foodItem, quantity) => dispatch(actions.minusButton(foodItem, quantity)),
        }
    }
)(FoodItem);