import React, { useState } from "react";
import {
    View,
    Text,
    StyleSheet,

} from 'react-native'

import Button from './Button'
import CheckBox from './CheckBox'

const CardYN = ({ title, onPressOut }) => {

    const context = (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.text}>{title}</Text>
            </View>
            <View>

                <View>

                    <View style={styles.buttons}>
                        <Button name="No" w='80' onPressOut={onPressOut} />
                        <Button name="Yes" w='80' onPressOut={onPressOut} />
                    </View>

                </View>

            </View>


        </View>
    )

    return (
        context
    )
}

export default CardYN

const styles = StyleSheet.create({
    container: {
        width: '80%',
        height: '26%',
        backgroundColor: '#fbecd9',
        opacity: 1,
        borderColor: 'gray',
        borderWidth: 0.5,
        borderRadius: 30,

    },
    buttons: {
        flexDirection: 'row',
        justifyContent: 'space-between',

        margin: 20,
        height: 50,
        //width: '80%'

    },
    header: {
        flex: 1,
        alignItems: 'center',
        //justifyContent: 'center',
    },
    text: {
        textAlign: 'center',
        margin: 20,
        color: "black",
        fontSize: 26,
    },

})