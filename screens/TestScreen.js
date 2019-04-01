import React from 'react';
import { ExpoConfigView } from '@expo/samples';
import {
  Platform,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { Video } from 'expo';

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
    let {users}=this.props;
    let {data}=users;
    // if (users) {
      
       
    //    if (data) {
    //      console.log("componentDidMount:::::::::::::::::::::::::::::::::::::::::::::::::::",data.hello);
    //    }
    // }
   
   
      return <View style={{ height: 200, backgroundColor: '#336699', justifyContent: 'center', alignItems: 'center' }}>
      <Text>{data?data.hello:null}</Text>
      <Video
        source={{ uri: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4' }}
              shouldPlay
        resizeMode="cover"
        style={{ width:300, height: 300 }}
      />
      </View>
  }
}


function mapStateToProps(state) {
  const { users,  } = state;
  console.log("users  ",users);
  
  return {
    users
  };
}
export default connect(mapStateToProps)(TestScreen);