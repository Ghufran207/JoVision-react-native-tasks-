import React, { useState } from 'react';
import { View, FlatList, Image, Alert, Pressable, StyleSheet, Text } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

// Sample images data
const initialImages = [
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

const Item = ({ image, onRemove, onDuplicate }) => (
  <View style={styles.item}>
    <Pressable style={styles.duplicateButton} onPress={() => onDuplicate(image)}>
      <Ionicons name="duplicate" size={24} color="blue" />
    </Pressable>
    <Image source={image.src} style={styles.image} />
    <Text style={styles.imageTitle}>Image ID: {image.id}</Text>
    <Pressable style={styles.deleteButton} onPress={() => onRemove(image.id)}>
      <Ionicons name="trash-outline" size={24} color="red" />
    </Pressable>
  </View>
);

const App = () => {
  const [imageList, setImageList] = useState(initialImages);

  const removeImage = (id) => {
    Alert.alert(
      'Confirm Image Removal',
      'Are you sure you want to remove this image?',
      [
        { text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel' },
        {
          text: 'Remove',
          onPress: () => {
            console.log(`Removing image with ID: ${id}`); 
            const updatedList = imageList.filter((image) => image.id !== id);
            console.log('Updated Image List:', updatedList); 
            setImageList(updatedList);
          },
        },
      ],
      { cancelable: false }
    );
  };

  const duplicateImage = (image) => {
    const newImage = {
      id: imageList.length + 1, 
      src: image.src,
    };
    
    setImageList([...imageList, newImage]);
    console.log('Duplicated Image:', newImage); 
  };

  const renderItem = ({ item }) => (
    <Item image={item} onRemove={removeImage} onDuplicate={duplicateImage} />
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={imageList}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
  },
  item: {
    flex: 1,
    margin: 10,
    borderRadius: 5,
    backgroundColor: '#eee',
    overflow: 'hidden',
    flexDirection: 'row',
    justifyContent: 'space-between', 
    alignItems: 'center', 
  },
  image: {
    width: '60%',
    height: 200,
    resizeMode: 'cover',
  },
  deleteButton: {
    padding: 10,
  },
  duplicateButton: {
    padding: 10,
  },
  imageTitle: {
    marginTop: 5,
    fontSize: 16,
    color: '#000',
    textAlign: 'center', 
  },
});

export default App;
