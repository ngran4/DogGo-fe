import React, {useContext} from 'react'
import { StateContext } from '../context/StateContext'
import {Text, View, StyleSheet,} from 'react-native'
import DogGoAlertIcon from '../../assets/images/DogGoAlertIcon'

const WalkAlert = ({text, time, styles}) => {
    const [stateContext] = useContext(StateContext)
    const {navBarSelected, body} = stateContext 

  return (
    <View style={[alert, styles, {margin: 15}]}>
        <View style={{height: 38, width: 38,}}>
            <DogGoAlertIcon style={{marginLeft: 5}}/>
        </View>
        <View >
            {/* app name, time, text */}
            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                {/* app name and time */}
                <Text style={navBarSelected}>DogGo</Text>
                <Text style={{marginRight:15}}>{time}</Text>
            </View>
            <View >
                <Text style={[navBarSelected]}>{text}</Text>
            </View>
        </View>
    </View>
  )
}

const alert = StyleSheet.create({
    flexDirection: 'row',
    width: 358,
    paddingTop: 14,
    paddingBottom: 14,
    alignItems: 'flex-start',
    gap: 10,
    borderRadius: 24,
    backgroundColor: '#a6a6a670',
})

export default WalkAlert