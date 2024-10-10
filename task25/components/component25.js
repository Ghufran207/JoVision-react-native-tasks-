import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class MyClassPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '', 
    };
  }

  updateText = (newText) => {
    this.setState({ text: newText });
  };

  render() {
    return (
      <View style={styles.pageContainer}>
        <Text style={styles.textComponent}>{this.state.text}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  pageContainer: {
    marginTop: 20,
    padding: 20,
    backgroundColor: '#e0e0e0',
    borderRadius: 10,
  },
  textComponent: {
    fontSize: 18,
    color: '#333',
  },
});

export default MyClassPage;
