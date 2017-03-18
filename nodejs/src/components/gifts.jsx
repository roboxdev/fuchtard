import React from 'react';
import {connect} from 'react-redux';

import * as actions from 'actions/app';


@connect(
    state => ({
        gifts: state.gifts,

    }),
    dispatch => ({
        selectGift: val => dispatch(actions.updateOrderField('gift', val)),
    })
)
export class GiftsForm extends React.Component {
    render() {
        const {gifts, cartPrice, selectGift} = this.props;
        return <div>
            GIFTS:
            {gifts.map((gift) => {
                const foodItem = gift.food_item;
                const disabled = cartPrice < gift.requirement;
                return <div key={foodItem.id}>
                    <input
                        type="radio"
                        name="gift"
                        value={gift.id}
                        onChange={(e) => selectGift(e.currentTarget.value)}
                        disabled={disabled}
                    />
                    <span>{foodItem.title}</span>
                    <span>{gift.requirement}</span>
                </div>
            })}
        </div>
    }
}