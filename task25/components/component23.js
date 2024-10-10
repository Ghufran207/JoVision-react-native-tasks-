import React, { Component } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

class MyClassPage extends Component {
  render() {
    return (
      <View style={styles.pageContainer}>
        <TextInput
          style={styles.input}
          placeholder="Typing..."
          onChangeText={this.props.onTextChange} 
        />
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
  input: {
    height: 40,
    borderColor: '#000',
    borderWidth: 1,
    paddingHorizontal: 10,
  },
});

export default MyClassPage;
