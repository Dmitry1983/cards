import React, { useState } from "react";
import {
    View,
    Text,
    StyleSheet,

} from 'react-native'

import Button from './Button'
import CheckBox from './CheckBox'

const CardCont = ({ title, onPressOut }) => {

    const context = (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.text}>{title}</Text>
            </View>
            <View>

                <View>
                    <View style={{ alignItems: 'center' }}>
                        <Button name="CONTINUE" w='150' onPressOut={onPressOut} />
                    </View>
                </View>

            </View>


        </View>
    )

    return (
        context
    )
}

export default CardCont

const styles = StyleSheet.create({
    container: {
        width: '80%',
        height: '25%',
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