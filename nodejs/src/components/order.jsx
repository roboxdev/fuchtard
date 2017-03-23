import React from 'react';
import {connect} from 'react-redux';

import * as actions from 'actions/app';

import Input from 'react-toolbox/lib/input';


@connect(
    state => ({
        order: state.order,
    }),
    dispatch => ({
        updateOrderField: (field, value, address) => dispatch(actions.updateOrderField(field, value, address)),
        placeOrder: () => dispatch(actions.placeOrder()),
    })
)
export class OrderForm extends React.Component {
    render() {
        const {order, updateOrderField} = this.props;
        const updateOrder = (field, value) => updateOrderField(field, value, false);
        const updateAddress = (field, value) => updateOrderField(field, value, true);
        return <div>
            Order Form
            <Input value={order.name}
                   onChange={value => updateOrder('name', value)}
                   type='text'
                   name='name'
                   label='Имя'
                   maxLength={16}
            />
            <Input value={order.email}
                   onChange={value => updateOrder('email', value)}
                   type='email'
                   label='Email'
                   icon='email'
            />
            <Input value={order.phone}
                   onChange={value => updateOrder('phone', value)}
                   type='tel'
                   name='phone'
                   label='Телефон'
                   icon='phone'
            />
            <Input value={order.street}
                   onChange={value => updateAddress('street', value)}
                   type='text'
                   name='street'
                   label='Улица'
            />
            <Input value={order.building}
                   onChange={value => updateAddress('building', value)}
                   type='text'
                   name='building'
                   label='Номер дома'
            />
            <Input value={order.apartment}
                   onChange={value => updateAddress('apartment', value)}
                   type='text'
                   name='apartment'
                   label='Квартира'
            />
            <Input value={order.floor}
                   onChange={value => updateAddress('floor', value)}
                   type='text'
                   name='floor'
                   label='Этаж'
            />
            <Input value={order.comment}
                   onChange={value => updateOrder('comment', value)}
                   type='text'
                   label='Комментарий'
                   multiline={true}
            />
            <button onClick={this.props.placeOrder}>PROCEED</button>
        </div>
    }
}
