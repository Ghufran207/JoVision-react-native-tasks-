import React, { useState, useEffect } from 'react';
import { View, StyleSheet, TextInput, Button, Text } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const App = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [country, setCountry] = useState('');
  const [errorMessage, setErrorMessage] = useState(null);

  const handleSubmit = async () => {
    try {
      if (!name || !age || !country) {
        setErrorMessage('Please enter your name, age, and country.');
        return;
      }

      const timestamp = new Date().toISOString();
      const userInfo = { name, age, country, timestamp };
      await AsyncStorage.setItem('userData', JSON.stringify(userInfo));
      setName('');
      setAge('');
      setCountry('');
      setErrorMessage(null);
    } catch (error) {
      console.error(error);
      setErrorMessage('An error occurred. Please try again.');
    }
  };

  const retrieveData = async () => {
    try {
      const storedData = await AsyncStorage.getItem('userData');
      if (storedData) {
        const parsedData = JSON.parse(storedData);
        const oneMinuteAgo = new Date(Date.now() - 60000);

        if (new Date(parsedData.timestamp) > oneMinuteAgo) {
          setName(parsedData.name);
          setAge(parsedData.age.toString());
          setCountry(parsedData.country);
        }
      }
    } catch (error) {
      console.error(error);
      setErrorMessage('An error occurred while retrieving data.');
    }
  };

  useEffect(() => {
    retrieveData();
  }, []);

  return (
    <View style={styles.container}>
      {errorMessage && <Text style={styles.error}>{errorMessage}</Text>}
      <Text>Name:</Text>
      <TextInput
        style={styles.textInput}
        value={name}
        onChangeText={setName}
      />
      <Text>Age:</Text>
      <TextInput
        style={styles.textInput}
        keyboardType="numeric"
        value={age}
        onChangeText={setAge}
      />
      <Text>Country:</Text>
      <TextInput
        style={styles.textInput}
        value={country}
        onChangeText={setCountry}
      />
      <Button title="Submit" onPress={handleSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  textInput: {
    marginBottom: 10,
  },
  error: {
    color: 'red',
    marginBottom: 10,
  },
});

export default App;