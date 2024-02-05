import * as React from 'react'
import { useContext } from 'react'
import { StateContext } from '../context/StateContext'
import { SafeAreaView, StyleSheet, View, Text } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

const WalkScheduleWidget = () => {
  const [stateContext] = useContext(StateContext)
  const { container, blueButton, greenButton, header, homePgHeader, body, buttonText } = stateContext

  return (
    <SafeAreaView>
      <Text style={homePgHeader}>Walking Schedule</Text>
      {
        'if there is a walking schedule'
          ? (
            <View>
              <Text>Display times here</Text>
              <TouchableOpacity><Text style={styles.editText}>Edit Walking Schedule</Text></TouchableOpacity>
            </View>
            )
          : <View style={greenButton}>
            <Text style={buttonText}>Set Up Walking Schedule!</Text>
            </View>
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
  },
  editText: {
    fontSize: 12,
    textDecorationLine: 'underline'
  }
})

export default WalkScheduleWidget
