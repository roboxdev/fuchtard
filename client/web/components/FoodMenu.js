import React from 'react';
import {connect} from 'react-redux';
import { NavLink } from 'react-router-dom';
import {List, ListItem} from 'react-toolbox/lib/list';

import styles from 'styles/FoodMenu.css';
import { visibleCategoriesSelector } from 'core/reducers/categories';


const FoodMenu = ({categories}) => (
  <div>
    <nav>
      <List>
        {categories.map(
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
);


export default connect(
    state => ({
        categories: visibleCategoriesSelector(state),
    })
)(FoodMenu)