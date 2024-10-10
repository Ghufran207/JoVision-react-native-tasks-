import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

class MyClassPage extends React.Component {
  componentDidMount() {
    console.log('MyClassPage loaded');
  }

  componentWillUnmount() {
    console.log('MyClassPage unloaded');
  }

  render() {
    return (
      <View style={styles.pageContainer}>
        <Text style={styles.pageText}>Ghufran Awawdeh</Text>
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

// Export the component
export default MyClassPage;
