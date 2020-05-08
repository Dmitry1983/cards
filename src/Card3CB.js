import React, { useState } from "react";
import {
    View,
    Text,
    StyleSheet,

} from 'react-native'

import Button from './Button'
import CheckBox from './CheckBox'

const Card3CB = ({ title, check1, check2, check3, onPressOut }) => {

    const context = (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.text}>{title}</Text>
            </View>
            <View>

                <View>
                    <View style={{ alignItems: 'flex-start', marginLeft: 40, marginBottom: 10 }}>
                        <CheckBox title={check1} enable='false' onPressOut={onPressOut} />
                        <CheckBox title={check2} enable='false' onPressOut={onPressOut} />
                        <CheckBox title={check3} enable='false' onPressOut={onPressOut} />

                    </View>
                </View>

            </View>


        </View>
    )

    return (
        context
    )
}

export default Card3CB

const styles = StyleSheet.create({
    container: {
        width: '80%',
        height: '30%',
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