import React from 'react';
import {Link} from 'react-router-dom';
import styles from '../styles/navbar.styl';


export class NavBar extends React.Component {
    state = {
        selectedIndex: 0,
    };

    select = (index) => this.setState({selectedIndex: index});

    render() {
        return (
            <div styleName="sticky">
                <Link to="/"><i className="material-icons">build</i></Link>
                <Link to="/cart">Корзина</Link>
                <Link to="/checkout">Оформить</Link>
            </div>
        )
    }
}