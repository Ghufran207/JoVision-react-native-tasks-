import React, { useContext, useState } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import ComponentOne from './componentOnetask38';  
import { TextContext } from './TextContext';

const ComponentTwo = ({ index }) => {
    const { setText } = useContext(TextContext);
    const [inputText, setInputText] = useState('');

    const handleInputChange = (text) => {
        setInputText(text);  
        setText(text); 
    };

    return (
        <View style={styles.component}>
            <Text>Component Two - {index + 1}</Text>
            <TextInput
                value={inputText}
                onChangeText={handleInputChange}
                placeholder={`Enter text for version ${index + 1}`}
                style={styles.input}
            />
            <ComponentOne />
        </View>
    );
};

const styles = StyleSheet.create({
    component: {
        marginVertical: 10,
        padding: 10,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 5,
    },
    input: {
        height: 40,
        borderColor: '#ccc',
        borderWidth: 1,
        marginBottom: 10,
        paddingHorizontal: 8,
    },
});

export default ComponentTwo;
