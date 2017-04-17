import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import MediaQuery from 'react-responsive';
import Sticky from 'react-stickynode';

import FoodMenu from 'components/FoodMenu';
import FoodCategory from 'components/FoodCategory';
import IndexPage from 'components/IndexPage';
import Checkout from 'components/Checkout';
import NavBar from 'components/NavBar';
import Notification from 'components/Notification';

import styles from 'styles/App.css';


export class App extends React.Component {
    render() {
        return (
            <Router>
                <div>
                    <div className={styles.content}>
                        <MediaQuery minWidth={960}>
                            <div className={styles.foodMenuContainer}>
                                <Sticky>
                                    <FoodMenu/>
                                </Sticky>
                            </div>
                        </MediaQuery>
                        <Route exact path="/" component={IndexPage}/>
                        <MediaQuery maxWidth={960}>
                            <Route path="/cart/" component={Checkout}/>
                        </MediaQuery>
                        <div className={styles.foodContainer}>
                            <Route path="/:slug/" component={FoodCategory}/>
                        </div>
                        <MediaQuery minWidth={960}>
                            <div className={styles.checkoutContainer}>
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