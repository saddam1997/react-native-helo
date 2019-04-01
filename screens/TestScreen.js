import React from 'react';
import { ExpoConfigView } from '@expo/samples';
import {
  Platform,
  StyleSheet,
  Text,
  View,
} from 'react-native';
//import Video from 'react-native-video';

export default class TestScreen extends React.Component {
  static navigationOptions = {
    title: 'Test FIle',
  };

  render() {
    /* Go ahead and delete ExpoConfigView and replace it with your
     * content, we just wanted to give you a quick view of your config */
      return <View style={{ height: 200, backgroundColor: '#336699', justifyContent: 'center', alignItems: 'center' }}>
        {/* <Video source={{uri: "https://vjs.zencdn.net/v/oceans.mp4"}} /> */}
      </View>
  }
}
