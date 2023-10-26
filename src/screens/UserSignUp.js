import React, { useState, useContext } from "react";
import { StateContext } from '../context/StateContext'
import {
    SafeAreaView,
    Text,
    StyleSheet,
    View,
    Button,
    TextInput,
    Alert,
    Parse,
} from 'react-native';

const UserSignUp = ({navigation}) => {
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword, setConfirmPassword] = useState("");

    const doSignUp= async function () {
        const usernameValue = username;
        const passwordValue = password;
        
        navigation.navigate("Location Services")

        // return await Parse.User.signUp(usernameValue, passwordValue)
        // .then((createdUser) => {
        //     Alert.alert(
        //         'Success!',
        //         `User ${createdUser.getUsername()} was created.`,
        //     );
        //     return true;
        // })
        // .catch((error) => {
        //     Alert.alert('Error!', error.message);
        //     return false;
        // });
    }

    return (
        <>
        <Text>Sign Up</Text>
        
        <TextInput
        style={styles.input}
        value={email}
        placeholder={"Email"}
        onChangeText={ (text) => setEmail(text)}
        autoCapitalize={"none"}
        />
        <TextInput
        style={styles.input}
        value={username}
        placeholder={"Username"}
        onChangeText={ (text) => setUsername(text)}
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
        <Button title={"Sign Up"} onPress={() => doSignUp()} />
        </>
    );
};


const styles = StyleSheet.create({
    input: {
        height: 25,
        marginBottom: 10,
        backgroundColor: '#fff'
    },
});

export default UserSignUp