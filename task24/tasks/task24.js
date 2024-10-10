import React, { useRef, useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import MyFunctionPage from '../components/component24'; 

export default function App() {
  const [inputText, setInputText] = useState(''); 
  const myFunctionPageRef = useRef(null); 
  const handleTextChange = (newText) => {
    setInputText(newText);  
  };

  const updateChildText = () => {
    if (myFunctionPageRef.current) {
      myFunctionPageRef.current.updateText(inputText);  
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Typing..."
        value={inputText}
        onChangeText={handleTextChange} 
      />

      <Button title="Update Text" onPress={updateChildText} />

      <MyFunctionPage ref={myFunctionPageRef} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  input: {
    height: 40,
    borderColor: '#000',
    borderWidth: 1,
    width: '100%',
    paddingHorizontal: 10,
    marginBottom: 20,
  },
});
