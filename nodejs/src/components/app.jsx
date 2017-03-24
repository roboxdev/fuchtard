import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';


import {IndexPage} from 'components/index-page';
import {Checkout} from 'components/checkout';
import {NavBar} from 'components/navbar';
import {FoodCategory} from 'components/food-category';

import styles from '../styles/app.styl';


export class App extends React.Component {
    render() {
        return (
            <Router>
                <div styleName="styles.app">
                    <div styleName="styles.content">
                        <Route exact path="/" component={IndexPage}/>
                        <Route path="/cart" component={Checkout}/>
                        <Route path="/:slug" component={FoodCategory}/>
                    </div>
                    <NavBar />
                </div>
            </Router>
        );
    }
}
