import React from 'react';
import {connect} from 'react-redux';
import ProgressBar from 'react-toolbox/lib/progress_bar';
import styles from 'styles/GiftProgressBar.css';

import {subtotalSelector} from 'selectors/app';


export class GiftProgressBar extends React.Component {
    getMaxProgress = () => this.props.gifts.length && [...this.props.gifts].pop().requirement;

    getBuffer = () => {
        const buffer = this.props.gifts.filter(v => v.requirement > this.props.cartPrice)[0];
        return buffer ? buffer.requirement : this.getMaxProgress();
    };

    render() {
        const {cartPrice} = this.props;
        return <ProgressBar mode='determinate'
                            value={cartPrice}
                            buffer={this.getBuffer()}
                            max={this.getMaxProgress()}
                            theme={styles}
        />
    }
}

export default connect(
    state => ({
        cartPrice: subtotalSelector(state),
        gifts: state.entities.gifts,
    })
)(GiftProgressBar)
