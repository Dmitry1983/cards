import React, { useState } from "react";
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity
} from 'react-native'

const CheckBox = ({ title, enable, onPressOut }) => {
    const [isEnabled, setIsEnabled] = useState(enable);
    const onPress = () => {

        isEnabled ? setIsEnabled(false) : setIsEnabled(true)

    }
    return (

        <View>


            <TouchableOpacity

                onPress={onPress}
                onPressIn={onPressOut}
            >
                <View style={styles.container}>
                    <View style={styles.check}>
                        <View style={isEnabled ? styles.checkUnPoint : styles.checkPoint}></View>
                    </View>
                    <Text style={styles.text}>{title}</Text>
                </View >
            </TouchableOpacity>

            {/* <Text style={styles.text}>{title}</Text> */}

        </View>

    )
}

export default CheckBox

const styles = StyleSheet.create({
    container: {

        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 5,
        marginBottom: 15,
    },
    text: {
        marginLeft: 10,
        fontSize: 20,


    },
    check: {
        height: 20,
        width: 20,
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',

    },
    checkPoint: {
        height: 10,
        width: 10,
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 50,
        backgroundColor: 'black',
        justifyContent: 'center',
        alignItems: 'center',
    },
    checkUnPoint: {
        height: 10,
        width: 10,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
    }
})