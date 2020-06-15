import React, { useEffect, useState, useCallback } from "react";
import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    ActivityIndicator,
    Button
} from 'react-native'
import AsyncStorage from '@react-native-community/async-storage';

const urlIP = 'http://206.81.14.42/' // true
//const urlIP = 'http://157.245.4.85/'  // false   -- на заглушку


const ScreenStart = ({ navigation }) => {
    const [data, dataSet] = useState(null)
    const [fla, flaSet] = useState(null)
    const [url, urlSet] = useState(null)
    const [key, keySet] = useState(null)
    const [storageKey, storageKeySet] = useState(null)


    const goToStart = () => {
        navigation.navigate('1')
    }
    const goToWeb = () => {
        console.log('Go to web : ' + url)
        navigation.navigate('WV', { outUrl: url })

    }
    const storeData = async () => { //stored value / save
        try {
            await AsyncStorage.setItem('@storage_Key', 'true')
            const value = await AsyncStorage.getItem('@storage_Key')
            console.log('Save key - Done.: ' + value)
            storageKeySet(value)
        } catch (e) {
            // saving error
        }
    }

    const getData = async () => { //Read value / read
        try {
            const value = await AsyncStorage.getItem('@storage_Key')
            if (value !== null) {
                // value previously stored
            } else {

            }
            storageKeySet(value)
            console.log('Read key - Done : ' + value)
        } catch (e) {
            // error reading value
        }
    }

    const removeValue = async () => {
        try {
            //await AsyncStorage.removeItem('@storage_Key')
            const cl = await AsyncStorage.removeItem('@storage_Key')
            storageKeySet(null)
        } catch (e) {
            // remove errorк
        }
        console.log('Remove key - Done.')
    }

    const fetchMyAPI = useCallback(async () => {
        let response = await fetch(urlIP)
        if (response.ok) {
            response = await response.json()
            dataSet(response)
            flaSet(response.flag)
            urlSet(response.url)

            //console.log('HTTP : ' + response.status)
        }
        else { //console.log('Error HTTP : ' + response.status)
        }

    }, [])

    useEffect(() => {



        if (url !== null && fla !== null && key === null) {
            keySet(true);
            console.log('FLAG : ' + fla)
            fla === true ? storeData() : getData()
            //fla === true ? goToWeb() : goToStart();
        }
        if (key !== null) { storageKey !== null ? goToWeb() : goToStart(); }


    })

    useEffect(() => {
        fetchMyAPI()
    }, [fetchMyAPI])

    return (
        <SafeAreaView style={styles.container}>
            <ActivityIndicator size='large' color="white" />
            {/* <View><Text>data: {JSON.stringify(data)}</Text></View> */}
            {/* <Button title="storeData" onPress={storeData} />
            <View><Text>data: {storageKey}</Text></View>
            <Button title="ReadData" onPress={getData} />
            <Button title="ClearData" onPress={removeValue} /> */}
        </SafeAreaView>
    )
}

export default ScreenStart
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'grey',
        justifyContent: 'center',
        alignContent: 'center'

    },
})