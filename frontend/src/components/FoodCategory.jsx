import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Route} from 'react-router-dom';
import {Card, CardTitle} from 'react-toolbox/lib/card';
import {getFoodItemsOfCategory, getCategoryBySlug} from 'selectors/app'
import FoodItem from 'components/FoodItem';
import FoodItemDetailed from 'components/FoodItemDetailed';
import Footer from 'components/Footer';
import Header from 'components/Header';

import styles from '../styles/food-category.css'


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
            <Header />
            <Route path={`/:slug/:foodSlug/`} component={FoodItemDetailed}/>
            <Route exact path={match.url} render={() => (
                <div>
                    <div>
                        <Card>
                            <CardTitle
                                title={category.title}
                            />
                        </Card>
                    </div>
                    <div styleName="styles.food-item-category">
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
            <Footer/>
        </div>
    }
}


export default connect(
    (state, props) => ({
        category: getCategoryBySlug(state, props),
        foodItems: getFoodItemsOfCategory(state, props),
    })
)(FoodCategory);
