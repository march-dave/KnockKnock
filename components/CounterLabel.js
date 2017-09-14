import React, { Component } from 'react';
import {View, Text} from 'react-native';

class CounterLabel extends Component {
    render() {
        return (
            <View>
                <Text>Counter {this.props.name}</Text>
            </View>
        );
    }
}

export default CounterLabel;