import React from 'react';

import MediaQuery from 'react-responsive';
import Sticky from 'react-stickynode';

import FoodMenu from 'components/FoodMenu';

import styles from 'styles/LeftSidebar.css';


class LeftSidebar extends React.Component {
    render() {
        return (
            <MediaQuery minWidth={960}>
                <div className={styles.foodMenuContainer}>
                    <Sticky>
                        <FoodMenu/>
                    </Sticky>
                </div>
            </MediaQuery>
        );
    }
}

export default LeftSidebar