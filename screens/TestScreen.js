import React from 'react';
import { ExpoConfigView } from '@expo/samples';
import {
  Platform,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import { connect } from 'react-redux';

//import Video from 'react-native-video';
import { userActions } from '../redux/_actions';
class TestScreen extends React.Component {
  componentDidMount() {
    console.log("componentDidMount");
    let data={
      atype:'alluser'
    }
    this.props.dispatch(userActions.getAll(data));
  }
  static navigationOptions = {
    title: 'Test FIle',
  };

  render() {
    console.log("componentDidMount:::::::::::::::::::::::::::::::::::::::::::::::::::");
    /* Go ahead and delete ExpoConfigView and replace it with your
     * content, we just wanted to give you a quick view of your config */
      return <View style={{ height: 200, backgroundColor: '#336699', justifyContent: 'center', alignItems: 'center' }}>
        {/* <Video source={{uri: "https://vjs.zencdn.net/v/oceans.mp4"}} /> */}
      </View>
  }
}


function mapStateToProps(state) {
  const { users,  } = state;
  return {
    users
  };
}
export default connect(mapStateToProps)(TestScreen);