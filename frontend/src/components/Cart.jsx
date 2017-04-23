import React from 'react';
import { connect } from 'react-redux';

import { cartOrderingSelector } from 'selectors/app';

import CartItem from 'components/CartItem';
import CartTotal from 'components/CartTotal';


export class Cart extends React.Component {
    render() {
        const {cart} = this.props;
        return <div>
            {cart.map((foodItemId) =>
                <CartItem
                    key={foodItemId}
                    foodItemId={+foodItemId}
                />
            )}
            <CartTotal/>
        </div>

    }
}

export default connect(
    state => ({
        cart: cartOrderingSelector(state),
    }),
)(Cart)
