import * as React from 'react';
import { View, Text } from 'react-native'; 
import { StateContext } from '../context/StateContext'



const PetProfile = () => {
  const [stateContext] = useContext(StateContext)

  return (
    <SafeAreaView>
      <TouchableOpacity><Text style={styles.editText}>Edit Walking Schedule</Text></TouchableOpacity>
      <TouchableOpacity
      style={styles.widget}
      onPress={() => navigation.navigate('Pet Profile')}>
      {/* <View style={{ height: 8, width: 8 }}></View> */}
      <Text style={buttonText}>Dog Name</Text>
      <Text>Age</Text>
      </TouchableOpacity>
      <Text>Birthday</Text>
      <Text>Gender</Text>
      <Text>Breed</Text>
    </SafeAreaView>
  )
}

export default PetProfile