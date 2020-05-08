import React from "react";
import {
    View,
    Text,
    ImageBackground,
    StyleSheet,
    TouchableOpacity,
    Button
} from 'react-native'


//import Card from '../Card'
//import Card3CB from '../Card3CB'
//import CardYN from '../CardYN'
//import CardCont from '../CardCont'
import CardYN from "../CardYN";


const Screen14 = ({ navigation }) => {
    const goToPP = () => {
        navigation.navigate('PP')
    }
    const goTo = () => {
        navigation.navigate('15')
    }
    return (
        <View style={styles.container}>

            <ImageBackground source={require('../back14.jpg')} style={styles.image}>
                {/* <Text style={styles.text}>Screen</Text> */}
                <View style={styles.view}>
                    <TouchableOpacity
                        onPress={goToPP}>
                        <Text style={styles.policy}>Privacy Policy</Text>
                    </TouchableOpacity>

                    <CardYN title="Do you like making gifts?" onPressOut={goTo} />

                </View>

            </ImageBackground>


        </View>
    )
}

export default Screen14

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center",
        alignItems: 'center',
    },
    text: {
        color: "white",
        fontSize: 30,
        fontWeight: "bold"
    },
    policy: {
        marginBottom: 30,
        marginTop: 100,
        textAlign: 'center',
        color: '#fbecd9',
        fontSize: 18
    },
    view: {
        flex: 1,
        flexDirection: 'column-reverse'
    }
})