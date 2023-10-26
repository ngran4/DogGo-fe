import React, { useState } from "react";
import {
    Text,
    StyleSheet,
    Button,
    TouchableOpacity,
    SafeAreaView
} from "react-native"

export const WalkCounter = () => {
    const [count, setCount] = useState(0);

    return (
        <SafeAreaView style={styles.container}>
            <Text> How often do you like to walk your dog? </Text>
            
            <Button
            onPress={() => {setCount(count - 1)}} title={"-"}/>
            <Text>{count}</Text>
            <Button
            onPress={() => {setCount(count + 1)}} title={"+"}/>

            <TouchableOpacity style={styles.Button}>
                <Text style={styles.ButtonText}>Next</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Do Later</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        marginTop: 100,
        alignItems: 'center',
        justifyContent: 'center',
    },
    Text: {
        fontSize: 30,
    },
    Button: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#DDDDDD',
        margin: 10,
        padding:10,
        borderRadius:20,
        borderWidth:1,
        width:310,
        height:50,
    },
    button: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    ButtonText: {
        fontSize: 25,
    },
    buttonText: {
        fontSize: 18,
    },
})