import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

class MyClassPage extends React.Component {
  render() {
    return (
      <View >
        <Text style={styles.pageText}>Welcome to MyClassPage!</Text>
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
  pageText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
});

export default MyClassPage;
