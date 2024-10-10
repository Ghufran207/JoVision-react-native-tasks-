import React, { forwardRef, useImperativeHandle, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const MyFunctionPage = forwardRef((props, ref) => {
  const [text, setText] = useState('');  

  useImperativeHandle(ref, () => ({
    updateText(newText) {
      setText(newText);  
    },
  }));

  return (
    <View style={styles.pageContainer}>
      <Text style={styles.textComponent}>{text}</Text>
    </View>
  );
});

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

export default MyFunctionPage;
