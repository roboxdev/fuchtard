import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import MediaQuery from 'react-responsive';

import {FoodMenu} from 'components/menu';
import {IndexPage} from 'components/index-page';
import {Checkout} from 'components/checkout';
import {NavBar} from 'components/navbar';
import {FoodCategory} from 'components/food-category';

import styles from '../styles/app.css';


export class App extends React.Component {
    render() {
        return (
            <Router>
                <div styleName="styles.app">
                    <div styleName="styles.content">
                        <MediaQuery minWidth={960}>
                            <div styleName="styles.food-menu-container">
                                <FoodMenu/>
                            </div>
                        </MediaQuery>
                        <Route exact path="/" component={IndexPage}/>
                        <MediaQuery maxWidth={960}>
                            <Route path="/cart/" component={Checkout}/>
                        </MediaQuery>
                        <Route path="/:slug/" component={FoodCategory}/>
                        <MediaQuery minWidth={960}>
                            <div styleName="styles.checkout-container">
                                <Checkout/>
                            </div>
                        </MediaQuery>
                    </div>
                    <NavBar />
                </div>
            </Router>
        );
    }
}
