import React, { useContext } from 'react'
import { StateContext } from '../context/StateContext'
import { SafeAreaView,  Text, View, StyleSheet, TouchableOpacity} from 'react-native'

const AddPet = ({navigation}) => {
    const [stateContext] = useContext(StateContext)
    const {container, blueButton, greenButton, header, body, buttonText} = stateContext

  return (
    <SafeAreaView>
        <View>
            <Text>Add a Furry Friend</Text>
            <Text>Image Upload Placeholder</Text>
            <Text>Name Input Placeholder</Text>
            <TouchableOpacity style={greenButton} onPress={() => navigation.navigate("Walk Counter")}>
                <Text style={buttonText}>Next</Text>
            </TouchableOpacity>
        </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
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
        maxWidth: 310,
        maxHeight: 58,
    },
})

export default AddPet