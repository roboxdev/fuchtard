import React from 'react';
import {connect} from 'react-redux';
import {fromJS} from 'immutable';

import * as actions from '../actions/app';

class CartItem extends React.Component {
    render() {
        const cartItem = this.props.cartItem;
        const foodItem = cartItem.get('foodItem');
        return (
            <div>
                {foodItem.get('title')}
                <button onClick={() => this.props.plusButton(foodItem, cartItem.get('quantity'))}>+</button>
                <span>{cartItem.get('quantity')}</span>
                <button onClick={() => this.props.minusButton(foodItem, cartItem.get('quantity'))}>-</button>
            </div>

        )
    }
}


class GiftsForm extends React.Component {
    render() {
        return <div>
            GIFTS:
            {this.props.gifts.map((gift, index) => {
                const foodItem = gift.get('food_item');
                const disabled = this.props.cartPrice < gift.get('requirement');
                return <div><input key={index} type="radio" name="gift" value={gift.get('id')} disabled={disabled}/>
                    <span>{foodItem.get('title')}</span>
                    <span>{gift.get('requirement')}</span>
                </div>
            })}
        </div>
    }
}


class OrderForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            orderFields: fromJS({
                name: '',
                email: '',
                phone: '',
                address: {
                    street: '',
                    apartment: '',
                    building: '',
                    floor: 0,
                },
                comment: '',
            }
)        }
    }

    render() {
        const orderFields = this.state.orderFields;
        const updateOrderField = (e, field) => {this.setState({orderFields: this.state.orderFields.set(field, e.target.value)})};
        const updateAddressField = (e, field) => {this.setState({orderFields: this.state.orderFields.setIn(['address', field], e.target.value)})

        };
        return <div>
            <GiftsForm gifts={this.props.gifts} cartPrice={this.props.cartPrice} />

            Order Form
            <div>Имя<input onChange={e => updateOrderField(e, 'name')} value={orderFields.name}/></div>
            <div>email<input onChange={e => updateOrderField(e, 'email')} value={orderFields.email}/></div>
            <div>телефон<input onChange={e => updateOrderField(e, 'phone')} value={orderFields.phone}/></div>
            <div>Улица<input onChange={e => updateAddressField(e, 'street')} value={orderFields.street}/></div>
            <div>Номер дома<input onChange={e => updateAddressField(e, 'apartment')} value={orderFields.apartment}/></div>
            <div>квартира<input onChange={e => updateAddressField(e, 'building')} value={orderFields.building}/></div>
            <div>этаж<input onChange={e => updateAddressField(e, 'floor')} value={orderFields.floor}/></div>
            <div>комментарий<input onChange={e => updateOrderField(e, 'comment')} value={orderFields.comment}/></div>
        </div>
    }
}


class Cart extends React.Component {
    render() {
        const cart = this.props.cart;
        return (
            <div>
                CART:
                {cart.map(
                    (cartItem, index) =>
                        <CartItem
                            key={cartItem.get('id')}
                            cartItem={cartItem}
                            plusButton={this.props.plusButton}
                            minusButton={this.props.minusButton}
                        />
                )}
                <div><OrderForm gifts={this.props.gifts} cartPrice={this.props.cartPrice} /></div>
                <div>
                    <span>TOTAL: {this.props.cartPrice}</span>
                <button>PROCEED</button>
                </div>
            </div>
        )
    }
}

export const ConnectedCart = connect(
    function mapStateToProps(state) {
        return {
            cart: state.get('cart'),
            cartPrice: state.get('cartPrice'),
            gifts: state.get('gifts'),
        }
    },
    function mapDispatchToProps(dispatch) {
        return {
            plusButton: (foodItemId, quantity) => dispatch(actions.plusButton(foodItemId, quantity)),
            minusButton: (foodItemId, quantity) => dispatch(actions.minusButton(foodItemId, quantity)),
        }
    }
)(Cart);