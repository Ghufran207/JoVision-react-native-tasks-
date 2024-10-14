import React, { useRef, useState } from 'react';
import { View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import Video from 'react-native-video';

const VideoPlayer = () => {
  const videoRef = useRef(null); 
  const [paused, setPaused] = useState(true);

  const togglePlayPause = () => {
    setPaused(prev => !prev);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={togglePlayPause} style={styles.videoContainer}>
        <Video
          ref={videoRef}
          source={require('./assests/qr.mp4')} 
          style={styles.video}
          poster="https://tse1.mm.bing.net/th?id=OIP.LGyajN_-nti_klPw87zlhgHaEe&pid=Api&P=0&h=220" 
          posterResizeMode="cover"
          paused={paused} 
          resizeMode="contain"
          controls={false} 
        />
        {paused && ( 
          <Image
            source={{ uri: 'https://tse1.mm.bing.net/th?id=OIP.LGyajN_-nti_klPw87zlhgHaEe&pid=Api&P=0&h=220' }}
            style={styles.poster}
          />
        )}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
  },
  videoContainer: {
    width: '100%',
    height: 300,
  },
  video: {
    width: '100%',
    height: '100%',
  },
  poster: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
  },
});

export default VideoPlayer;
