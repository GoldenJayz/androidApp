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

import React from "react";
import "react-native";
import { View, Text, StyleSheet, FlatList } from "react-native";
import MusicPlayer from "./Components/MusicPlayer/MusicPlayer";
import { SetupService } from "./services/SetupService";
import Card from "./Components/MusicPlayer/Card";

// UseEffect for when the app loads it grabs all the songs and asynchronously adds all the songs. Fetches from API to see what songs are availible
// Use the components state in order to store the song data



const App: () => JSX.Element = () => {
  let [data, setData]: any = React.useState();
  let [loading, setLoading] = React.useState(true);
  let [row, setRow]: any = React.useState(0);

  const fetchData = async () => {
    const resp = await fetch("http://192.168.1.19:3000/songs");
    const data = await resp.json();
    setData(data);
    setLoading(false);
  };

  React.useEffect(() => {
    // Cant manipulate the state from the parent
    // Just iterate through a list that you fetch from the api then pass the data as a prop
    fetchData();
    try {
      SetupService();
    } catch (e) {}
  }, []);

  return (
    <View style={styles.body}>
      {loading ? (<Text>loading</Text>) : <FlatList data={data} renderItem={({item}) => <Card song={item} />} numColumns={3}  />}

    </View>
  );
};



const styles = StyleSheet.create({
  body: {
    backgroundColor: "#121212",
    height: "100%",
    justifyContent: 'center',
    alignItems: 'center'
  },

  container: {
    flexDirection: "row",
    flexBasis: 100,
  },
});

export default App;
