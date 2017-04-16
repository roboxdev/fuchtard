import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {List, ListItem} from 'react-toolbox/lib/list';


export class FoodMenu extends React.Component {
    render() {
        return (
            <div>
                <nav>
                    <List>
                        {this.props.foodCategories.map(
                            (category) =>
                            <Link key={category.url} to={`/${category.slug}/`}>
                                    <ListItem
                                        key={category.url}
                                        caption={category.title}
                                        />
                            </Link>
                        )}
                    </List>
                </nav>
            </div>
        )
    }
}


export default connect(
    state => ({
        foodCategories: state.entities.foodCategories,
    })
)(FoodMenu)