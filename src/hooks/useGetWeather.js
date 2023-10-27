import React, { useState, useEffect, useContext } from 'react'
import { StateContext } from '../context/StateContext'
import * as Location from 'expo-location'
import { WEATHER_API_KEY } from '@env'

export const useGetWeather = (lat, setLat, lon, setLon, weather, setWeather, error, setError, loading, setLoading) => {

  const fetchWeatherData = async () => {
    try {
      const response = await fetch(
        `http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&exclude=minutely,hourly&appid=${WEATHER_API_KEY}&units=imperial`
      )
      const data = await response.json()
      setWeather(data)
    } catch (error) {
      setError('Could not fetch weather')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    ;(async () => {
      let { status } = await Location.requestForegroundPermissionsAsync()
      if (status !== 'granted') {
        setError('Permission to access location was denied')
        return
      }
      let location = await Location.getCurrentPositionAsync({})
      setLat(location.coords.latitude)
      setLon(location.coords.longitude)
      await fetchWeatherData()
    })()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lat, lon])
  return [loading, error, weather]
}
