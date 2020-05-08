import React, { useState } from "react";
import {
    View,
    Text,
    StyleSheet,

} from 'react-native'

import Button from './Button'
import CheckBox from './CheckBox'

const Card = ({ title, type }) => {

    const type0 = (
        <View>
            <Button name="CONTINUE" />
        </View>
    )

    const type1 = (
        <View>
            <View style={styles.buttons}>
                <Button name="No" />
                <Button name="Yes" />
            </View>
        </View>
    )

    const type2 = (
        <View>
            <View style={{ alignItems: 'flex-start', marginLeft: 40 }}>
                <CheckBox title="Do you have ?" enable='false' />
                <CheckBox title="Do you have some?" enable='false' />

            </View>
        </View>
    )

    const typeDef = (<View></View>)



    const context = (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.text}>{title}</Text>
            </View>
            <View>

                <View>
                    <View style={{ alignItems: 'flex-start', marginLeft: 40, marginBottom: 10 }}>
                        <CheckBox title="Do you have ?" enable='false' />
                        <CheckBox title="Do you have some?" enable='false' />
                        <CheckBox title="Do you have some?" enable='false' />

                    </View>
                </View>

            </View>


        </View>
    )

    return (
        context
    )
}

export default Card

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