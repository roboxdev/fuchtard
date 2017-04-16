import React from 'react';
import styles from '../styles/footer.css';

export class Footer extends React.Component {
    render() {
        return (
            <footer styleName="styles.footer">
                <p>TОО «Макси суши»</p>
                <p>Телефон: <a href="tel:+77273573030">+7 (727) 357 30 30</a></p>
                <p>Наша почта: <a href="mailto:ok@maxisushi.kz">ok@maxisushi.kz</a></p>
            </footer>
        )
    }
}


export default Footer;