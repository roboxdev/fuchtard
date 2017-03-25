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
                        <MediaQuery minWidth={960}><FoodMenu/></MediaQuery>
                        <Route exact path="/" component={IndexPage}/>
                        <Route path="/cart/" component={Checkout}/>
                        <Route path="/:slug/" component={FoodCategory}/>
                        <MediaQuery minWidth={960}><Checkout/></MediaQuery>
                    </div>
                    <NavBar />
                </div>
            </Router>
        );
    }
}
