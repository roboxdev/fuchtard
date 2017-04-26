import React from 'react';
import { connect } from 'react-redux';

import { restaurantSettings } from 'config';

import { IconButton } from 'react-toolbox/lib/button';

import styles from 'styles/CheckoutHowto.css';

const {workdayStart, workdayEnd, minimalOrderRequirement} = restaurantSettings;

export const MinimalOrderInfo = () => <span>Минимальный заказ от&nbsp;{minimalOrderRequirement}&nbsp;₸</span>;

export const AddToCardButtonHowto = () => <span>
    Чтобы добавлять блюда в корзину, нажимайте
    <IconButton primary icon="add_shopping_cart" />
</span>;

export class CheckoutHowto extends React.Component {
    render() {
        const {cheapestGift} = this.props;
        return <div>
            <p>Принимаем заказы с&nbsp;{workdayStart}&nbsp;до&nbsp;{workdayEnd}</p>
            <p>
                <MinimalOrderInfo />
            </p>
            <p>Подарки к заказам от {cheapestGift}&nbsp;₸</p>
        </div>
    }
}

export default connect(
    state => ({

        cheapestGift: state.entities.gifts.length && state.entities.gifts[0].requirement,
    }),
)(CheckoutHowto);
