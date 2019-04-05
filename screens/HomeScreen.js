import React from 'react';
import {
  Platform,
  StyleSheet,
  ScrollView,Image,
  FlatList,
  View,
} from 'react-native';
import { userActions } from '../redux/_actions';
//3eecacf3fbb741709502fff76d54f4c5
import Article from './Article';

import { WebBrowser } from 'expo';
import { connect } from 'react-redux';
import { Container,DatePicker, Header, Content, Badge, Text, Icon,Button,Card, CardItem, Body ,CheckBox,Right,Left,ListItem,Thumbnail} from 'native-base';

class HomeScreen extends React.Component {

  constructor(props) {
    super(props);
     this.state = {
      isReady: true
    };
  }
  
 async componentDidMount() {
      await Expo.Font.loadAsync({
        Roboto: require("native-base/Fonts/Roboto.ttf"),
        Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
        Ionicons: require("native-base/Fonts/Ionicons.ttf")
      });
      this.setState({ isReady: false });
      let data={
       atype:'alluser'
      }
      this.props.dispatch(userActions.getAll(data));
   }

    async componentWillMount() {
      await Expo.Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
      Ionicons: require("native-base/Fonts/Ionicons.ttf")
      });
      this.setState({ isReady: false });
    }
  static navigationOptions = {
    title: 'DashBoard',
  };
  render() {
     let {users}=this.props;
    let {data}=users;
    if (this.state.isReady) {
      return (
        <ScrollView style={styles.container}></ScrollView>
      );
    }
 
    return (
      <ScrollView style={styles.container}>
          <FlatList
                data={data}
                renderItem={({ item }) => <Article article={item} />}
                keyExtractor={item => item.url}
                //refreshing={this.state.refreshing}
                //onRefresh={this.handleRefresh.bind(this)}
          />
         
      </ScrollView>
    );
  }
}
function mapStateToProps(state) {
  const { users,  } = state;
  console.log("users  ",users);
  
  return {
    users
  };
}
export default connect(mapStateToProps)(HomeScreen);
const styles = StyleSheet.create({
  container: {
    flex: 0,
    backgroundColor: '#fff',
  },
  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
  },
  contentContainer: {
    paddingTop: 30,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  navigationFilename: {
    marginTop: 5,
  },
  helpContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
});
