import React from 'react';

import { Route } from 'react-router-dom';

import MediaQuery from 'react-responsive';
import Sticky from 'react-stickynode';

import FoodMenu from './FoodMenu';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import SidebarCart from './SidebarCart';

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

const Main = () => <div className={styles.mainBlock}>
    <main className={styles.content}>
        <Content/>
    </main>
</div>;

const MainWithSidebars = () => <div className={styles.mainBlock}>
    <LeftSidebar/>
    <main className={styles.content}>
        <Content/>
    </main>
    <RightSidebar/>
</div>;

class MainBlock extends React.Component {
    render() {
        return <div>
            <Route exact path="/" children={
                ({match, ...rest}) =>
                    match
                        ? <Main />
                        : <MainWithSidebars />
            }/>
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