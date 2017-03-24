import React from 'react';
import {connect} from 'react-redux';
import {getFoodItemsOfCategory, getCategoryBySlug} from 'selectors/app'
import {FoodItem} from 'components/food-item';


@connect(
    (state, props) => ({
        category: getCategoryBySlug(state, props),
        foodItems: getFoodItemsOfCategory(state, props),
    })
)
export class FoodCategory extends React.Component {
    render() {
        const {category, foodItems} = this.props;
        return (category
                ? <div>
                    <div>{category.title} →</div>
                    <div>
                        {foodItems.map(
                            food =>
                                <FoodItem food={food} key={food.url}/>
                        )}
                    </div>
                </div>
                : null
        )
    }
}