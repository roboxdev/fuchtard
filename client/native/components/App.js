import React from 'react';
import {Provider} from 'react-redux';
import { StyleSheet, Text, View, Button } from 'react-native';
import { restaurantSettings } from '../core/config';
import { store } from '../core/store';

import IndexPage from './IndexPage';


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ccc',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <View style={styles.container}>
                    <IndexPage/>
                    <Text>Open up App.js to start working on your app!</Text>
                    <Text>Shake that ass</Text>
                    <Text>{restaurantSettings.minimalOrderRequirement}</Text>
                    <Button title={'test2'} onPress={() => console.log('lol')}/>
                </View>
            </Provider>
        );
    }
}



