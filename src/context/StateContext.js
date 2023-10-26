import React, { useState, createContext } from "react"
import { useFonts } from 'expo-font'

export const StateContext = createContext()

export const StateProvider = (props) => {

    let [fontsLoaded, fontError] = useFonts({
        'Concert-One': require('../../assets/fonts/ConcertOne-Regular.ttf'),
        'Open-Sans': require('../../assets/fonts/OpenSans-Regular.ttf')
})

    const styleContext = {
        container: {
            backgroundColor: "#F8F5E6",
            flex:1,
            justifyContent: 'center',
            alignItems: 'center',  
        },    
        blueButton: {
            borderRadius: 20,
            backgroundColor: '#77C8E0',
            display: 'flex',
            width: 310,
            height: 63,
            padding: '10 10 20 10',
            justifyContent: 'center',
            alignItems: 'center',
            gap: 10,
            flexShrink: 0,
        },
        greenButton: {
            borderRadius: 20,
            backgroundColor: '#D3DE36',
            display: 'flex',
            width: 310,
            height: 63,
            padding: '10 10 20 10',
            justifyContent: 'center',
            alignItems: 'center',
            gap: 10,
            flexShrink: 0,
        },
        buttonText: {
            fontFamily: 'Concert-One',
            fontSize: 32,
            fontStyle: 'normal',
            fontWeight: 400,
        },
        header: {
            fontFamily: 'Concert-One',
            fontSize: 48,
            fontStyle: 'normal',
            fontWeight: 400,
            lineHeight: 52.8, /* 52.8px */
        },
        body: {
            fontFamily:'Open-Sans',
            fontSize: 20,
            fontStyle: 'normal',
            fontWeight: 400,
        },
    }

    return (
        <StateContext.Provider value={[styleContext, fontsLoaded, fontError]}>
            {props.children}
        </StateContext.Provider>
    )
}