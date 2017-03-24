import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';


@connect(
    state => ({
        foodCategories: state.foodCategories,
    })
)
export class FoodMenu extends React.Component {
    render() {
        return (
            <div>
                {this.props.foodCategories.map(
                    (category) => <Link to={`/${category.slug}/`} key={category.url}>{category.title}</Link>
                )}
            </div>
        )
    }
}
