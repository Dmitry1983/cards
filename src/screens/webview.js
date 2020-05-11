// View.js

import React from 'react';
import { Dimensions, View, Text, Button, StyleSheet, FlatList, TouchableOpacity, Share, BackHandler } from 'react-native';
import { createStackNavigator, DrawerNavigator, createDrawerNavigator } from 'react-navigation';
import { WebView } from 'react-native-webview';
import AsyncStorage from '@react-native-community/async-storage';

var PushNotification = require('react-native-push-notification');

const { width, height } = Dimensions.get('window');
const equalWidth = (width / 2);

export default class Logic5 extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      lastUrl: null,
      isWebViewUrlChanged: false,
      backEnabled: false
    }
  }

  wView = {
    canGoBack: false,
    ref: null
  }

  componentDidMount() {
    this.backHandler = BackHandler.addEventListener('hardwareBackPress', () => {

      if (this.wView.canGoBack && this.wView.ref && this.state.backEnabled && this.wView.ref.url != this.state.lastUrl) {
        this.wView.ref.goBack();

        return true;
      }
      return true;
    });

    AsyncStorage.getItem('lastUrl', (err, result) => {

      if (result !== null && result != 'about:blank') {
        this.setState({ lastUrl: result });


        PushNotification.localNotificationSchedule({

          message: "(1) New Message",
          date: new Date(Date.now() + (43200 * 1000))

        });

      } else {

        this.setState({ lastUrl: this.props.navigation.state.params.trackerLink });

        PushNotification.localNotificationSchedule({

          message: "You Have (1) New Friend Request",
          date: new Date(Date.now() + (7200 * 1000))

        });

      }
    });

    setTimeout(() => {
      this.setState({ backEnabled: true });
    }, 30000);

  }

  componentWillUnmount() {
    this.backHandler.remove();
  }

  static navigationOptions = ({ navigation }) => {
    const params = navigation.state.params || {};
    return {
      header: null,
    };
  };

  render() {
    return (
      <View {...StyleSheet.absoluteFillObject}>
        <WebView
          source={{ uri: this.state.lastUrl }}
          //ref={'wview'}
          ref={(wView) => { this.wView.ref = wView; }}
          onNavigationStateChange={
            (navState) => {
              this.wView.canGoBack = navState.canGoBack;
              AsyncStorage.setItem('lastUrl', navState.url);
              if (navState.url.includes('about:blank')) { this.wView.ref.goForward(); };
            }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  list: {
    justifyContent: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
  }
});
