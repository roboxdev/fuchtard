import React from 'react';
import {Link} from 'react-router-dom';

import {IconButton} from 'react-toolbox/lib/button';
import {Dialog} from 'react-toolbox/lib/dialog';

import CheckoutHowto from 'components/CheckoutHowto';

import styles from 'styles/Header.css';

export class Header extends React.Component {
    state = {
        howtoVisible: false,
    };

    howtoToggle = () => {this.setState(state => ({howtoVisible: !state.howtoVisible}))};

    render() {
        return (
            <header>
                <div className={styles.headerWrapper}>
                    <div className={styles.logo}>
                        <Link to="/">
                            <img src="/public/maxiSushiLogo.png"/>
                        </Link>
                    </div>
                    <div className={styles.aboutUsWrapper}>
                        <div className={styles.aboutUs}>
                            <p>
                                <span>Телефон для заказов:</span>
                                <span><a href="tel:+77273573030">+7 (727) 357 30 30</a></span>
                            </p>
                            <p>
                                <span>Мобильный:</span>
                                <span><a href="tel:+77757210135">+7 (775) 721 01 35</a></span>
                            </p>
                            <p>
                                <span>Мы в сети:</span>
                                <a target="_blank"
                                   href="https://www.facebook.com/Доставка-суши-MaxiSushi-568292479939728/">
                                    <img src="/public/facebook-box.svg"/>
                                </a>
                                <a target="_blank" href="https://instagram.com/maxi.sushi/">
                                    <img src="/public/instagram.svg"/>
                                </a>
                                <a target="_blank" href="https://vk.com/club79840974">
                                    <img src="/public/vk-box.svg"/>
                                </a>
                            </p>
                            <div className={styles.howtoButtonWrapper}>
                                <IconButton
                                    primary={true}
                                    icon={'help'}
                                    onClick={this.howtoToggle}
                                />
                            </div>
                        </div>
                    </div>

                </div>
                <Dialog
                    actions={[{ label: "Закрыть", onClick: this.howtoToggle }]}
                    active={this.state.howtoVisible}
                    onEscKeyDown={this.howtoToggle}
                    onOverlayClick={this.howtoToggle}
                    title='Справка'
                >
                    <CheckoutHowto/>
                </Dialog>
            </header>
        )
    }
}


export default Header;