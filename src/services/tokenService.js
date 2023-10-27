import jwt_decode from 'jwt-decode'
import AsyncStorage from '@react-native-async-storage/async-storage';

// function setToken(token) {
//   localStorage.setItem('token', token)
// }

const setToken = async (token) => {
  try {
    await AsyncStorage.setItem('token', token)
  } catch (error) {
    console.log(error)
  }
}

// function getToken() {
//   let token = localStorage.getItem('token')
//   if (token) {
//     const payload = jwt_decode(token)
//     if (payload.exp < Date.now() / 1000) {
//       localStorage.removeItem('token')
//       token = null
//     }
//   } else {
//     localStorage.removeItem('token')
//   }
//   return token
// }

const getToken = async () => {
  try {
    let token = await AsyncStorage.getItem('token')
    if (token) {
      const payload = jwt_decode(token)
      if (payload.exp < Date.now() / 1000) {
        await AsyncStorage.removeItem('token')
        token = null
      }
    } else {
      await AsyncStorage.removeItem('token')
    }
    return token
  } catch (error) {
    console.log(error)
  }
}

// function getUserFromToken() {
//   const token = getToken()
//   return token ? jwt_decode(token).user : null
  
// }

const getUserFromToken = async () => {
  try {
    const token = await getToken()
    return token ? jwt_decode(token).user : null
  } catch (error) {
    console.log(error)
  }
}

// function removeToken() {
//   localStorage.removeItem('token')
// }

const removeToken = async () => {
  try {
    await AsyncStorage.removeItem('token')
  } catch (error) {
    console.log(error)
  }
}

export { setToken, getToken, getUserFromToken, removeToken }