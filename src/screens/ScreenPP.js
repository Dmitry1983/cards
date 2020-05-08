import React from "react";
import {
    View,
    ScrollView,
    Text,
    StyleSheet,
    SafeAreaView,
    Button
} from 'react-native'

const ScreenPP = ({navigation}) => {
    const goToBack = ()=>{
        //navigation.navigate('1')
        navigation.goBack()
    }
    return (
        <SafeAreaView >
            <ScrollView >
                <View style={styles.view}>
                <Text style={styles.text}>
                  Privacy Policy
                  Flirt Planet Apps built the Flirt Planet - Online Chat  Date app as
                  a Free app. This SERVICE is provided by
                  Flirt Planet Apps at no cost and is intended for use as
                  is.
         
                  This page is used to inform visitors regarding my
                  policies with the collection, use, and disclosure of Personal
                  Information if anyone decided to use my Service.
         
                  If you choose to use my Service, then you agree to
                  the collection and use of information in relation to this
                  policy. The Personal Information that I collect is
                  used for providing and improving the Service. I will not use or share your information with
                  anyone except as described in this Privacy Policy.
       
                  The terms used in this Privacy Policy have the same meanings
                  as in our Terms and Conditions, which is accessible at
                  Flirt Planet - Online Chat  Date unless otherwise defined in this Privacy Policy.
                        Information Collection and Use
                  For a better experience, while using our Service, I
                  may require you to provide us with certain personally
                  identifiable information. The information that
                  I request will be retained on your device and is not collected by me in any way.
              
                    The app does use third party services that may collect
                    information used to identify you.
               
                </Text>
                </View>
                
            </ScrollView>
            <View style={{marginTop:20}}>
                <Button 
                title="< Back" 
                onPress={goToBack}
                />
                </View>
        </SafeAreaView>
    )
}

export default ScreenPP

const styles = StyleSheet.create({
    text:{
        textAlign:'center',
        fontSize: 16,
    },
    view:{
        margin: 20,
        //backgroundColor:'#fbecd9',
        
        
    }
})