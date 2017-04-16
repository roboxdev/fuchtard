import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import MediaQuery from 'react-responsive';
import Sticky from 'react-stickynode';

import FoodMenu from 'components/menu';
import FoodCategory from 'components/food-category';
import IndexPage from 'components/index-page';
import Checkout from 'components/checkout';
import NavBar from 'components/navbar';
import Notification from 'components/notification';

import styles from '../styles/app.css';


class App extends React.Component {
    render() {
        return (
            <Router>
                <div styleName="styles.app">
                    <div styleName="styles.content">
                        <MediaQuery minWidth={960}>
                            <div styleName="styles.food-menu-container">
                                <Sticky>
                                    <FoodMenu/>
                                </Sticky>
                            </div>
                        </MediaQuery>
                        <Route exact path="/" component={IndexPage}/>
                        <MediaQuery maxWidth={960}>
                            <Route path="/cart/" component={Checkout}/>
                        </MediaQuery>
                        <div styleName="styles.food-container">
                            <Route path="/:slug/" component={FoodCategory}/>
                        </div>
                        <MediaQuery minWidth={960}>
                            <div styleName="styles.checkout-container">
                                <Sticky>
                                    <div>
                                        <Checkout/>
                                    </div>
                                </Sticky>
                            </div>
                        </MediaQuery>
                    </div>
                    <NavBar />
                    <Notification />
                </div>
            </Router>
        );
    }
}

export default App