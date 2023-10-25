import React, { useState } from "react";
import {
    Text,
    StyleSheet,
    Button,
    View,
    SafeAreaView
} from "react-native"

const WalkCounter = ({navigation}) => {
    const [count, setCount] = useState(0);

    return (
        <View>
            <Text> How often do you like to walk your dog? </Text>
            
            <Button
            onPress={() => {setCount(count - 1)}} title="-"/>
            <Text>{count}</Text>
            <Button
            onPress={() => {setCount(count + 1)}} title="+"/>
        </View>
    )
}

const styles = StyleSheet.create({
    
})

export default WalkCounter