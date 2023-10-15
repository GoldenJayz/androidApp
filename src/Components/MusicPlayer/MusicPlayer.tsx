import * as React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import { PlaybackService } from '../../services/PlaybackService';
import TrackPlayer, { Event } from 'react-native-track-player';
import PlayButton from './PlayButton';


interface MusicPlayerProps {

}

const MusicPlayer: React.FC<MusicPlayerProps> = ({}: MusicPlayerProps) => {

  return (
    <View>
      <PlayButton />
    </View>
  )
}

const styles = StyleSheet.create({});

export default MusicPlayer;
