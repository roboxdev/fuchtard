import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Route} from 'react-router-dom';
import {getFoodItemsOfCategory, getCategoryBySlug} from 'selectors/app'
import FoodItem from 'components/FoodItem';
import FoodItemDetailed from 'components/FoodItemDetailed';

import styles from 'styles/FoodCategory.css';


export class FoodCategory extends React.Component {
    static propTypes = {
        category: PropTypes.shape({
            title: PropTypes.string.isRequired,
        })
    };
    static defaultProps = {
        category: {
            title: '',
        }
    };

    render() {
        const {category, foodItems, match, ...rest} = this.props;
        return <div>
            <Route path={`/:slug/:foodSlug/`} component={FoodItemDetailed}/>
            <Route exact path={match.url} render={() => (
                <div>
                    <div className={styles.foodItemCategory}>
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
                </div>
            )}/>
        </div>
    }
}


export default connect(
    (state, props) => ({
        category: getCategoryBySlug(state, props),
        foodItems: getFoodItemsOfCategory(state, props),
    })
)(FoodCategory);
