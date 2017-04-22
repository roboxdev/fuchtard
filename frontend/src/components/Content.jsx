import React from 'react';
import {Route} from 'react-router-dom';

import {Button} from 'react-toolbox/lib/button';
import {Dialog} from 'react-toolbox/lib/dialog';

import FoodCategory from 'components/FoodCategory';
import IndexPage from 'components/IndexPage';
import {CheckoutPage} from 'components/Checkout';
import CheckoutHowto from 'components/CheckoutHowto';

import styles from 'styles/Content.css'

class HowtoButton extends React.Component {
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
                            mini
                            icon={'help'}
                            onClick={this.howtoToggle}
                        />
                    </div>
                    <div style={{height: 0, visibility: 'hidden'}}>.</div>
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


export class Content extends React.Component {
    render() {
        return (
            <div>
                <HowtoButton/>
                <Route exact path="/" component={IndexPage}/>
                <Route path="/cart/" component={CheckoutPage}/>
                <Route path="/:slug/" component={FoodCategory}/>
            </div>
        );
    }
}

export default Content