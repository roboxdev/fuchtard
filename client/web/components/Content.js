import React from 'react';
import {Route, Switch} from 'react-router-dom';

import IndexPage from './IndexPage';
import CheckoutPage from './CheckoutPage';
import ThankyouPage from './ThankyouPage';
import Category from './CategoryView';
import ProductView from './ProductView';


export class Content extends React.Component {
    render() {
        return (
            <Switch>
                <Route exact path="/" component={IndexPage}/>
                <Route path="/checkout/" component={CheckoutPage}/>
                <Route path="/orders/:hashid/" component={ThankyouPage}/>
                <Route path="/:categorySlug/:productSlug/" component={ProductView}/>
                <Route path="/create_category/" component={Category}/>
                <Route path="/:categorySlug/" component={Category}/>
            </Switch>
        );
    }
}

export default Content