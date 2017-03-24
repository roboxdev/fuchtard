import React from 'react';
import {connect} from 'react-redux';

import * as actions from 'actions/app';

import Input from 'react-toolbox/lib/input';
import {Button} from 'react-toolbox/lib/button';
import styles from '../styles/checkout.css';
import buttonStyles from '../styles/order-button.css';


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
        const {address} = order;
        const updateOrder = (field, value) => updateOrderField(field, value, false);
        const updateAddress = (field, value) => updateOrderField(field, value, true);
        return <div styleName="styles.wrapper">
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
            />
            <Input value={order.phone}
                   onChange={value => updateOrder('phone', value)}
                   type='tel'
                   name='phone'
                   label='Телефон'
            />
            <Input value={address.street}
                   onChange={value => updateAddress('street', value)}
                   type='text'
                   name='street'
                   label='Улица'
            />
            <Input value={address.building}
                   onChange={value => updateAddress('building', value)}
                   type='text'
                   name='building'
                   label='Номер дома'
            />
            <Input value={address.apartment}
                   onChange={value => updateAddress('apartment', value)}
                   type='text'
                   name='apartment'
                   label='Квартира'
            />
            <Input value={address.floor}
                   onChange={value => updateAddress('floor', value)}
                   type='number'
                   name='floor'
                   label='Этаж'
            />
            <Input value={order.comment}
                   onChange={value => updateOrder('comment', value)}
                   type='text'
                   label='Комментарий'
                   multiline={true}
                   rows={2}
            />
            <Button theme={buttonStyles} onClick={this.props.placeOrder} raised primary>Заказать</Button>
        </div>
    }
}
