import React from 'react';
import {Link} from 'react-router-dom';
import MediaQuery from "react-responsive";
import {Button} from 'react-toolbox/lib/button';
import FontIcon from 'react-toolbox/lib/font_icon';

import GiftProgressBar from 'components/gift-progress-bar';
import styles from '../styles/navbar.css';
import buttonStyles from '../styles/navbar-button.css';

class NavigationButtons extends React.Component {
    render() {
        return <div styleName="styles.navigation-buttons">
            <Link to="/" styleName="styles.link">
                <Button neutral={false} theme={buttonStyles}>
                    <FontIcon styleName="styles.button-icon" value="home"/>
                    <span styleName="styles.button-text">Домой</span>
                </Button>
            </Link>
            <Link to="/cart/" styleName="styles.link">
                <Button neutral={false} theme={buttonStyles}>
                    <FontIcon styleName="styles.button-icon" value="shopping_cart"/>
                    <span styleName="styles.button-text">Корзина</span>
                </Button>
            </Link>
        </div>

    }
}

export class NavBar extends React.Component {
    render() {
        return <MediaQuery maxWidth={960}>
            <div styleName="styles.sticky">
                <GiftProgressBar />
                <NavigationButtons />
            </div>
        </MediaQuery>
    }
}