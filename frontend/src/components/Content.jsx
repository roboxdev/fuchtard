import React from 'react';
import {Route} from 'react-router-dom';
import MediaQuery from 'react-responsive';

import FoodCategory from 'components/FoodCategory';
import IndexPage from 'components/IndexPage';
import Checkout from 'components/Checkout';

import styles from 'styles/Content.css';


class Content extends React.Component {
    render() {
        return (
            <div className={styles.content}>
                <Route exact path="/" component={IndexPage}/>
                <MediaQuery maxWidth={960}>
                    <Route path="/cart/" component={Checkout}/>
                </MediaQuery>
                <Route path="/:slug/" component={FoodCategory}/>
            </div>
        );
    }
}

export default Content