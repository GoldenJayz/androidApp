/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

// https://reactnative.dev/docs/network

import React from 'react';
import 'react-native';
import {View, Text, StyleSheet} from 'react-native';
import MusicPlayer from './Components/MusicPlayer/MusicPlayer';
import { SetupService } from './services/SetupService';


const App: () => JSX.Element = () => {

  React.useEffect(() => {
    try {
      SetupService();
    }
    catch (e) {}

  }, []);

  return (
    <View style={styles.body}>
      <Text>Testing</Text>
      <MusicPlayer />
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    backgroundColor: '#121212',
    height: '100%',
  }
});


export default App;
