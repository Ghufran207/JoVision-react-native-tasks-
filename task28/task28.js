import React from 'react';
import { View, FlatList, Image, Alert, StyleSheet, Pressable } from 'react-native';

// List of image URIs (replace these with actual image paths or links)
const imageData = [
  { id: 1, src: require('./assests/fda2bc85d7e6693f6bafacbc48232272.png') },
  { id: 2, src: require('./assests/th(1).png') },
  { id: 3, src: require('./assests/th.png') },
  { id: 4, src: require('./assests/th(3).png') },
  { id: 5, src: require('./assests/th(4).png') },
  { id: 6, src: require('./assests/th(5).png') },
  { id: 7, src: require('./assests/th(6).png') },
  { id: 8, src: require('./assests/th(7).png') },
  { id: 9, src: require('./assests/th(8).png') },
  { id: 10, src: require('./assests/th(9).png') },
];

export default function App() {
  // Function to handle image selection
  const handleImagePress = (index) => {
    Alert.alert(`You have selected image: ${index + 1}`);
  };

  // Render each image in the FlatList
  const renderItem = ({ item, index }) => (
    <Pressable onPress={() => handleImagePress(index)}>
      <Image source={item.src} style={styles.image} />
    </Pressable>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={imageData}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
        horizontal={true} // Set FlatList to horizontal
        showsHorizontalScrollIndicator={false} // Hide scroll indicator
      />
    </View>
  );
}

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  image: {
    width: 100,
    height: 100,
    margin: 10,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: '#ccc',
  },
});