import React, { useState, useEffect } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

const ComponentOne = () => {
    const dispatch = useDispatch();
    const savedText = useSelector(state => state.savedText);
    const [inputText, setInputText] = useState(savedText);

    const handleTextChange = (text) => {
        setInputText(text);
        dispatch({ type: 'SET_TEXT', payload: text });
    };

    useEffect(() => {
        if (inputText !== savedText) {
            setInputText(savedText);
        }
    }, [savedText]);

    return (
        <View style={styles.container}>
            <TextInput
                value={inputText}
                onChangeText={handleTextChange}
                placeholder="Enter text here"
                style={styles.input}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginVertical: 10,
        padding: 10,
    },
    input: {
        height: 40,
        borderColor: '#ccc',
        borderWidth: 1,
        paddingHorizontal: 8,
    },
});

export default ComponentOne;
