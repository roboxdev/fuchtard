import React from 'react';
import {Route} from 'react-router-dom';

import FoodCategory from 'components/FoodCategory';
import IndexPage from 'components/IndexPage';
import {CheckoutPage} from 'components/Checkout';

export class Content extends React.Component {
    render() {
        return (
            <div>
                <Route exact path="/" component={IndexPage}/>
                <Route path="/cart/" component={CheckoutPage}/>
                <Route path="/:slug/" component={FoodCategory}/>
            </div>
        );
    }
}

export default Content