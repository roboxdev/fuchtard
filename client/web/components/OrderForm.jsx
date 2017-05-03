import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { minimalOrderRequirementSatisfiedSelector } from 'core/selectors/app';
import { actions as orderActions } from 'core/reducers/order';

import Input from 'react-toolbox/lib/input';
import {Button} from 'react-toolbox/lib/button';
import styles from 'styles/OrderForm.css';


export class OrderForm extends React.Component {
    submit = (e) => {
        e.preventDefault();
        this.props.placeOrder();
    };

    render() {
        const {order, updateOrderField, minimalOrderRequirementSatisfied} = this.props;
        const updateOrder = (field, value) => updateOrderField(field, value);
        return <div>
            <form onSubmit={this.submit}>
                <Input theme={{input: styles.input}}
                       value={order.name}
                       onChange={value => updateOrder('name', value)}
                       type='text'
                       name='name'
                       label='Имя'
                       maxLength={16}
                       required
                />
                <Input theme={{input: styles.input}}
                       value={order.phone}
                       onChange={value => updateOrder('phone', value)}
                       onFocus={this.showOptionalFields}
                       type='tel'
                       name='phone'
                       label='Телефон'
                       required
                />
                <Input value={order.email}
                       onChange={value => updateOrder('email', value)}
                       type='email'
                       label='Email'
                />

                <Input theme={{input: styles.input}}
                       value={order.street}
                       onChange={value => updateOrder('street', value)}
                       type='text'
                       name='street'
                       label='Улица'
                />
                <Input theme={{input: styles.input}}
                       value={order.building}
                       onChange={value => updateOrder('building', value)}
                       type='text'
                       name='building'
                       label='Номер дома'
                />
                <Input theme={{input: styles.input}}
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
                <Input theme={{input: styles.input}}
                       value={order.comment}
                       onChange={value => updateOrder('comment', value)}
                       type='text'
                       label='Комментарий'
                       multiline={true}
                       rows={2}
                />
                <div className={styles.submitButtonContainer}>
                    <Button
                        theme={{button: styles.button}}
                        type="submit"
                        raised={true}
                        primary={true}
                        disabled={!minimalOrderRequirementSatisfied}
                    >Заказать</Button>
                </div>
            </form>
        </div>
    }
}


export default connect(
    state => ({
        order: state.order,
        minimalOrderRequirementSatisfied: minimalOrderRequirementSatisfiedSelector(state),

    }),
    dispatch => ({
        ...bindActionCreators(orderActions, dispatch),
    })
)(OrderForm)