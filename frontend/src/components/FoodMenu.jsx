import React from 'react';
import {connect} from 'react-redux';
import { NavLink, withRouter } from 'react-router-dom';
import {List, ListItem} from 'react-toolbox/lib/list';

import styles from 'styles/FoodMenu.css';


export class FoodMenu extends React.Component {
    render() {
        return (
            <div>
                <nav>
                    <List>
                        {this.props.foodCategories.map(
                            (category) =>
                                <NavLink key={category.url}
                                         to={`/${category.slug}/`}
                                         activeClassName={styles.activeLink}
                                >
                                    <ListItem
                                        key={category.url}
                                        caption={category.title}
                                    />
                                </NavLink>
                        )}
                    </List>
                </nav>
            </div>
        )
    }
}


export default withRouter(connect(
    state => ({
        foodCategories: state.entities.foodCategories,
    })
)(FoodMenu))