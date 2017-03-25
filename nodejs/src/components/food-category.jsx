import React from 'react';
import {connect} from 'react-redux';
import {Route} from 'react-router-dom';
import {getFoodItemsOfCategory, getCategoryBySlug} from 'selectors/app'
import {FoodItem, FoodItemDetails} from 'components/food-item';


@connect(
    (state, props) => ({
        category: getCategoryBySlug(state, props),
        categoryURL: props.match.url,
        foodItems: getFoodItemsOfCategory(state, props),
    })
)
export class FoodCategory extends React.Component {
    render() {
        const {category, foodItems, match, ...rest} = this.props;
        return (category
                ? <div>
                    <Route path={`/:slug/:foodSlug/`} component={FoodItemDetails}/>
                    <Route exact path={match.url} render={() => (
                        <div>
                            <div>{category.title} →</div>
                            <div>
                                {foodItems.map(
                                    food =>
                                        <FoodItem
                                            food={food}
                                            key={food.url}
                                            {...rest}
                                        />
                                )}
                            </div>
                        </div>
                    )}/>

                </div>
                : null
        )
    }
}