import React from 'react';
import {connect} from 'react-redux';

import * as actions from 'actions/app';


class GiftsForm extends React.Component {
    render() {
        return <div>
            GIFTS:
            {this.props.gifts.map((gift, index) => {
                const foodItem = gift.food_item;
                const disabled = this.props.cartPrice < gift.requirement;
                return <div key={index}>
                    <input
                        type="radio"
                        name="gift"
                        value={gift.id}
                        onChange={(e) => this.props.updateOrderField('gift', e.currentTarget.value, false)}
                        disabled={disabled}
                    />
                    <span>{foodItem.title}</span>
                    <span>{gift.requirement}</span>
                </div>
            })}
        </div>
    }
}

@connect(
    state => ({
        gifts: state.gifts,
        order: state.order,
    }),
    dispatch => ({
        updateOrderField: (field, value, address) => dispatch(actions.updateOrderField(field, value, address)),
    })
)
export class OrderForm extends React.Component {
    render() {
        const {order, updateOrderField} = this.props;
        const updateOrder = (field, e) => updateOrderField(field, e.target.value, false);
        const updateAddress = (field, e) => updateOrderField(field, e.target.value, true);
        return <div>
            <GiftsForm gifts={this.props.gifts} cartPrice={this.props.cartPrice} updateOrderField={updateOrderField}/>

            Order Form
            <div>Имя
                <input onChange={e => updateOrder('name', e)} value={order.name}/>
            </div>
            <div>email
                <input onChange={e => updateOrder('email', e)} value={order.email}/>
            </div>
            <div>телефон
                <input onChange={e => updateOrder('phone', e)} value={order.phone}/>
            </div>
            <div>Улица
                <input onChange={e => updateAddress('street', e)} value={order.street}/>
            </div>
            <div>Номер дома
                <input onChange={e => updateAddress('apartment', e)} value={order.apartment}/>
            </div>
            <div>квартира
                <input onChange={e => updateAddress('building', e)} value={order.building}/>
            </div>
            <div>этаж
                <input onChange={e => updateAddress('floor', e)} value={order.floor}/>
            </div>
            <div>комментарий
                <input onChange={e => updateOrder('comment', e)} value={order.comment}/>
            </div>
        </div>
    }
}
