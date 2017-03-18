import React from 'react';
import {connect} from 'react-redux';

import {FoodItem} from 'components/food-item';


class FoodCategory extends React.Component {
    render() {
        const {category, foodItems} = this.props;
        return (
            <div>
                <div>{category.title} →</div>
                {foodItems.map(
                    food => <FoodItem key={food.url} food={food}/>
                )}
            </div>
        )
    }
}


@connect(
    state => ({
        foodCategories: state.foodCategories,
        foodItems: state.foodItems,
    })
)
export class FoodMenu extends React.Component {
    getFoodItemsOfCategory = (categoryURL) => {
        const {foodItems} = this.props;
        return foodItems.filter(v => v.category === categoryURL);
    };

    render() {
        return (
            <div>
                {this.props.foodCategories.map(
                    (category) => <FoodCategory
                        key={category.url}
                        category={category}
                        foodItems={this.getFoodItemsOfCategory(category.url)}
                    />
                )}
            </div>
        )
    }
}
