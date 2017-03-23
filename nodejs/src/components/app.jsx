import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import {Header} from 'components/header';
import {Footer} from 'components/footer';
import {SEOAbout} from 'components/seoabout';
import {Cart} from 'components/cart';
import {FoodMenu} from 'components/menu';
import {OrderForm} from 'components/order';
import {NavBar} from 'components/navbar';

import styles from '../styles/app.styl';


export class App extends React.Component {
    render() {
        return (
            <Router>
                <div styleName="app">
                    <Header />
                    <Route exact path="/" component={FoodMenu}/>
                    <Route path="/cart" component={Cart}/>
                    <Route path="/checkout" component={OrderForm}/>
                    <SEOAbout/>
                    <NavBar />
                    <Footer />
                </div>
            </Router>
        );
    }
}
