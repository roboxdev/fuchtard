import React from 'react';

import {Button} from 'react-toolbox/lib/button';
import {Dialog} from 'react-toolbox/lib/dialog';

import CheckoutHowto from './CheckoutHowto';

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
                            label={'?'}
                            onClick={this.howtoToggle}
                        />
                    </div>
                </div>
                <Dialog
                    actions={[{label: "Закрыть", onClick: this.howtoToggle}]}
                    active={this.state.howtoVisible}
                    onEscKeyDown={this.howtoToggle}
                    onOverlayClick={this.howtoToggle}
                    theme={{body: styles.dialogBody}}
                >
                    <CheckoutHowto/>
                </Dialog>

            </div>
        );
    }
}


export default HowtoButton