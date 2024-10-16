import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import useCurrentTime from '../components/component34'; 

const App = () => {
  const [isTimeVisible, setIsTimeVisible] = useState(true); 
  const currentTime = useCurrentTime();

  return (
    <View style={styles.container}>
      <Button
        title={isTimeVisible ? "Hide Time" : "Show Time"}
        onPress={() => setIsTimeVisible(!isTimeVisible)} 
      />
      {isTimeVisible && (
        <View style={styles.timeContainer}>
          <Text style={styles.timeText}>
            {currentTime.toLocaleTimeString()}
          </Text>
          <Text style={styles.dateText}>
            {currentTime.toLocaleDateString()} 
          </Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  timeContainer: {
    marginTop: 20,
  },
  timeText: {
    fontSize: 48,
    fontWeight: 'bold',
  },
  dateText: {
    fontSize: 24,
    color: '#888',
    marginTop: 10,
  },
});

export default App;
