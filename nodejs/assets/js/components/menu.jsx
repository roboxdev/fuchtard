import React from 'react';
import {connect} from 'react-redux';

import {ConnectedFoodItem as FoodItem} from './food-item';


class FoodCategory extends React.Component {
    render() {
        const category = this.props.category;
        const food = category.get('food');
        return (
            <div>
                <div>{category.get('title')}</div> →
                {food.map(
                    (food, index) => <FoodItem key={index} food={food} />
                )}
            </div>
        )
    }
}

export class FoodMenu extends React.Component {
    render() {
        return (
            <div>
                {this.props.foodMenu.map(
                    (category, index) => <FoodCategory key={index} category={category} />
                )}
            </div>
        )
    }
}

export const ConnectedFoodMenu = connect(
    function mapStateToProps(state) {
        return {
            foodMenu: state.get('foodMenu'),
        }
    },
    function mapDispatchToProps(dispatch) {
        return {
            // selectVideo: videoSlug => dispatch(actions.selectVideo(videoSlug)),
            // selectLivestream: videoSlug => dispatch(actions.selectLivestream()),
            // switchToNextInPlaylist: () => dispatch(actions.switchToNextInPlaylist()),
        }
    }
)(FoodMenu);