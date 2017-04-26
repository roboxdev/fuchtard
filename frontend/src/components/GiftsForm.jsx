import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {RadioGroup, RadioButton} from 'react-toolbox/lib/radio';

import { actions as orderActions } from 'reducers/order';
import {foodItemAnnotatedGifts, subtotalSelector} from 'selectors/app';


export class GiftsForm extends React.Component {
    handleChange = (value) => {this.props.updateOrderField('gift', +value)};

    componentDidUpdate() {
        const {gifts, selectedGiftId, cartSubtotal} = this.props;
        const selectedGift = gifts.find(v => v.id === selectedGiftId);
        if (selectedGift && cartSubtotal < selectedGift.requirement) {
            const availableGift = [...gifts].reverse().find(v => cartSubtotal >= v.requirement);
            if (availableGift) {
                this.handleChange(availableGift.id)
            } else {
                this.handleChange(null)
            }
        }
    }

    render() {
        const {gifts, cartSubtotal, selectedGiftId} = this.props;
        return <div>
            <p>Подарок</p>
            <RadioGroup name='gift' value={`${selectedGiftId}`} onChange={this.handleChange}>
                {gifts.map(({id, foodItem, requirement}) => {
                        const disabled = !cartSubtotal || cartSubtotal < requirement;
                        const label = disabled
                            ? (foodItem && `${foodItem.title} (${requirement} ₸)`)
                            : (foodItem && foodItem.title);
                        return <RadioButton key={id} label={label} value={`${id}`} disabled={disabled}/>
                    }
                )}
            </RadioGroup>
        </div>
    }
}


export default connect(
    state => ({
        cartSubtotal: subtotalSelector(state),
        gifts: foodItemAnnotatedGifts(state),
        selectedGiftId: state.order.gift,
    }),
    dispatch => ({
        ...bindActionCreators(orderActions, dispatch),
    })
)(GiftsForm)