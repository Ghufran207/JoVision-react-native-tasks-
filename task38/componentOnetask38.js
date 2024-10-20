import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TextContext } from './TextContext';

class ComponentOne extends Component {
    static contextType = TextContext;

    render() {
        const { text } = this.context;
        return (
            <View style={styles.component}>
                <Text>Output: {text}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    component: {
        marginVertical: 10,
        padding: 10,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 5,
    },
});

export default ComponentOne;
