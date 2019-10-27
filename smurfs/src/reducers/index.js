import {RETRIEVESMURF, PUSHSMURF} from '../actions/index'

const initialState= {

}
export default function reducer(state = initialState, action){
 switch (action.type){
  case RETRIEVESMURF:{
   return {

   }
   }
   default:
    return{
     state
    }
  }
 }
