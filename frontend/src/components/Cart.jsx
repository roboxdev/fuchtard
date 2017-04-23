import React from 'react';
import { connect } from 'react-redux';

import { cartSelector } from 'selectors/app';

import CartItem from 'components/CartItem';
import CartTotal from 'components/CartTotal';


export class Cart extends React.Component {
    render() {
        const {cart} = this.props;
        return <div>
            {Object.keys(cart).map((foodItemId) =>
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
        cart: cartSelector(state),
    }),
)(Cart)
