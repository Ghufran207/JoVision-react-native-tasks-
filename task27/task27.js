
import React, { useState } from 'react';
import { View, Button, Image, StyleSheet, Alert } from 'react-native';

const images = {
    1: require('./assests/fda2bc85d7e6693f6bafacbc48232272.png'),
      2: require('./assests/th(1).png'),
      3: require('./assests/th.png'),
};

export default function App() {
  const [selectedImage, setSelectedImage] = useState(images[1]); 

  const chooseImage = () => {
    Alert.alert(
      "Select Image",
      "Pick the number of an image (1, 2, or 3):",
      [
        { text: "1", onPress: () => setSelectedImage(images[1]) },
        { text: "2", onPress: () => setSelectedImage(images[2]) },
        { text: "3", onPress: () => setSelectedImage(images[3]) },
        { text: "Cancel", style: "cancel" },
      ],
      { cancelable: true }
    );
  };

  return (
    <View style={styles.container}>
      <Image source={selectedImage} style={styles.image} />
      <Button title="Choose Image" onPress={chooseImage} />
    </View>
  );
}

// Styles for the app
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
  },
  image: {
    width: 300,
    height: 300,
    marginBottom: 20,
    borderRadius: 10,
  },
});


