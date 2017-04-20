import React from 'react';
import GiftsForm from 'components/GiftsForm';
import Cart from 'components/Cart';
import OrderForm from 'components/OrderForm';

import styles from 'styles/Checkout.css';

export class Checkout extends React.Component {
    render() {
        return (
            <div className={styles.wrapper}>
                <div>
                    <p>
                        <span>Принимаем заказы с&nbsp;10:00&nbsp;до&nbsp;22:45</span>
                    </p>
                    <p>Минимальный заказ от&nbsp;3000&nbsp;₸</p>
                </div>
                <Cart/>
                <GiftsForm/>
                <OrderForm/>
            </div>
        )
    }
}

export default Checkout;