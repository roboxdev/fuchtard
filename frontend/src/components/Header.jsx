import React from 'react';
import {Link} from 'react-router-dom';

import HowtoButton from 'components/HowtoButton';
import PageTitle from 'components/PageTitle';

import styles from 'styles/Header.css';

export class Header extends React.Component {
    render() {
        return (
            <div>
                <div className={styles.coloredBg}>
                    <div className={styles.headerWrapper}>
                        <header className={styles.header}>
                            <div className={styles.logo}>
                                <div className={styles.logoBlock}>
                                    <Link to="/">
                                        <img src="/maxiSushiLogo.svg"/>
                                    </Link>
                                </div>
                            </div>
                            <div className={styles.aboutUs}>
                                <div className={styles.content}>
                                    <p>
                                        <span><a href="tel:+77273573030" rel="noopener">+7 (727) 357 30 30</a></span>
                                    </p>
                                    <p>
                                        <span><a href="tel:+77757210135" rel="noopener">+7 (775) 721 01 35</a></span>
                                    </p>
                                    <p>
                                        <a target="_blank" rel="noopener"
                                           href="https://www.facebook.com/Доставка-суши-MaxiSushi-568292479939728/">
                                            <img className={styles.icon} src="/facebook-box.svg"/>
                                        </a>
                                        <a target="_blank" rel="noopener"
                                           href="https://www.instagram.com/sushi.maxi/">
                                            <img className={styles.icon} src="/instagram.svg"/>
                                        </a>
                                        <a target="_blank" rel="noopener"
                                           href="https://vk.com/club79840974">
                                            <img className={styles.icon} src="/vk-box.svg"/>
                                        </a>
                                    </p>
                                </div>
                            </div>
                            <div className={styles.titleWrapper}>
                                <PageTitle/>
                            </div>
                        </header>
                        <HowtoButton/>
                    </div>
                </div>
            </div>
        )
    }
}


export default Header;