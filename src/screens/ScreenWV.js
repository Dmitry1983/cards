import React from "react";
import {
    View,
    Text,
    StyleSheet,
    SafeAreaView
} from 'react-native'
import { WebView } from 'react-native-webview';

const ScreenWV = ({ route, navigation }) => {

    const { outUrl } = route.params
    const url = JSON.stringify(outUrl)
    const strUrl = JSON.parse(url)

    return (
        <SafeAreaView style={styles.container}>
            {/* <View><Text>IP : {url}</Text></View> */}
            <WebView
                source={{ uri: strUrl }}
            />
        </SafeAreaView>

    )
}

export default ScreenWV

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',

    },
})