import React from 'react';
import {connect} from 'react-redux';
import {RadioGroup, RadioButton} from 'react-toolbox/lib/radio';

import * as actions from 'actions/app';
import {foodItemAnnotatedGifts, subtotalSelector} from 'selectors/app';


@connect(
    state => ({
        cartPrice: subtotalSelector(state),
        gifts: foodItemAnnotatedGifts(state),
        selectedGift: state.order.gift,
    }),
    dispatch => ({
        selectGift: (id) => dispatch(actions.updateOrderField('gift', id))
    })
)
export class GiftsForm extends React.Component {
    handleChange = (value) => {this.props.selectGift(+value)};

    render() {
        const {gifts, cartPrice, selectedGift} = this.props;
        return <div>
            GIFTS:
            <RadioGroup name='gift' value={`${selectedGift}`} onChange={this.handleChange}>
                {gifts.map(({id, foodItem, requirement}) => {
                        const disabled = cartPrice < requirement;
                        const label = disabled
                            ? (foodItem && `${foodItem.title} (${requirement})`)
                            : (foodItem && foodItem.title);
                        return <RadioButton key={id} label={label} value={`${id}`} disabled={disabled}/>
                    }
                )}
            </RadioGroup>
        </div>
    }
}