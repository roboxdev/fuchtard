import React from 'react';

import {Button} from 'react-toolbox/lib/button';
import {Dialog} from 'react-toolbox/lib/dialog';

import CheckoutHowto from 'components/CheckoutHowto';

import styles from 'styles/HowtoButton.css'


export class HowtoButton extends React.Component {
    state = {
        howtoVisible: false,
    };

    howtoToggle = () => {this.setState(state => ({howtoVisible: !state.howtoVisible}))};

    render() {
        return (
            <div>
                <div>
                    <div className={styles.howtoButtonWrapper}>
                        <Button
                            theme={{button: styles.howtoButton}}
                            floating
                            accent
                            icon={'help'}
                            onClick={this.howtoToggle}
                        />
                    </div>
                </div>
                <Dialog
                    actions={[{label: "Закрыть", onClick: this.howtoToggle}]}
                    active={this.state.howtoVisible}
                    onEscKeyDown={this.howtoToggle}
                    onOverlayClick={this.howtoToggle}
                    title='Справка'
                >
                    <CheckoutHowto/>
                </Dialog>

            </div>
        );
    }
}


export default HowtoButton