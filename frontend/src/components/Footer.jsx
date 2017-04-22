import React from 'react';
import styles from 'styles/Footer.css';

export class Footer extends React.Component {
    render() {
        return (
            <footer className={styles.footer}>
                <div className={styles.footerMain}>
                    <p>Телефон: <a href="tel:+77273573030">+7 (727) 357 30 30</a></p>
                    <p>Наша почта: <a href="mailto:ok@maxisushi.kz">ok@maxisushi.kz</a></p>
                </div>
                <div className={styles.copyright}>
                    <p>TОО «Макси суши»</p>
                </div>
            </footer>
        )
    }
}


export default Footer;