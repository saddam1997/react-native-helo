import React from 'react';
import { ExpoConfigView } from '@expo/samples';
import {
  Platform,
  StyleSheet,
  ScrollView,
  Image,
  Text,
  View,
} from 'react-native';
import { Video } from 'expo';
import { Container,DatePicker, Header, Content, Badge, Icon,Button,Card, CardItem, Body ,CheckBox,Right,Left,ListItem,Thumbnail} from 'native-base';

import { connect } from 'react-redux';
const initialArr = [{
    color: "blue",
    text: "text1"
}, {
    color: "red",
    text: "text2"
}];
import { userActions } from '../redux/_actions';
class TestScreen extends React.Component {
    constructor() {
      super();
      this.state = {
      isReady: true
      };
    }

 
  

    async componentWillMount() {
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

  static navigationOptions = {
    title: 'Test FIle',
  };

  render() {
    let {users}=this.props;
    let {data}=users;
    if (this.state.isReady) {
      return (
        <ScrollView style={styles.container}></ScrollView>
      );
    }
      return (<ScrollView style={styles.container}>

       {
          data?data.map((news, key) => {
          return (
            // <Button key={key} light><Text> Light </Text></Button>
            <Card style={{flex: 0}} key={key}>
                <CardItem>
                  <Left>
                    <Thumbnail source={{uri: 'https://i.ibb.co/MfLFVw6/brfantasy.png'}} />
                    <Body>
                      <Text>{news.author}</Text>
                      <Text note>April 15, 2016</Text>
                    </Body>
                  </Left>
                </CardItem>
                <CardItem>
                  <Body>
                    <Image source={{uri: news.urlToImage}} style={{height: 200, width: 200, flex: 1}}/>
                    <Text>
                     {news.content}

                    </Text>
                  </Body>
                </CardItem>
                <CardItem>
                  <Left>
                    <Button transparent textStyle={{color: '#87838B'}}>
                      <Icon name="logo-github" />
                      <Text>1,926 stars</Text>
                    </Button>
                  </Left>
                </CardItem>
            </Card>
          );
          }):null
        }
    
        
      </ScrollView>)
      
      
      // <View style={{ height: 200, backgroundColor: '#336699', justifyContent: 'center', alignItems: 'center' }}>
      // <Text>{data?data:null}</Text>
      
      // </View>
  }
}
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

function mapStateToProps(state) {
  const { users,  } = state;
  //console.log("users  ",users);
  
  return {
    users
  };
}
export default connect(mapStateToProps)(TestScreen);