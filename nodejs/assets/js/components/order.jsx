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
                return <div key={index}><input type="radio" name="gift" value={gift.get('id')} disabled={disabled}/>
                    <span>{foodItem.get('title')}</span>
                    <span>{gift.get('requirement')}</span>
                </div>
            })}
        </div>
    }
}


class OrderForm extends React.Component {
    render() {
        const orderFields = this.props.order;
        const updateOrderField = (field, e) => this.props.updateOrderField(field, e.target.value, false);
        const updateAddressField = (field, e) => this.props.updateOrderField(field, e.target.value, true);
        return <div>
            <GiftsForm gifts={this.props.gifts} cartPrice={this.props.cartPrice} />

            Order Form
            <div>Имя
                <input onChange={e => updateOrderField('name', e)} value={orderFields.get('name')}/>
            </div>
            <div>email
                <input onChange={e => updateOrderField('email', e)} value={orderFields.get('email')}/>
            </div>
            <div>телефон
                <input onChange={e => updateOrderField('phone', e)} value={orderFields.get('phone')}/>
            </div>
            <div>Улица
                <input onChange={e => updateAddressField('street', e)} value={orderFields.get('street')}/>
            </div>
            <div>Номер дома
                <input onChange={e => updateAddressField('apartment', e)} value={orderFields.get('apartment')}/>
            </div>
            <div>квартира
                <input onChange={e => updateAddressField('building', e)} value={orderFields.get('building')}/>
            </div>
            <div>этаж
                <input onChange={e => updateAddressField('floor', e)} value={orderFields.get('floor')}/>
            </div>
            <div>комментарий
                <input onChange={e => updateOrderField('comment', e)} value={orderFields.get('comment')}/>
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