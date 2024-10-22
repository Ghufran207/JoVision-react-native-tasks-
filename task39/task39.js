import React, { useState } from 'react';
import { Provider } from 'react-redux';
import { View, Button, StyleSheet } from 'react-native';
import store from '../store/store'; 
import ComponentOne from '../components/componenttask39';

const App = () => {
    const [isComponentVisible, setComponentVisible] = useState(true);

    const toggleComponent = () => {
        setComponentVisible(!isComponentVisible);
    };

    return (
        <Provider store={store}>
            <View style={styles.container}>
                <Button title={isComponentVisible ? "Hide Component" : "Show Component"} onPress={toggleComponent} />
                {isComponentVisible && <ComponentOne />}
            </View>
        </Provider>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 20,
        backgroundColor: '#f8f8f8',
    },
});

export default App;
