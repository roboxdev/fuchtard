import React from 'react';

import MediaQuery from 'react-responsive';
import Sticky from 'react-stickynode';

import FoodMenu from 'components/FoodMenu';
import Header from 'components/Header';
import Content from 'components/Content';
import Footer from 'components/Footer';
import Checkout from 'components/Checkout';

import styles from 'styles/Page.css';


class LeftSidebar extends React.Component {
    render() {
        return (
            <MediaQuery minWidth={960}>
                <div className={styles.leftSidebar}>
                    <Sticky>
                        <FoodMenu/>
                    </Sticky>
                </div>
            </MediaQuery>
        );
    }
}


class MainBlock extends React.Component {
    render() {
        return <div className={styles.mainBlock}>
            <Header/>
            <Content/>
            <Footer/>
        </div>
    }
}


class RightSidebar extends React.Component {
    render() {
        return (
            <MediaQuery minWidth={960}>
                <div className={styles.rightSidebar}>
                    <Sticky>
                        <div>
                            <Checkout/>
                        </div>
                    </Sticky>
                </div>
            </MediaQuery>
        );
    }
}


export class Page extends React.Component {
    render() {
        return (
            <div className={styles.page}>
                <LeftSidebar/>
                <MainBlock/>
                <RightSidebar/>
            </div>
        );
    }
}

export default Page