import React from 'react';
import {Route, Switch} from 'react-router-dom';

import IndexPage from 'components/IndexPage';
import {CheckoutPage} from 'components/Checkout';
import ThankyouPage from 'components/ThankyouPage';
import FoodCategory from 'components/FoodCategory';
import FoodItemDetailed from 'components/FoodItemDetailed';


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