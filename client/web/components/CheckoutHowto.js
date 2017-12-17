import React from 'react';
import { connect } from 'react-redux';

import { restaurantSettings } from 'core/config';

import { IconButton } from 'react-toolbox/lib/button';

import styles from 'styles/CheckoutHowto.css';

const {workdayStart, workdayEnd, minimalOrderRequirement} = restaurantSettings;

export const MinimalOrderInfo = () => <span>Минимальный заказ от&nbsp;{minimalOrderRequirement}&nbsp;₸</span>;

export const AddToCardButtonHowto = () => <span>
    Чтобы добавлять блюда в корзину, нажимайте
    <IconButton primary icon="add_shopping_cart" />
</span>;

export const CheckoutHowto = ({cheapestGift}) => (
  <div className={styles.howTo}>
    <p>Принимаем заказы с&nbsp;{workdayStart}&nbsp;до&nbsp;{workdayEnd}</p>
    <p>
      <MinimalOrderInfo/>
    </p>
    <p>Бесплатная доставка в квадрате улиц: Альфараби - Рыскулова - Достык - Момышулы</p>
    <p>Среднее время доставки 60-90 минут</p>
    <p>Доставка за пределами квадрата улиц осуществляется при заказе на сумму свыше 5000&nbsp;₸ и стоимость
      составляет от 500&nbsp;₸ (по согласованию с оператором)</p>
    <p>Также можно забрать самовывозом по адресу Тлендиева, 137</p>
    <p>К каждой паре роллов в заказе прилагается один имбирь, соевый соус и васаби</p>
    <p>Подарки к заказам от {cheapestGift}&nbsp;₸</p>
  </div>
);

export default connect(
    state => ({
        cheapestGift: Object.values(state.gifts.resources).length && state.entities.gifts[0].requirement,
    }),
)(CheckoutHowto);
