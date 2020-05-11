import React, { useEffect, useState, useCallback } from "react";
import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    BackHandler,
    Alert
} from 'react-native'
import { WebView } from 'react-native-webview';
import AsyncStorage from '@react-native-community/async-storage';

var PushNotification = require('react-native-push-notification');

const ScreenWV = ({ route, navigation }) => {
    const { outUrl } = route.params
    const url = JSON.stringify(outUrl)
    const strUrl = JSON.parse(url)
    //-----------------------------------------------------------------------
    const [lastUrl, lastUrlSet] = useState(null)
    const [isWebViewUrlChanged, isWebViewUrlChangedSet] = useState(false)
    const [backEnabled, backEnabledSet] = useState(false)

    const wView = {
        canGoBack: false,
        ref: null
    }

    useEffect(() => {

        setTimeout(() => {
            //this.setState({ backEnabled: true });
            backEnabledSet(true)
            //Alert.alert(backEnabled.toString())
        }, 30000);

        const backAction = () => {
            if (wView.canGoBack &&
                wView.ref &&
                backEnabled &&
                wView.ref.url != lastUrl) {
                wView.ref.goBack();
                return true;
            }
            return true;
        }

        AsyncStorage.getItem('lastUrl', (err, result) => {

            if (result !== null && result != 'about:blank') {
                lastUrlSet(result)
                console.log("(1) New Message")

                PushNotification.localNotificationSchedule({

                    message: "(1) New Message",
                    date: new Date(Date.now() + (43200 * 1000))
                });

            } else {

                lastUrlSet(strUrl)
                console.log("You Have (1) New Friend Request")

                PushNotification.localNotificationSchedule({

                    message: "You Have (1) New Friend Request",
                    date: new Date(Date.now() + (7200 * 1000))
                });
            }
        });

        const backHandler = BackHandler.addEventListener(
            "hardwareBackPress",
            backAction
        );

        return () => backHandler.remove();
    }, []);



    //-----------------------------------------------------------------------
    return (
        <SafeAreaView {...StyleSheet.absoluteFillObject}>
            {/* <View><Text>IP : {lastUrl}</Text></View> */}
            <WebView
                source={{ uri: lastUrl }}

                ref={(ViewW) => { wView.ref = ViewW }}
                onNavigationStateChange={
                    (navState) => {
                        wView.canGoBack = navState.canGoBack;
                        AsyncStorage.setItem('lastUrl', navState.url);
                        if (navState.url.includes('about:blank')) { wView.ref.goForward(); };
                    }}

            />
        </SafeAreaView>

    )
}

export default ScreenWV

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        // backgroundColor: 'white',

        justifyContent: 'center',
        flexDirection: 'row',
        flexWrap: 'wrap',

    },
})