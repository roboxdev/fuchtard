import React from 'react';

export class Header extends React.Component {
    render() {
        return (
            <header className="container">
                //
                <div id="scroll-to-top"></div>
                <div className="row">
                    <div className="col-sm-4 col-md-3">
                        <a className="site-logo" href="{% url 'food:food-menu-view' %}">
                            <img className="img-responsive" src="{% static 'main/img/maxiSushiLogo13.png' %}"/>
                        </a>
                    </div>
                    <div className="col-sm-4 col-md-offset-1">
                        <p className="working-hours">
                            <span>Принимаем заказы</span>
                            <span>с 10:00 до 22:45</span>
                        </p>
                        <p className="minimal-order">Минимальный заказ от&nbsp;3000&nbsp;〒</p>
                    </div>
                    <div className="col-sm-4">
                        <p className="our-phone">
                            <span>Телефон для заказов:</span>
                            <span><a href="tel:+77273573030">+7 (727) 357 30 30</a></span>
                        </p>
                        <p className="our-phone visible-xs">
                            <span>Мобильный:</span>
                            <span><a href="tel:+77757210135">+7 (775) 721 01 35</a></span>
                        </p>
                        <p className="social-links">
                            <span>Мы в сети:</span>
                            <a href="https://www.facebook.com/Доставка-суши-MaxiSushi-568292479939728/">
                                <i className="mdi mdi-facebook-box" aria-hidden="true"></i>
                            </a>
                            <a href="https://instagram.com/maxi.sushi/"><i className="mdi mdi-instagram"
                                                                           aria-hidden="true"></i></a>
                            <a href="https://vk.com/club79840974"><i className="mdi mdi-vk" aria-hidden="true"></i></a>
                        </p>
                    </div>
                </div>
            </header>
        )
    }
}
