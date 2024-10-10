import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const MyFunctionPage = () => {
  useEffect(() => {
    console.log('MyFunctionPage loaded'); 

    return () => {
      console.log('MyFunctionPage unloaded'); 
    };
  }, []); 

  return (
    <View style={styles.pageContainer}>
      <Text style={styles.pageText}>Welcome to MyFunctionPage!</Text>
    </View>
  );
};

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

export default MyFunctionPage;
