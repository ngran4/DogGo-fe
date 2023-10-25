import React, { useState, createContext } from "react"

export const StateContext = createContext()

export const StateProvider = (props) => {
    const styleContext = {
        title: {
            fontSize: 40,
        },
    }

    return (
        <StateContext.Provider value={[styleContext]}>
            {props.children}
        </StateContext.Provider>
    )
}