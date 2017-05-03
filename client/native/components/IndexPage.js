import React from 'react';
import { connect } from 'react-redux';
import { View, Text } from 'react-native';


export class IndexPage extends React.Component {
    static defaultProps = {
        foodCategories: [],
    };

    render() {
        return (
            <View>
                {
                    this.props.foodCategories.map(
                        cat => <Text key={cat.slug}>{cat.slug}</Text>
                    )
                }
            </View>
        );
    }
}

export default connect(
    state => ({
        foodCategories: state.entities.foodCategories,
    }),
)(IndexPage)
