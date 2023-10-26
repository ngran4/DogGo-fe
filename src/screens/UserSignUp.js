import React, { useState, useContext } from "react";
import { StateContext } from '../context/StateContext'
import BringIcon from '../../assets/images/BringIcon'
import {
    SafeAreaView,
    Text,
    StyleSheet,
    View,
    TextInput,
    Alert,
    Parse,
    TouchableOpacity
} from 'react-native';

const UserSignUp = ({navigation}) => {

    const [stateContext] = useContext(StateContext)
    const {container, blueButton, greenButton, header, body, buttonText} = stateContext

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
        <SafeAreaView style={container}>
            <View style={{height: 64, width: 64}}>
                <BringIcon />
            </View>

            <Text style={header}>Sign Up</Text>
            
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
            <TouchableOpacity style={greenButton} onPress={() => doSignUp()}>
                <Text style={buttonText}>Create Account</Text>
            </TouchableOpacity>
        </SafeAreaView>
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