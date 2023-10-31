import * as React from 'react';
import { useContext } from 'react';
import { SafeAreaView, StyleSheet, TouchableOpacity, View, Text, buttonText } from 'react-native';
import { StateContext } from '../context/StateContext'
import NavBar from '../components/NavBar';



const PetProfile = () => {
  const [stateContext] = useContext(StateContext)
  const { container, blueButton, greenButton, header, homePgHeader, body, buttonText, dogName } = stateContext

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity><Text style={styles.editText}>Edit Pet Profile</Text></TouchableOpacity>
      <View
        style={styles.widget}>
        {/* <View style={{ height: 8, width: 8 }}></View> */}
        <Text style={buttonText}>{dogName}</Text>
        <Text >Age</Text>
      </View>
      <View style={styles.infoSection}>
        <View style={styles.subSection}>
          <Text style={homePgHeader}>Birthday</Text>
          <Text style={styles.inputInfo}>Birthday date</Text>
        </View>
        <View style={styles.subSection}>
          <Text style={homePgHeader}>Gender</Text>
          <Text style={styles.inputInfo}t>Gender</Text>
        </View>
        <View style={styles.subSection}>
          <Text style={homePgHeader}>Breed</Text>
          <Text style={styles.inputInfo}>Breed</Text>
        </View>
      </View>
      <NavBar />
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
    height: 112
  },
  widgetText: {
    fontSize: 20,
    maxWidth: 310,
    maxHeight: 58
  },
  editText: {
    display: 'flex',
    justifyContent: 'flex-end',
    fontSize: 12,
    textDecorationLine: 'underline',

  },
  infoSection: {
    display: 'flex',
    justifyContent:'flex-start',
    fontFamily: "ConcertOne-Regular",
    marginLeft: 20,
  },
  inputInfo: {
    fontFamily: "ConcertOne-Regular",
    fontSize: 16,
  },
  container: {
    backgroundColor: "#F8F5E6",
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "left",
    marginLeft: 30,
  },
  subSection: {
    marginVertical: 20
  }
})

export default PetProfile