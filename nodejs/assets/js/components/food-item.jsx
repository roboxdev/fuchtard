import React from 'react';
import {connect} from 'react-redux';

class FoodItem extends React.Component {
    render() {
        const food = this.props.food;
        return (
            <div>
                {food.get('title')}
                <button>+</button>
                <span>q</span>
                <button>-</button>
            </div>
        )
    }
}

export const ConnectedFoodItem = connect(
    function mapStateToProps(state) {
        return {
            // foodMenu: state.get('foodMenu'),
        }
    },
    function mapDispatchToProps(dispatch) {
        return {
            // selectVideo: videoSlug => dispatch(actions.selectVideo(videoSlug)),
            // selectLivestream: videoSlug => dispatch(actions.selectLivestream()),
            // switchToNextInPlaylist: () => dispatch(actions.switchToNextInPlaylist()),
        }
    }
)(FoodItem);