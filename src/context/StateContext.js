import React, { createContext, useState  } from "react"


export const StateContext = createContext()

export const StateProvider = (props) => {
    const [numWalks, setNumWalks] = useState(0)
    const styleContext = {
        numWalks, setNumWalks,
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
            justifyContent: 'center',
            alignItems: 'center',
            gap: 10,
            flexShrink: 0,
        },
        buttonText: {
            fontFamily: 'ConcertOne-Regular',
            fontSize: 32,
            fontStyle: 'normal',
            fontWeight: 400,
        },
        header: {
            fontFamily: 'ConcertOne-Regular',
            fontSize: 48,
            fontStyle: 'normal',
            fontWeight: 400,
            lineHeight: 52.8, /* 52.8px */
        },
        body: {
            fontFamily:'OpenSans-Regular',
            fontSize: 20,
            fontStyle: 'normal',
            fontWeight: 400,
        },
    }

    return (
        <StateContext.Provider value={[styleContext]}> 
            {props.children}
        </StateContext.Provider>
    )
}