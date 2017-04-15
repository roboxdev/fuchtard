import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Snackbar from 'react-toolbox/lib/snackbar';
import { actions as notificationActions } from 'reducers/notifications';
import { actions as cartActions } from 'reducers/cart';

@connect(
    state => ({
        notification: state.notifications.label,
    }),
    dispatch => ({
        ...bindActionCreators(notificationActions, dispatch),
        ...bindActionCreators(cartActions, dispatch),
    })
)
export class Notification extends React.Component {
    state = {
        active: false,
    };

    componentWillReceiveProps(nextProps) {
        if (nextProps.notification) {
            this.setState({active: true});
        }
    };

    handleTimeout = () => {
        this.setState({active: false});
        this.props.resetNotification();
    };

    handleClick = () => {
        this.props.revertCart();
        this.handleTimeout();
    };

    render() {
        return (
            <Snackbar
                icon='question-answer'
                active={this.state.active}
                label={this.props.notification}
                type='cancel'
                action='Отменить'
                onClick={this.handleClick}
                onTimeout={this.handleTimeout}
                timeout={5000}
            />
        );
    }
}
