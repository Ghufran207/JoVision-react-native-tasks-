import React, { useState } from 'react';
import {ActivityIndicator, View, Text, Button, StyleSheet } from 'react-native';

const Task18 = () => {
    const [isLoading, setIsLoading] = useState(true);
    
    setTimeout(() => {
        setIsLoading(false);
      }, 3000);
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        {isLoading ? (
          <ActivityIndicator size="large" color="#0000ff" />
          
        ) : (
          <Text>Ghufran Awawdeh</Text>   
  
        )}
      </View>
    );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
  },
  text: {
    marginTop: 20,
    fontSize: 18,
    color: '#333',
  },
});

export default Task18;
