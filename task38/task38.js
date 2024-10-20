import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import ComponentOne from '../components/componentOnetask38';
import ComponentTwo from '../components/componentTwotask38';
import { TextContext } from '../components/TextContext';

const App = () => {
    const [text, setText] = useState('');

    return (
        <TextContext.Provider value={{ text, setText }}>
            <View style={styles.container}>
                <ComponentOne />
                <ComponentTwo index={0} />
                <ComponentTwo index={1} />
                <ComponentTwo index={2} />
                <ComponentTwo index={3} />
            </View>
        </TextContext.Provider>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#f8f8f8',
    },
});

export default App;
