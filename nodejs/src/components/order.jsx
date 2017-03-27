import React from 'react';
import {connect} from 'react-redux';

import * as actions from 'actions/app';

import Input from 'react-toolbox/lib/input';
import {Button} from 'react-toolbox/lib/button';
import styles from '../styles/checkout.css';
import buttonStyles from '../styles/order-button.css';
import inputStyles from '../styles/order-input.css';
import Collapse from 'react-collapse';


@connect(
    state => ({
        order: state.order,
    }),
    dispatch => ({
        updateOrderField: (field, value) => dispatch(actions.updateOrderField(field, value)),
        placeOrder: () => dispatch(actions.placeOrder()),
    })
)
export class OrderForm extends React.Component {
    state = {
        optionalFieldsVisible: false,
    };

    showOptionalFields = () => this.setState({optionalFieldsVisible: true});

    submit = (e) => {
        e.preventDefault();
        this.props.placeOrder();
    }

    render() {
        const {order, updateOrderField} = this.props;
        const updateOrder = (field, value) => updateOrderField(field, value);
        return <div styleName="styles.wrapper">
            <form onSubmit={this.submit}>
                <Input theme={inputStyles}
                       value={order.name}
                       onChange={value => updateOrder('name', value)}
                       type='text'
                       name='name'
                       label='Имя'
                       maxLength={16}
                       required
                />
                <Input theme={inputStyles}
                       value={order.phone}
                       onChange={value => updateOrder('phone', value)}
                       onFocus={this.showOptionalFields}
                       type='tel'
                       name='phone'
                       label='Телефон'
                       required
                />
                <Collapse isOpened={this.state.optionalFieldsVisible}>
                    <div>
                        <p>Следующие поля необязательны. Мы уточним детали по телефону.</p>
                        <Input value={order.email}
                               onChange={value => updateOrder('email', value)}
                               type='email'
                               label='Email'
                        />

                        <Input theme={inputStyles}
                               value={order.street}
                               onChange={value => updateOrder('street', value)}
                               type='text'
                               name='street'
                               label='Улица'
                        />
                        <Input theme={inputStyles}
                               value={order.building}
                               onChange={value => updateOrder('building', value)}
                               type='text'
                               name='building'
                               label='Номер дома'
                        />
                        <Input theme={inputStyles}
                               value={order.apartment}
                               onChange={value => updateOrder('apartment', value)}
                               type='text'
                               name='apartment'
                               label='Квартира'
                        />
                        <Input value={order.floor}
                               onChange={value => updateOrder('floor', value)}
                               type='number'
                               name='floor'
                               label='Этаж'
                        />
                        <Input theme={inputStyles}
                               value={order.comment}
                               onChange={value => updateOrder('comment', value)}
                               type='text'
                               label='Комментарий'
                        />

                    </div>
                </Collapse>
                <Button theme={buttonStyles} type="submit" raised primary>Заказать</Button>
            </form>
        </div>
    }
}
