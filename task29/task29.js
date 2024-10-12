import React, { useRef, useState } from 'react';
import { View, FlatList, Image, Alert, StyleSheet, Pressable, Button, Modal, TextInput } from 'react-native';

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
  const flatListRef = useRef(null); 
  const [modalVisible, setModalVisible] = useState(false); 
  const [inputValue, setInputValue] = useState(''); 

  const handleImagePress = (index) => {
    Alert.alert(`You have selected image: ${index + 1}`);
  };

  const handleScrollToIndex = () => {
    const index = parseInt(inputValue, 10) - 1; 
    if (index >= 0 && index < imageData.length) {
      flatListRef.current.scrollToIndex({ animated: true, index });
      setModalVisible(false); 
      setInputValue(''); 
    } else {
      Alert.alert("Invalid index. Please enter a number between 1 and 10.");
    }
  };

  const renderItem = ({ item, index }) => (
    <Pressable onPress={() => handleImagePress(index)}>
      <Image source={item.src} style={styles.image} />
    </Pressable>
  );

  return (
    <View style={styles.container}>
      <Button title="Scroll to Image" onPress={() => setModalVisible(true)} />

      <FlatList
        ref={flatListRef} 
        data={imageData}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
        horizontal={true} 
        showsHorizontalScrollIndicator={false} 
      />

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <TextInput
              style={styles.input}
              placeholder="Enter image index (1-10)"
              keyboardType="numeric" 
              value={inputValue}
              onChangeText={setInputValue} 
            />
            <Button title="OK" onPress={handleScrollToIndex} />
            <Button title="Cancel" onPress={() => setModalVisible(false)} />
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    padding: 20,
  },
  image: {
    width: 100,
    height: 100,
    margin: 10,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: '#ccc',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', 
  },
  modalContent: {
    width: '80%',
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    alignItems: 'center',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    width: '100%',
    paddingHorizontal: 10,
  },
});
