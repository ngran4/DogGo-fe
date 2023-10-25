import React, { useState } from "react";
import {
    SafeAreaView,
    Text,
    StyleSheet,
    TouchableOpacity,
    TextInput,
    Alert,
    Parse,
} from 'react-native';

export const UserSignUp = () => {
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword, setConfirmPassword] = useState("");

    const doSignUp= async function () {
        const emailValue = email;
        const usernameValue = username;
        const passwordValue = password;
    
        return await Parse.User.signUp(emailValue,usernameValue, passwordValue)
        .then((createdUser) => {
            Alert.alert(
                'Success!',
                `User ${createdUser.getUsername()} was created.`,
            );
            return true;
        })
        .catch((error) => {
            Alert.alert('Error!', error.message);
            return false;
        });
    }

    return (
        <SafeAreaView >
        <Text style={styles.title}>Sign Up</Text>
        
        <TextInput
        style={styles.input}
        value={String}
        placeholder={"Name"}
        onChangeText={ (text) => setUsername(text)}
        autoCapitalize={"none"}
        />
        <TextInput
        style={styles.input}
        value={email}
        placeholder={"Email"}
        onChangeText={ (text) => setEmail(text)}
        autoCapitalize={"none"}
        />
        <TextInput
        style={styles.input}
        value={password}
        placeholder={"Password"}
        secureTextEntry
        onChangeText={(text) => setPassword(text)}
        />
        <TextInput
        style={styles.input}
        value={password}
        placeholder={"Confirm Password"}
        secureTextEntry
        onChangeText={(text) => setConfirmPassword(text)}
        />
        <TouchableOpacity style={styles.Button} onPress={() => doSignUp()} >
            <Text style={styles.buttonText}>Create Account</Text>
        </TouchableOpacity>
        </SafeAreaView>
    );
};


const styles = StyleSheet.create({
    container: {
        flex:1,
        marginTop: 100,
        alignItems: 'center',
    },
    title: {
        fontSize: 40,
        textAlign: 'center',
    },
    buttonText: {
        fontSize: 25,
    },
    input: {
        height: 25,
        marginBottom: 10,
        backgroundColor: '#fff'
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

});