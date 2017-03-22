import React from 'react';
import {connect} from 'react-redux';
import { getFoodItemsOfCategory } from 'selectors/app'
import { Grid, Row, Col } from 'react-flexbox-grid';
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
                <Row>
                    {foodItems.map(
                        food =>
                            <Col xs={12}
                                 md={4}
                                 lg={3}
                                 key={food.url}
                            >
                                <FoodItem food={food}/>
                            </Col>
                    )}
                </Row>
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
                <Grid fluid>
                    {this.props.foodCategories.map(
                        (category) =>
                            <FoodCategory
                                key={category.url}
                                category={category}
                            />
                    )}
                </Grid>
            </div>
        )
    }
}
