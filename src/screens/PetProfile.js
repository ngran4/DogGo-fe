import * as React from 'react';
import { View, Text } from 'react-native'; 
import { StateContext } from '../context/StateContext'



const PetProfile = ({navigation}) => {
  const [stateContext] = useContext(StateContext)
  const {dogName } = stateContext

  return (
    <SafeAreaView>
      <TouchableOpacity><Text style={styles.editText}>Edit Pet Profile</Text></TouchableOpacity>
      <View
      style={styles.widget}>
      {/* <View style={{ height: 8, width: 8 }}></View> */}
      <Text style={buttonText}>{dogName}</Text>
      <Text>Age</Text>
      </View>
      <Text>Birthday</Text>
      <Text>Gender</Text>
      <Text>Breed</Text>
    </SafeAreaView>
  )
}

export default PetProfile