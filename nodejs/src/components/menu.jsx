import React from 'react';
import {connect} from 'react-redux';
import { getFoodItemsOfCategory } from 'selectors/app'
import {FoodItem} from 'components/food-item';


@connect(
    (state, props) => ({
        foodItems: getFoodItemsOfCategory(state, props),
    })
)
class FoodCategory extends React.Component {
    render() {
        const {category, foodItems} = this.props;
        return (
            <div>
                <div>{category.title} →</div>
                <div>
                    {foodItems.map(
                        food =>
                            <FoodItem food={food} key={food.url}/>
                    )}
                </div>
            </div>
        )
    }
}


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
                        <FoodCategory
                            key={category.url}
                            category={category}
                        />
                )}
            </div>
        )
    }
}
