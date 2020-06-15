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
    const [step, stepSet] = useState(0) // -1 repeate
    const [data, dataSet] = useState(null)
    const [fla, flaSet] = useState(null)
    const [url, urlSet] = useState(null)
    const [storageKey, storageKeySet] = useState(null)


    const goToQueries = () => {
        navigation.navigate('1')
    }

    const goToWeb = () => {
        console.log('Go to web  URL: ' + url)
        navigation.navigate('WV', { outUrl: url })

    }
    const storeData = async (data) => { //stored value / save
        try {
            await AsyncStorage.setItem('@Key', data)
            console.log('Save key - Store.: ' + data)
            storageKeySet(data)
            stepSet(3)
        } catch (e) {
            console.log('storeData : error : ' + e)
        }
    }

    const getData = async () => { //Read value / read
        try {
            const value = await AsyncStorage.getItem('@Key')
            console.log('getData : Read key - Store: ' + value)
            storageKeySet(value)
            stepSet(1) // 
        } catch (e) {
            console.log('getData : error : ' + e)
        }
    }

    const removeValue = async () => {
        try {
            await AsyncStorage.removeItem('@Key')
            //storageKeySet(null)
        } catch (e) {
            console.log('removeValue : error : ' + e)
        }
        console.log('Remove key - Done.')
        await stepSet(0)
    }

    const fetchMyAPI = async () => {
        let response = await fetch(urlIP)
        if (response.ok) {
            response = await response.json()
            dataSet(response)
            flaSet(response.flag)
            urlSet(response.url)
            stepSet(2) //
            console.log('fetchMyAPI : HTTP : ' + response.url)
        }
        else {
            console.log('fetchMyAPI : Error HTTP : ' + response.status)
        }

    }

    useEffect(() => {
        console.log('step > ' + step + ' < - - - - - - - -')
        if (step === -1) {
            removeValue() // delete storage key //like first opening 

        }
        if (step === 0) {
            getData() // read storage key
        }
        if (step === 1) {
            console.log('storageKey : ' + storageKey)
            if (storageKey === 'false') {
                console.log('step  1 : false  - goToQueries')
                goToQueries() // go to Queries
            }
            if (storageKey === null) {
                // console.log('step  1 : null')
                fetchMyAPI() // test ip
            }
            if (storageKey === 'true') {
                // console.log('step  1 : true - goToWeb')
                goToWeb() // go to web
            }
        }
        if (step === 2) {
            // console.log('step  2 : storageKey : ' + storageKey)
            // console.log('step  2 : flag : ' + fla.toString())
            // console.log('step  2 : url : ' + url.toString())
            storeData(fla.toString()) // save to Store and storageKey - Key
        }
        if (step === 3) {
            // console.log('step  3 : storageKey : ' + storageKey)
            if (storageKey === 'true' || storageKey === 'false') {
                stepSet(1) // repeate step 1
            }
            if (storageKey === null) {
                stepSet(4) // go to error
            }
        }
        if (step === 4) { console.error() }


    }, [step])

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