import React from 'react';
import { connect } from 'react-redux';

import { subtotalSelector } from 'selectors/app';

import { restaurantSettings } from 'config';

import { Card, CardText } from 'react-toolbox/lib/card';
import Collapse from 'react-collapse';

const {workdayStart, workdayEnd} = restaurantSettings;

export class CheckoutHowto extends React.Component {
    render() {
        const {cartPrice} = this.props;
        return <Collapse isOpened={!(cartPrice > 0)}>
            <Card>
                <CardText>
                    <div>
                        <p>Принимаем заказы с&nbsp;{workdayStart}&nbsp;до&nbsp;{workdayEnd}</p>
                    </div>
                </CardText>
            </Card>
        </Collapse>
    }
}

export default connect(
    state => ({
        cartPrice: subtotalSelector(state),
    }),
)(CheckoutHowto);
