import React from 'react';
import {connect} from 'react-redux';

import * as actions from '../actions/app';


class GiftsForm extends React.Component {
    render() {
        return <div>
            GIFTS:
            {this.props.gifts.map((gift, index) => {
                const foodItem = gift.get('food_item');
                const disabled = this.props.cartPrice < gift.get('requirement');
                return <div key={index}>
                    <input
                        type="radio"
                        name="gift"
                        value={gift.get('id')}
                        onChange={(e) => this.props.updateOrderField('gift', e.currentTarget.value, false)}
                        disabled={disabled}
                    />
                    <span>{foodItem.get('title')}</span>
                    <span>{gift.get('requirement')}</span>
                </div>
            })}
        </div>
    }
}


class OrderForm extends React.Component {
    render() {
        const {order, updateOrderField} = this.props;
        const updateOrder = (field, e) => updateOrderField(field, e.target.value, false);
        const updateAddress = (field, e) => updateOrderField(field, e.target.value, true);
        return <div>
            <GiftsForm gifts={this.props.gifts} cartPrice={this.props.cartPrice} updateOrderField={updateOrderField} />

            Order Form
            <div>Имя
                <input onChange={e => updateOrder('name', e)} value={order.get('name')}/>
            </div>
            <div>email
                <input onChange={e => updateOrder('email', e)} value={order.get('email')}/>
            </div>
            <div>телефон
                <input onChange={e => updateOrder('phone', e)} value={order.get('phone')}/>
            </div>
            <div>Улица
                <input onChange={e => updateAddress('street', e)} value={order.get('street')}/>
            </div>
            <div>Номер дома
                <input onChange={e => updateAddress('apartment', e)} value={order.get('apartment')}/>
            </div>
            <div>квартира
                <input onChange={e => updateAddress('building', e)} value={order.get('building')}/>
            </div>
            <div>этаж
                <input onChange={e => updateAddress('floor', e)} value={order.get('floor')}/>
            </div>
            <div>комментарий
                <input onChange={e => updateOrder('comment', e)} value={order.get('comment')}/>
            </div>
        </div>
    }
}


export const ConnectedOrderForm = connect(
    function mapStateToProps(state) {
        return {
            cartPrice: state.get('cartPrice'),
            gifts: state.get('gifts'),
            order: state.get('order'),
        }
    },
    function mapDispatchToProps(dispatch) {
        return {
            updateOrderField: (field, value, address) => dispatch(actions.updateOrderField(field, value, address)),
        }
    }
)(OrderForm);