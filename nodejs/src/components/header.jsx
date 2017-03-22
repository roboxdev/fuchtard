import React from 'react';
import {Link} from 'react-router-dom';

export class Header extends React.Component {
    render() {
        return (
            <header>
                <div>
                    <div>
                        <Link to="/">
                            <img src="/static/main/img/maxiSushiLogo13.png"/>
                        </Link>
                    </div>
                    <div>
                        <p>
                            <span>Принимаем заказы</span>
                            <span>с 10:00 до 22:45</span>
                        </p>
                        <p>Минимальный заказ от&nbsp;3000&nbsp;〒</p>
                    </div>
                    <div>
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
                            <a href="https://www.facebook.com/Доставка-суши-MaxiSushi-568292479939728/">fb</a>
                            <a href="https://instagram.com/maxi.sushi/">ig</a>
                            <a href="https://vk.com/club79840974">vk</a>
                        </p>
                    </div>
                </div>
            </header>
        )
    }
}
