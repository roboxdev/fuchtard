import React from 'react';
import styles from '../styles/footer.pcss';

export class Footer extends React.Component {
    render() {
        return (
            <footer styleName="styles.footer">
                <div>
                    <div>
                        <div>
                            <p>
                                <a href="{% url 'main:contacts-view' %}">О компании и контакты</a>
                            </p>
                            <p>
                                <a href="{% url 'main:faq-view' %}">Вопросы и ответы</a>
                            </p>
                            <p>
                                <a href="{% url 'main:eula-view' %}">Пользовательское соглашение</a>
                            </p>
                        </div>
                        <div>
                            <p>TОО «Макси суши»</p>
                            <p>Телефон: <a href="tel:+77273573030">+7 (727) 357 30 30</a></p>
                            <p>Наша почта: <a href="mailto:ok@maxisushi.kz">ok@maxisushi.kz</a></p>
                        </div>
                        <div>
                            <p><a href="{% url 'panel:dashboard-view' %}">Войти</a></p>
                            <p>Разработка: <a href="https://roboxv.pro">robox</a></p>
                        </div>
                    </div>
                </div>
            </footer>
        )
    }
}
