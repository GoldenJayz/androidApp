import * as React from 'react';
import {Text, View, StyleSheet, ImageBackground, Image, TouchableWithoutFeedback} from 'react-native';
import MusicPlayer from './MusicPlayer';
import * as songData from '../../Data/playlist.json';

interface CardProps {
  song: string
}

const Card: React.FC<CardProps> = ({song}: CardProps) => {
  return (
    <TouchableWithoutFeedback onPress={() => {
      /* 
        Depending on the card being clicked a different song will play
      */
      console.log('fart')
    }}>
      <View>
        <ImageBackground style={styles.ImageStyles} source={require('../../Data/Images/box.png')}>
          <Image style={styles.image} source={{
            uri: 'https://rntp.dev/example/Longing.jpeg'
          }} />
          <Text>{ song }</Text>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({
  ImageStyles: {
    height: 100,
    width: 100,
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100
  },

  image: {
    position: 'relative',
    width: 75,
    height: 75
  }
});

export default Card;
