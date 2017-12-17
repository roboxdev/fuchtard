import React from 'react';
import { connect } from 'react-redux';

import { Link } from 'react-router-dom';

import { getFoodItemsBySlugOrID } from 'core/selectors/app';
import { getCategoryBySlug } from 'core/reducers/products';

import FoodItem from './FoodItem';


export class FoodItemDetailed extends React.Component {
    static defaultProps = {
        food: {},
        category: {},
    };

    render() {
        const {food, category} = this.props;
        return <div>
            <Link to={`/${category.slug}/`}>← {category.title}</Link>
            <FoodItem food={food} category={category}/>
        </div>
    }
}

export default connect(
    (state, props) => ({
        food: getFoodItemsBySlugOrID(state, props),
        category: getCategoryBySlug(state, props),
    })
)(FoodItemDetailed)