import axios from "axios";
export const RETRIEVESMURF = "RETREIVESMURF";
export const LOADINGSMURFS = "LOADINGSMURFS";
export const PUSHSMURF = "PUSHSMURF";

export function retrieveSmurf() {
  return dispatch => {
    dispatch({ type: LOADINGSMURFS });

    axios
      .get("http://localhost:3333/smurfs")
      .then(res => {
        dispatch({ type: RETRIEVESMURF, payload: res.data });
      })
      .catch(err => {
        console.log(err);
      });
  };
}

export function pushSmurf(smurf) {
  return dispatch => {
    axios
      .post("http://localhost:3333/smurfs", smurf)
      .then(res => {
        dispatch({ type: PUSHSMURF, payload: res.data });
      })
      .catch(err => {
        console.log(err);
      });
  };
}
