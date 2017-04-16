import React from 'react';
import {Link} from 'react-router-dom';
import MediaQuery from "react-responsive";
import {Button} from 'react-toolbox/lib/button';
import FontIcon from 'react-toolbox/lib/font_icon';

import GiftProgressBar from 'components/GiftProgressBar';
import styles from 'styles/NavBar';
import buttonStyles from 'styles/navbar-button';

class NavigationButtons extends React.Component {
    render() {
        return <div className={styles.navigationButtons}>
            <Link to="/" className={styles.link}>
                <Button neutral={false} theme={buttonStyles}>
                    <FontIcon className={styles.buttonIcon} value="home"/>
                    <span className={styles.buttonText}>Домой</span>
                </Button>
            </Link>
            <Link to="/cart/" className={styles.link}>
                <Button neutral={false} theme={buttonStyles}>
                    <FontIcon className={styles.buttonIcon} value="shopping_cart"/>
                    <span className={styles.buttonText}>Корзина</span>
                </Button>
            </Link>
        </div>

    }
}

export class NavBar extends React.Component {
    render() {
        return <MediaQuery maxWidth={960}>
            <div className={styles.sticky}>
                <GiftProgressBar />
                <NavigationButtons />
            </div>
        </MediaQuery>
    }
}

export default NavBar;