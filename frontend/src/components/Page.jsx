import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';

import MediaQuery from 'react-responsive';
import Sticky from 'react-stickynode';
import { Button } from 'react-toolbox/lib/button';

import FoodMenu from 'components/FoodMenu';
import Header from 'components/Header';
import Content from 'components/Content';
import Footer from 'components/Footer';
import Checkout from 'components/Checkout';

import styles from 'styles/Page.css';
import CheckoutHowto from 'components/CheckoutHowto';


class LeftSidebar extends React.Component {
    render() {
        return (
            <MediaQuery minWidth={960}>
                <div className={styles.leftSidebar}>
                    <Sticky bottomBoundary={'main'}>
                        <FoodMenu/>
                    </Sticky>
                </div>
            </MediaQuery>
        );
    }
}


class RightSidebar extends React.Component {
    render() {
        return <MediaQuery minWidth={960}>
            <div className={styles.rightSidebar}>
                <Sticky bottomBoundary={'main'}>
                    <Route path="/checkout/" children={
                        ({match, ...rest}) =>
                            match
                                ? <CheckoutHowto />
                                : <div>
                                <Checkout/>
                                <Link to="/checkout/">
                                    <Button
                                        primary={true}
                                    >
                                        Перейти к оформлению
                                    </Button>
                                </Link>
                            </div>
                    }/>
                </Sticky>
            </div>
        </MediaQuery>
    }
}


class MainBlock extends React.Component {
    render() {
        return <div>
            <div className={styles.mainBlock}>
                <LeftSidebar/>
                <main className={styles.content}>
                    <Content/>
                </main>
                <RightSidebar/>
            </div>
        </div>
    }
}


export class Page extends React.Component {
    render() {
        return (
            <div className={styles.page}>
                <Header/>
                <MainBlock/>
                <Footer/>
            </div>
        );
    }
}

export default Page