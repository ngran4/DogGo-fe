import * as React from "react";
import { useContext } from 'react'
import { StateContext } from '../context/StateContext'
import { SafeAreaView, StyleSheet, Image, Text, TouchableOpacity, View } from "react-native";

const DogProfileWidget = ({ navigation }) => {
  const [stateContext] = useContext(StateContext)
  const { container, blueButton, greenButton, header, homePgHeader, body, buttonText } = stateContext

  return (
    <SafeAreaView>
      {
        "if there is a dog profile picture" ? 
        (
          <TouchableOpacity
            style={styles.widget}
            onPress={() => navigation.navigate('Pet Profile')}>
              {/* <View style={{ height: 8, width: 8 }}></View> */}
              <Text style={buttonText}>Dog Name</Text>
              <Text>Age</Text>
          </TouchableOpacity>
        ) : (
          <Text style={styles.widgetText}>Set Up Dog Profile</Text>
        )
      }
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  widget: {
    backgroundColor: '#c4e8f2',
    padding: 10,
    borderRadius: 20,
    margin: 10,
    width: 310,
    height: 64
  },
  widgetText: {
    fontSize: 20,
    maxWidth: 310,
    maxHeight: 58
  }
})

export default DogProfileWidget;