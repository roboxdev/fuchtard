import React from 'react';
import { connect } from 'react-redux';

import { restaurantSettings } from 'config';


import styles from 'styles/CheckoutHowto.css';

const {workdayStart, workdayEnd, minimalOrderRequirement} = restaurantSettings;

export class CheckoutHowto extends React.Component {
    render() {
        const {cheapestGift} = this.props;
        return <div>
            <p>Принимаем заказы с&nbsp;{workdayStart}&nbsp;до&nbsp;{workdayEnd}</p>
            <p>Минимальный заказ от&nbsp;{minimalOrderRequirement}&nbsp;₸</p>
            <p>Подарки к заказам от {cheapestGift}&nbsp;₸</p>
        </div>
    }
}

export default connect(
    state => ({

        cheapestGift: state.entities.gifts.length && state.entities.gifts[0].requirement,
    }),
)(CheckoutHowto);
