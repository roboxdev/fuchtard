import React from 'react';

import LeftSidebar from 'components/LeftSidebar';
import Content from 'components/Content';
import RightSidebar from 'components/RightSidebar';

import styles from 'styles/Page.css';


export class Page extends React.Component {
    render() {
        return (
            <div className={styles.page}>
                <LeftSidebar/>
                <Content/>
                <RightSidebar/>
            </div>
        );
    }
}

export default Page