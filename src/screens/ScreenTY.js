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
import CardCont from '../CardCont'
//import CardYN from "../CardYN";


const ScreenTY = ({ navigation }) => {
    const goToPP = () => {
        navigation.navigate('PP')
    }
    const goTo = () => {
        navigation.navigate('1')
    }
    return (
        <View style={styles.container}>

            <ImageBackground source={require('../backTY.jpg')} style={styles.image}>
                {/* <Text style={styles.text}>Screen</Text> */}
                <View style={styles.view}>
                    <TouchableOpacity
                        onPress={goToPP}>
                        <Text style={styles.policy}>Privacy Policy</Text>
                    </TouchableOpacity>

                    {/* <CardCont title="Thank you for filling out your profile. We will review your profile and notify the result of your selection. Thank you for using our product." onPressOut={goTo} /> */}
                    <View style={{ width: '80%', backgroundColor: '#fbecd9', opacity: 0.8, borderRadius: 20 }}>
                        <Text style={{ fontSize: 24, margin: 25, textAlign: 'center' }}>Thank you for filling out your profile.
                        We will review your profile and notify the result of your selection.
                        Thank you for using our product.</Text>
                    </View>


                </View>

            </ImageBackground>


        </View>
    )
}

export default ScreenTY

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