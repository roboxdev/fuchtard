import React from 'react';

import LeftSidebar from 'components/LeftSidebar';
import Header from 'components/Header';
import Content from 'components/Content';
import Footer from 'components/Footer';
import RightSidebar from 'components/RightSidebar';

import styles from 'styles/Page.css';


export class Page extends React.Component {
    render() {
        return (
            <div className={styles.page}>
                <LeftSidebar/>
                <div className={styles.mainBlock}>
                    <Header/>
                    <Content/>
                    <Footer/>
                </div>
                <RightSidebar/>
            </div>
        );
    }
}

export default Page