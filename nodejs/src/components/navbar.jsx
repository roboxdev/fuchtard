import React from 'react';
import {Link} from 'react-router-dom';


export class NavBar extends React.Component {
    state = {
        selectedIndex: 0,
    };

    select = (index) => this.setState({selectedIndex: index});

    render() {
        return (
            <div>
                <Link to="/">home</Link>
                <Link to="/cart">cart</Link>
                <Link to="/checkout">checkout</Link>
            </div>
        )
    }
}