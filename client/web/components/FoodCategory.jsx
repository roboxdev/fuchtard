import React from 'react';
import {connect} from 'react-redux';

import {getFoodItemsOfCategory, getCategoryBySlug} from 'core/selectors/app';
import FoodItem from './FoodItem';
import { PageTitleUpdater } from './PageTitle';

import styles from 'styles/FoodCategory.css';


export class FoodCategory extends React.Component {
    static defaultProps = {
        category: {
            title: '',
        }
    };

    render() {
        const {category, foodItems, category: {title}, ...rest} = this.props;
        return <div className={styles.foodItemCategory}>
            <PageTitleUpdater title={title} />
            {foodItems.map(
                food =>
                    <FoodItem
                        food={food}
                        key={food.url}
                        category={category}
                        {...rest}
                    />
            )}
        </div>
    }
}


export default connect(
    (state, props) => ({
        category: getCategoryBySlug(state, props),
        foodItems: getFoodItemsOfCategory(state, props),
    })
)(FoodCategory);
