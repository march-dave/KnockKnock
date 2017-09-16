import React, { Component } from 'react';
import {View, Text} from 'react-native';

class CounterInput extends Component {

    constructor(props) {
        super(props);
        this.state = {
            total: 0
        }
    }

    onIncremenet(diff) {
        this.setState(
           { total : diff }
        )
    }

    render() {

        return (
            <View>
                <Text>Text Input</Text>
                <input onPress={this.onIncremenet.bind(this)} />
            </View>
        );
    }
}

export default CounterInput;