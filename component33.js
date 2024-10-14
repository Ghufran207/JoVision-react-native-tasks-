import React from 'react';
import { SafeAreaView } from 'react-native';
import VideoPlayer from './VideoPlayer';
const App = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <VideoPlayer />
    </SafeAreaView>
  );
};

export default App;
