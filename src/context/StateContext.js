import React, { createContext, useState, useEffect } from "react";
export const StateContext = createContext();
import { useGetWeather } from "../hooks/useGetWeather";

export const StateProvider = (props) => {
  const [numWalks, setNumWalks] = useState(0);
  const [lat, setLat] = useState([]);
  const [lon, setLon] = useState([]);
  const [weather, setWeather] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const [name, setName] = useState("");

  const colors = {
    darkBlue: "#77C8E0",
    lightBlue: "#C4E8F2",
    green: "#D3DE36",
    red: "FF6477",
    background: "#F8F5E6",
  };

  if (lat && lon) {
    useGetWeather(
      lat,
      setLat,
      lon,
      setLon,
      weather,
      setWeather,
      error,
      setError,
      loading,
      setLoading
    );
  }

  const stateContext = {
    // Used for location services
    lat: lat,
    setLat: setLat,
    setLon: setLon,
    lon: lon,
    numWalks: numWalks,
    setNumWalks: setNumWalks,
    weather: weather,
    setWeather: setWeather,
    error: error,
    setError: setError,
    loadinf: loading,
    setLoading: setLoading,

    name: name,
    colors: colors,

    container: {
      backgroundColor: "#F8F5E6",
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    },
    blueButton: {
      borderRadius: 20,
      backgroundColor: "#77C8E0",
      display: "flex",
      width: 310,
      height: 63,
      justifyContent: "center",
      alignItems: "center",
      gap: 10,
      flexShrink: 0,
    },
    greenButton: {
      borderRadius: 20,
      backgroundColor: "#D3DE36",
      display: "flex",
      width: 310,
      height: 63,
      justifyContent: "center",
      alignItems: "center",
      gap: 10,
      flexShrink: 0,
    },
    buttonText: {
      fontFamily: "ConcertOne-Regular",
      fontSize: 32,
      fontStyle: "normal",
      fontWeight: 400,
    },
    header: {
      fontFamily: "ConcertOne-Regular",
      fontSize: 48,
      fontStyle: "normal",
      fontWeight: 400,
      lineHeight: 52.8 /* 52.8px */,
    },
    homePgHeader: {
      display: "flex",
      justifyContent: "flex-start",
      fontFamily: "ConcertOne-Regular",
      fontSize: 28,
      fontStyle: "normal",
      fontWeight: 400,
      lineHeight: 52.8 /* 52.8px */,
    },
    body: {
      fontFamily: "OpenSans-Regular",
      fontSize: 20,
      fontStyle: "normal",
      fontWeight: 400,
    },
    subHeader: {
      fontFamily: "ConcertOne-Regular",
      fontSize: 32,
      fontStyle: "normal",
      fontWeight: 400,
      lineHeight: 30,
      textAlign: "center",
    },
    doLater: {
      fontFamily: "ConcertOne-Regular",
      fontSize: 24,
      fontStyle: "normal",
      fontWeight: 400,
      lineHeight: "normal",
      textDecorationLine: "underline",
    },
    navBarSelected: {
      fontFamily: "OpenSans-Regular",
      fontSize: 14,
      fontWeight: "800",
    }
  };

  return (
    <StateContext.Provider value={[stateContext]}>
      {props.children}
    </StateContext.Provider>
  );
};
