import * as React from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  ImageBackground,
} from "react-native";
import TrackPlayer from "react-native-track-player";
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';

interface PlayButtonProps {}

const PlayButton: React.FC<PlayButtonProps> = ({}: PlayButtonProps) => {
  const [playing, setPlaying] = React.useState(false);


  return (
    <View>
      <TouchableWithoutFeedback
        onPress={() => {
          console.log(playing);

          if (playing == false) {
            TrackPlayer.add([
              {
                url: "https://rntp.dev/example/Longing.mp3",
                title: "Longing",
                artist: "David Chavez",
                artwork: "https://rntp.dev/example/Longing.jpeg",
                duration: 143,
              },
            ]);
            TrackPlayer.play();
          } else if (playing == true) {
            TrackPlayer.pause();
          }

          setPlaying(!playing);
        }}
      >

        <FontAwesome6
            name={playing ? 'pause': 'play'}
            size={48}
        />

        {/* <ImageBackground
          style={styles.ImageStyle}
          source={require("../Data/Images/thing.jpg")}
        ></ImageBackground> */}
      </TouchableWithoutFeedback>
    </View>
  );
};

const styles = StyleSheet.create({
  ImageStyle: {
    height: 150,
    width: "100%",
  },
});

export default PlayButton;
