import React from 'react';
import {connect} from 'react-redux';

import * as actions from 'actions/app';
import {foodItemAnnotatedGifts} from 'selectors/app';


@connect(
    null,
    (dispatch, props) => ({
        selectGift: () => dispatch(actions.updateOrderField('gift', props.id)),
    })
)
class Gift extends React.Component {
    render () {
        const disabled = cartPrice < requirement;
        const {id, cartPrice, foodItem, requirement, selectGift} = this.props;
        return (foodItem
                ? <div key={id}>
                    <input
                        type="radio"
                        name="gift"
                        value={id}
                        onChange={selectGift}
                        disabled={disabled}
                    />
                    <span>{foodItem.title}</span>
                    <span>{requirement}</span>
                </div>
                : null
        )
    }
}

@connect(
    state => ({
        gifts: foodItemAnnotatedGifts(state),
    }),
)
export class GiftsForm extends React.Component {
    render() {
        const {gifts, cartPrice} = this.props;
        return <div>
            GIFTS:
            {gifts.map(({id, ...rest}) => {
                return <Gift
                    key={id}
                    id={id}
                    cartPrice={cartPrice}
                    {...rest}
                />
            })}
        </div>
    }
}