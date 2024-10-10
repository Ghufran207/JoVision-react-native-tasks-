import React, { useState } from 'react'; 
import { View, Button, StyleSheet } from 'react-native';
import MyFunctionPage from '../components/component21'; 

export default function App() {
  const [showPage, setShowPage] = useState(false); 

  const handlePress = () => {
    setShowPage(!showPage); 
  };

  return (
    <View style={styles.container}>
      <Button title="Show" onPress={handlePress} />

      {showPage && <MyFunctionPage />}
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
});
