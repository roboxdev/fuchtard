import React from 'react';
import {connect} from 'react-redux';
import {actions as orderHistoryActions} from 'reducers/orderHistory';


export class ThankyouPage extends React.Component {
    static defaultProps = {
        order: {},
        hashid: '',
    };

    render() {
        const {order, fetchOrderByHashid} = this.props;
        if (!order.cart || Object.keys(order.cart).length === 0) {
            fetchOrderByHashid();
        }
        return <div>
            <h2>Спасибо за заказ!</h2>
            <h4>Вашему заказу присвоен номер {order.hashed_id}</h4>
        </div>
    }
}


export default connect(
    (state, props) => ({
        hashid: props.match.params.hashid,
        order: state.orderHistory.orders.find(v => v.id === props.match.params.hashid)
    }),
    (dispatch, props) => ({
        fetchOrderByHashid: () => dispatch(orderHistoryActions.fetchOrderByHashid(props.match.params.hashid)),
    })
)
(ThankyouPage);
