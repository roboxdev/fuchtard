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
                    (category) =>
                        <p key={category.url}>
                            <Link to={`/${category.slug}/`}>{category.title}</Link>
                        </p>
                )}
            </div>
        )
    }
}
