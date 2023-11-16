// import * as tokenService from "./tokenService"

// no dogId in state....
// const BASE_URL = `${process.env.REACT_APP_BACK_END_SERVER_URL}/api/dogs/${dogId}/add-photo`

// const create = async (photoData) => {
//   try {
//     const res = await fetch(BASE_URL, {
//       method: "POST",
//       body: photoData,
//       headers: {
//         Authorization: `Bearer ${tokenService.getToken()}`,
//         "Content-Type": 'multipart/form-data',
//       },
//     });
//     return res.json();
//   } catch (error) {
//     console.log(error);
//   }
// };

// export{
//   create
// }


// export function create(photoData){
//   return fetch(`${BASE_URL}`, {
//     method: "POST",
//     body: photoData,
//     headers: {
//       Authorization: `Bearer ${tokenService.getToken()}`,
//       "Content-Type": 'multipart/form-data',
//     },
//   }).then((res) => {
//     if (res.ok) return res.json();
//     throw new Error(res.error);
//   })
// }
