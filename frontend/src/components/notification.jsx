import React from 'react';
import { connect } from 'react-redux';
import Snackbar from 'react-toolbox/lib/snackbar';
import * as actions from 'actions/app';

@connect(
    state => ({
        notification: state.notification,
    }),
    dispatch => ({
        revertCart: () => dispatch(actions.revertCart()),
        resetNotification: () => dispatch(actions.resetNotification())
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
