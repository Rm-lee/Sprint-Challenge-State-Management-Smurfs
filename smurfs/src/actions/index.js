import axios from 'axios'
export const RETRIEVESMURF = "RETREIVESMURF"
export const LOADINGSMURFS = "LOADINGSMURFS"
export const PUSHSMURF = "PUSHSMURF"

export function retrieveSmurf(){
 return (dispatch) => {
  dispatch({type:LOADINGSMURFS})

  axios.get('http://localhost:3333/smurfs')
  .then(res => {
   dispatch({type: RETRIEVESMURF, payload: res.data})
   console.log(res.data)
  })
  .catch(err => {
   console.log(err)
  })
 }
}

// export function push(){
//  return (dispatch) => {
//   axios.post('http://localhost:3333/smurfs')
//   .then(res => {
//    dispatch({type: RETREIVESMURF, payload: res.data})
//   })
//   .catch(err => {
//    console.log(err)
//   })
//  }
// }