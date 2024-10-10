import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, ActivityIndicator } from 'react-native';

export default function App() {
  const [ipAddress, setIpAddress] = useState(''); 
  const [isLoading, setIsLoading] = useState(false); 

  const fetchIpNonBlocking = async () => {
    try {
      const response = await fetch('https://api.ipify.org?format=json');  
      const data = await response.json();
      setIpAddress(data.ip);  
    } catch (error) {
      console.error('Error fetching IP:', error);
    }
  };

  const fetchIpBlocking = async () => {
    setIsLoading(true);  
    try {
      const response = await fetch('https://api.ipify.org?format=json');  
      const data = await response.json();
      setIpAddress(data.ip);  
    } catch (error) {
      console.error('Error fetching IP:', error);
    } finally {
      setIsLoading(false);  
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Your IP Address: {ipAddress || 'Not fetched yet'}</Text>

      <Button title="Fetch IP (Non-blocking)" onPress={fetchIpNonBlocking} />

      <Button
        title="Fetch IP (Blocking)"
        onPress={fetchIpBlocking}
        disabled={isLoading}  
      />

      {isLoading && <ActivityIndicator size="large" color="#0000ff" style={styles.loader} />}
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
  text: {
    fontSize: 18,
    marginBottom: 20,
    color: '#333',
  },
  loader: {
    marginTop: 20,
  },
});
