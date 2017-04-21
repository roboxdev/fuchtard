import React from 'react';
import { connect } from 'react-redux';

import { subtotalSelector } from 'selectors/app';

import { restaurantSettings } from 'config';

import { Card, CardText } from 'react-toolbox/lib/card';
import Collapse from 'react-collapse';

const {workdayStart, workdayEnd, minimalOrderRequirement} = restaurantSettings;

export class CheckoutHowto extends React.Component {
    state = {
        forceVisibility: false,
    };

    toggleForcedVisibility = () => this.setState((state) => ({forceVisibility: !state.forceVisibility}));

    componentWillReceiveProps(nextProps){
        if (nextProps.cartPrice === 0 && this.state.forceVisibility === true) {
            this.setState({forceVisibility: false})
        }
    };

    render() {
        const {cartPrice, cheapestGift} = this.props;
        const cartIsEmpty = !(cartPrice > 0);
        const howtoVisible = cartIsEmpty || this.state.forceVisibility;
        return <Card>
            {
                !cartIsEmpty &&
                <button onClick={this.toggleForcedVisibility}>{howtoVisible ? 'Скрыть' : 'Справка'}</button>
            }
            <Collapse isOpened={howtoVisible}>
                <CardText>
                    <div>
                        <p>Принимаем заказы с&nbsp;{workdayStart}&nbsp;до&nbsp;{workdayEnd}</p>
                        <p>Минимальный заказ от&nbsp;{minimalOrderRequirement}&nbsp;₸</p>
                        <p>Подарки к заказам от {cheapestGift}&nbsp;₸</p>
                    </div>
                </CardText>
            </Collapse>
        </Card>
    }
}

export default connect(
    state => ({
        cartPrice: subtotalSelector(state),
        cheapestGift: state.entities.gifts.length && state.entities.gifts[0].requirement,
    }),
)(CheckoutHowto);
