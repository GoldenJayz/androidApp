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
import Card from './Components/MusicPlayer/Card';

// UseEffect for when the app loads it grabs all the songs and asynchronously adds all the songs. Fetches from API to see what songs are availible
// Use the components state in order to store the song data

const App: () => JSX.Element = () => {

  React.useEffect(() => {
    // Cant manipulate the state from the parent
    // Just iterate through a list that you fetch from the api then pass the data as a prop
    fetch('http://192.168.1.17:3000/songs')
    .then(res => res.json())
    .then((body) => {
      for (let i = 0; i < body.length; i++) {
        let song = body[i]
        console.log(song);
      }
    });
    try {
      SetupService();
    }
    catch (e) {

    }

  }, []);

  return (
    <View style={styles.body}>

      <View style={styles.container}>
        <Card song='bob' />
        <Card song='dylan' />
      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    backgroundColor: '#121212',
    height: '100%',
  },

  container: {
    flexDirection: 'row'
  },

  row: {
    flexDirection: 'row'
  }
});


export default App;
