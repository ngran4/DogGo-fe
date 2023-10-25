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
        margin: 10,
        justifyContent: 'center',
        alignItems: 'center',
        padding:10,
        borderRadius:20,
        borderWidth:1,
        width:30,
        height:30,
    },
    buttonText: {
        fontSize: 25,
    },
})