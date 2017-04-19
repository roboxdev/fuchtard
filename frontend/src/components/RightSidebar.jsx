import React from 'react';
import MediaQuery from 'react-responsive';
import Sticky from 'react-stickynode';

import Checkout from 'components/Checkout';

import styles from 'styles/RightSidebar.css';


class RightSidebar extends React.Component {
    render() {
        return (
            <MediaQuery minWidth={960}>
                <div className={styles.checkoutContainer}>
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

export default RightSidebar