import React from 'react';
import styles from 'styles/Footer.css';

export class Footer extends React.Component {
    render() {
        return <footer className={styles.footer}>
            <div className={styles.footerMain}>
                <p>Можно написать нам на почту <a target="_blank" rel="noopener" href="mailto:ok@maxisushi.kz">ok@maxisushi.kz</a></p>
                <p>или позвонить по телефону <a target="_blank" rel="noopener" href="tel:+77273573030">+7 (727) 357 30 30</a></p>
            </div>
            <div className={styles.copyrightWrapper}>
                <div className={styles.copyright}>
                    <p>TОО «Макси суши»</p>
                </div>
            </div>
        </footer>
    }
}


export default Footer;