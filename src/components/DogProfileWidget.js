import * as React from 'react'
import { useContext, useEffect } from 'react'
import { StateContext } from '../context/StateContext'
import { SafeAreaView, StyleSheet, Image, Text, TouchableOpacity, View, Dimensions } from 'react-native'


const screenWidth = Dimensions.get('window').width

const DogProfileWidget = ({ navigation }) => {
  const [stateContext] = useContext(StateContext)
  const { buttonText, dogName, dogPhoto, dogAge } = stateContext


  return (
    <SafeAreaView>
      {dogName
        ? (
          < TouchableOpacity
            style={styles.widget}
            onPress={() => navigation.navigate('Pet Profile')}
          >
            <View style={{ height: 8, width: 8 }}></View>
            <TouchableOpacity onPress={() => navigation.navigate('Edit Pet')}>
              {dogPhoto
                ? (
                  <Image source={{ uri: image }} style={styles.roundedImage} />
                )
                : (
                  <Image style={styles.tinyLogo} source={require('../../assets/images/addphoto.png')} />
                )}
            </TouchableOpacity>
            <Text style={buttonText}>{dogName}</Text>
            {/* <Text>Age</Text> */}
          </TouchableOpacity>
        )
        : (
          <TouchableOpacity
            style={styles.widget}
            onPress={() => navigation.navigate('Add a Furry Friend')}
          >
            <Image style={styles.tinyLogo} source={require('../../assets/images/addphoto.png')} />
            <Text style={buttonText}>Add Pet</Text>
          </TouchableOpacity>
        )}
    </SafeAreaView >
  )
}

const styles = StyleSheet.create({
  widget: {
    display: 'flex',
    flexWrap: 'wrap',
    backgroundColor: '#c4e8f2',
    padding: 10,
    borderRadius: 20,
    margin: 10,
    width: screenWidth * 0.95,
    height: 64
  },
  widgetText: {
    fontSize: 20,
    maxWidth: 310,
    maxHeight: 58
  },
  tinyLogo: {
    width: 50,
    height: 50
  }
})

export default DogProfileWidget
