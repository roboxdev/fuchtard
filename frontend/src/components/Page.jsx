import React from 'react';

import MediaQuery from 'react-responsive';
import Sticky from 'react-stickynode';

import FoodMenu from 'components/FoodMenu';
import Header from 'components/Header';
import Content from 'components/Content';
import Footer from 'components/Footer';
import SidebarCart from 'components/SidebarCart';

import styles from 'styles/Page.css';


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
                    <SidebarCart/>
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