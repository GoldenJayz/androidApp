import * as React from 'react';
import {Text, View, StyleSheet, ImageBackground, Image, TouchableWithoutFeedback} from 'react-native';
import MusicPlayer from './MusicPlayer';
import PlayButton from './PlayButton';
import TrackPlayer from "react-native-track-player";


import * as songData from '../../Data/playlist.json';

interface CardProps {
  song: Song;
}

interface Song {
  url: string;
  title: string;
  artist: string;
  artwork: string;
  duration: number;
}

const Card: React.FC<CardProps> = ({song}: CardProps) => {
  return (
    <TouchableWithoutFeedback onPress={async () => {
      /* 
        Depending on the card being clicked a different song will play
      */



    await TrackPlayer.pause();
    await TrackPlayer.reset();
    console.log('here')
    await TrackPlayer.add(song);
    await TrackPlayer.play();
     
     
      console.log('fart')
    }}>
      <View>
        <ImageBackground style={styles.ImageStyles} source={require('../../Data/Images/box.png')}>
          <Image style={styles.image} source={{
            uri: song.artwork
          }} />
          <Text>{ song.title }</Text>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({
  ImageStyles: {
    height: 150,
    width: 125,
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
    marginLeft: 10,
    marginTop: 10

  },

  image: {
    position: 'relative',
    width: 75,
    height: 75
  }
});

export default Card;
