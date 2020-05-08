import React from "react";
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity
} from 'react-native'

const Button = ({ name, w, onPressOut }) => {
    //console.log(w)
    return (
        <TouchableOpacity style={{ ...styles.container, ...{ width: w * 1 }, }} onPress={onPressOut}>
            <Text style={styles.text}>{name}</Text>

        </TouchableOpacity>
    )
}

export default Button

const styles = StyleSheet.create({
    container: {
        width: 100,
        height: 50,
        backgroundColor: 'grey',
        opacity: 0.95,
        borderColor: 'gray',
        borderWidth: 0.5,
        borderRadius: 10,
        justifyContent: 'center',
        marginBottom: 20

    },
    text: {
        textAlign: 'center',
        color: "white",
        fontSize: 20,

    }
})