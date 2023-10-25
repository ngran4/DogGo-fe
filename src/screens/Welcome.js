import React from 'react'
import { SafeAreaView, StyleSheet, Image, Text, TouchableOpacity } from 'react-native'


const Welcome = () => {


    const {container, button, title, info, buttonText} = styles

    const goToLogin = () => {

    }

    const goToSignUp = () => {

    }

  return (
    <SafeAreaView style={container}>
        <Image source={require('../../assets/images/DogGoicon.png')}  style={{marginTop: 50, marginBottom:50, height: 64, width: 64}}/>
        <Text style={title}>Welcome</Text>
        <Text style={title}>to DogGo!</Text>
        <Text style={[info, {marginTop: 50}]}>Get personalized walking reminders based on the weather</Text>
        <Text style={info}> Stay on top of your dog's walking schedule</Text>
        <TouchableOpacity style={[button, {marginTop: 100}]} onPress={goToLogin}>
            <Text style={buttonText}>Log In</Text>
        </TouchableOpacity>
        <TouchableOpacity style={button} onPress={goToSignUp}>
            <Text style={buttonText}>Sign Up</Text>
        </TouchableOpacity>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',   
    },
    title: {
        fontSize: 40,
    },
    info: {
        fontSize: 20,
        textAlign: 'center',
        padding: '3%'
    },
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#DDDDDD',
        padding: 10,
        borderRadius: 20,
        borderWidth: 1,
        margin: 10, 
        width: 310,
        height: 58,
    },
    buttonText: {
        fontSize: 20,
    },
    dog: {
        marginTop: 15,
        marginBottom: 15
    }
})

export default Welcome