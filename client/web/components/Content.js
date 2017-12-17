import React from 'react';
import {Route, Switch} from 'react-router-dom';

import IndexPage from './IndexPage';
import CheckoutPage from './CheckoutPage';
import ThankyouPage from './ThankyouPage';
import FoodCategory from './FoodCategory';
import FoodItemDetailed from './FoodItemDetailed';


export class Content extends React.Component {
    render() {
        return (
            <Switch>
                <Route exact path="/" component={IndexPage}/>
                <Route path="/checkout/" component={CheckoutPage}/>
                <Route path="/orders/:hashid/" component={ThankyouPage}/>
                <Route path="/:slug/:foodSlug/" component={FoodItemDetailed}/>
                <Route path="/:slug/" component={FoodCategory}/>
            </Switch>
        );
    }
}

export default Content