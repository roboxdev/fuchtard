import React from 'react';
import {Link} from 'react-router-dom';
import {Button} from 'react-toolbox/lib/button';
import FontIcon from 'react-toolbox/lib/font_icon';
import styles from '../styles/navbar.styl';
import buttonStyles from '../styles/navbar-button.styl';


export class NavBar extends React.Component {
    state = {
        selectedIndex: 0,
    };

    select = (index) => this.setState({selectedIndex: index});

    render() {
        return (

            <div styleName="styles.sticky">
                <Link to="/" styleName="styles.link">
                    <Button neutral={false} theme={buttonStyles}>
                        <FontIcon styleName="styles.button-icon" value="home"/>
                        <span styleName="styles.button-text">Домой</span>
                    </Button>
                </Link>
                <Link to="/cart" styleName="styles.link">
                    <Button neutral={false} theme={buttonStyles}>
                        <FontIcon styleName="styles.button-icon" value="shopping_cart"/>
                        <span styleName="styles.button-text">Корзина</span>
                    </Button>
                </Link>
                <Link to="/checkout" styleName="styles.link">
                    <Button neutral={false} theme={buttonStyles}>
                        <FontIcon styleName="styles.button-icon" value="credit_card"/>
                        <span styleName="styles.button-text">Оформить</span>
                    </Button>
                </Link>
            </div>
        )
    }
}