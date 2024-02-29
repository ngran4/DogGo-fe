import * as React from 'react'
import { useContext } from 'react'
import { StateContext } from '../context/StateContext'
import { SafeAreaView, StyleSheet, View, Text, TouchableOpacity } from 'react-native'

const RemindersWidget = ({ navigation }) => {
  const [stateContext] = useContext(StateContext)
  const { container, blueButton, greenButton, header, homePgHeader, body } = stateContext

  return (
    <SafeAreaView>
      <Text style={homePgHeader}>Upcoming Reminders</Text>
      <TouchableOpacity style={greenButton} onPress={() => navigation.navigate('Remainders Screen')}>
        <Text style={styles.buttonText}
        >Set up upcoming reminders!</Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  buttonText: {
    fontFamily: 'ConcertOne-Regular',
    fontSize: 20
  }
})

export default RemindersWidget
