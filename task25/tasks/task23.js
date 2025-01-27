import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import MyClassPage from '../components/component23'; 

export default function App() {
  const [text, setText] = useState('');  
  const [showPage, setShowPage] = useState(false);  

  const handleTextChange = (newText) => {
    setText(newText);  
  };

  return (
    <View style={styles.container}>
      <Text style={styles.displayedText}>{text}</Text>

      <Button 
        title={showPage ? "Hide" : "Show"} 
        onPress={() => setShowPage(!showPage)}  
      />

      {showPage && <MyClassPage onTextChange={handleTextChange} />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
  },
  displayedText: {
    fontSize: 20,
    marginBottom: 20,
    color: '#333',
  },
});
