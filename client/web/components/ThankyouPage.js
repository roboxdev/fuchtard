import React from 'react';
import {connect} from 'react-redux';
import {actions as orderHistoryActions} from 'core/reducers/orderHistory';


export class ThankyouPage extends React.Component {
    static defaultProps = {
        order: {},
        hashid: '',
    };

    render() {
        const {order, fetchOrderByHashid} = this.props;
        if (!(order && order.cart_meta)) {
            fetchOrderByHashid();
        }
        return <div>
            <h2>Спасибо за заказ!</h2>
            <p>Вашему заказу присвоен номер {order.hashed_id}</p>
            <p>Наши операторы свяжутся с вами в ближайшее время</p>
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
