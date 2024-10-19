import React, { useState } from 'react';
import { ScrollView, Text, StyleSheet, View, RefreshControl } from 'react-native';

// Function to generate a random word
function generateRandomWord(length) {
    let result = '';
    const characters = 'abcdefghijklmnopqrstuvwxyz';
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
}

const App = () => {
    const [randomWords, setRandomWords] = useState(generateRandomWords(100));
    const [refreshing, setRefreshing] = useState(false);

    function generateRandomWords(count) {
        return Array.from({ length: count }, () => generateRandomWord(5));
    }

    const onRefresh = () => {
        setRefreshing(true);
        setTimeout(() => {
            setRandomWords(generateRandomWords(100));
            setRefreshing(false);
        }, 2000); 
    };

    return (
        <View style={styles.container}>
            <ScrollView
                refreshControl={
                    <RefreshControl
                        refreshing={refreshing}
                        onRefresh={onRefresh}
                    />
                }
            >
                {randomWords.map((word, index) => (
                    <Text key={index} style={styles.text}>
                        {word}
                    </Text>
                ))}
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#fff',
    },
    text: {
        fontSize: 20,
        marginVertical: 5,
    },
});

export default App;
