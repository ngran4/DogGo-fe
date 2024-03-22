import * as tokenService from './tokenService'

const BASE_URL = `${process.env.REACT_APP_BACK_END_SERVER_URL}/api/profiles`

async function getAllProfiles () {
  try{
    const token = await tokenService.getToken();
    const headers = new Headers();
    headers.append("Authorization", `Bearer ${token}`);
    headers.append("Content-Type", "application/json");
    const response = await fetch(BASE_URL, {
      method: "GET",
      headers: headers,
    })
    const json = await response.json();
    console.log(json, "<----- json in getAllProfiles");
  return res.json()
} catch (error) {
  throw error
}
}

const getProfile = async (id) => {
  try {
    const res = await fetch(`${BASE_URL}/${id}`, {
      method: 'GET', 
      headers: { Authorization: `Bearer ${tokenService.getToken()}` }
    })
    return res.json()
  } catch (error) {
    console.log(error)
  }
}

async function addPhoto (photoData, profileId) {
  const res = await fetch(`${BASE_URL}/${profileId}/add-photo`, {
    method: 'PUT',
    headers: {
      Authorization: `Bearer ${tokenService.getToken()}`
    },
    body: photoData
  })
  return await res.json()
}

const friendsIdx = async () => {
  try {
    const res = await fetch(`${BASE_URL}/friends`, {
      headers: { Authorization: `Bearer ${tokenService.getToken()}` }
    })
    return res.json()
  } catch (error) {
    console.log(error)
  }
}

const friendRequests = async () => {
  try {
    const res = await fetch(`${BASE_URL}/requests`, {
      headers: { Authorization: `Bearer ${tokenService.getToken()}` }
    })
    return res.json()
  } catch (error) {
    console.log(error)
  }
}

const sendFriendRequest = async (id) => {
  try {
    const res = await fetch(`${BASE_URL}/${id}/sendFriendRequest`, {
      method: 'PATCH',
      headers: { Authorization: `Bearer ${tokenService.getToken()}` }
    })
    return res.json()
  } catch (error) {
    console.log(error)
  }
}

const acceptRequest = async (id) => {
  try {
    const res = await fetch(`${BASE_URL}/${id}/acceptRequest`, {
      method: 'PATCH',
      headers: { Authorization: `Bearer ${tokenService.getToken()}` }
    })
    return res.json()
  } catch (error) {
    console.log(error)
  }
}

const denyRequest = async (id) => {
  try {
    const res = await fetch(`${BASE_URL}/${id}/denyRequest`, {
      method: 'PATCH',
      headers: { Authorization: `Bearer ${tokenService.getToken()}` }
    })
    return res.json()
  } catch (error) {
    console.log(error)
  }
}



// const updateProfile = async (profileData) => {
//   try {
//     const res = await fetch(`${BASE_URL}/edit`, {
//       headers: { 'Authorization': `Bearer ${tokenService.getToken()}`,
//       'Content-Type': 'application/json'
//       },
//       body: JSON.stringify(profileData)
//     })
//   } catch (error) {
//     console.log(error)
//   }
// }

export {
  getAllProfiles,
  getProfile,
  addPhoto,
  friendsIdx,
  friendRequests,
  sendFriendRequest,
  acceptRequest,
  denyRequest,
  // updateProfile,
}
