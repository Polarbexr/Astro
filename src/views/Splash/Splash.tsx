import React from 'react';
import { StatusBar, View } from 'react-native';
import styles from '../../styles/styles';
import LottieView from 'lottie-react-native';
import { Text } from 'react-native-paper';

export const Splash = () => {
  return (
    <View style={{...styles.container, justifyContent:'space-evenly', backgroundColor: 'white', paddingBlock: '50%' }}>
        <StatusBar
            translucent
            barStyle={'light-content'}
            backgroundColor={'transparent'}
        />
        <View >
          <Text style={styles.title} variant="displayLarge">Astro-<Text style={{...styles.title, color:'blue'}}>Music</Text></Text>
        </View>
        <LottieView
            source={require('../../assets/animations/Astronauta.json')}
            autoPlay
            loop
            style={{height: '80%', width:'100%', alignSelf:'center'}}
            resizeMode="contain"
        />
    </View>
  );
};
