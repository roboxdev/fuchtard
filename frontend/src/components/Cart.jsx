import React from 'react';
import { connect } from 'react-redux';

import { cartOrderingSelector } from 'selectors/app';

import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup'

import CartItem from 'components/CartItem';
import CartTotal from 'components/CartTotal';
import 'styles/Cart.css';

import styles from 'styles/Cart.css';

export class Cart extends React.Component {
    static defaultProps = {
        cart: [],
    };

    render() {
        const {cart} = this.props;
        return <div>
            <CSSTransitionGroup
                transitionName={{
                    enter: styles.slideAnimationEnter,
                    enterActive: styles.slideAnimationEnterActive,
                    leave: styles.slideAnimationLeave,
                    leaveActive: styles.slideAnimationLeaveActive,
                }}
                transitionEnterTimeout={1000}
                transitionLeaveTimeout={1000}>
                {cart.map((foodItemId) =>
                    <div
                        className={styles.cartItemAnimationWrapper}
                        key={foodItemId}
                    >

                        <CartItem
                            foodItemId={+foodItemId}
                        />
                    </div>
                )}
                <CartTotal/>
            </CSSTransitionGroup>
        </div>

    }
}

export default connect(
    state => ({
        cart: cartOrderingSelector(state),
    }),
)(Cart)
