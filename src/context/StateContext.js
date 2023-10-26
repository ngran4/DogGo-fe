import React, { useState, createContext } from "react"

export const StateContext = createContext()

export const StateProvider = (props) => {

    const styleContext = {
        navOptions: {
            title: "",
            backgroundColor: "#F8F5E6"
        },
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
            // fontFamily: Concert One,
            fontSize: 32,
            fontStyle: 'normal',
            fontWeight: 400,
            lineHeight: 'normal',
        },
        header: {
            // fontFamily: Concert One,
            fontSize: 48,
            fontStyle: 'normal',
            fontWeight: 400,
            lineHeight: 52.8, /* 52.8px */
        },
        body: {
            // font-family: Open Sans,
            fontSize: 20,
            fontStyle: 'normal',
            fontWeight: 400,
            lineHeight: 'normal',
        },
    }

    return (
        <StateContext.Provider value={[styleContext]}>
            {props.children}
        </StateContext.Provider>
    )
}