import {RETRIEVESMURF, PUSHSMURF, LOADINGSMURFS} from '../actions/index'

const initialState= {
smurfs: [],
isLoading:false,
error:null
}
export default function reducer(state = initialState, action){
 switch (action.type){
  case LOADINGSMURFS: {
   return {
    ...state,
    isLoading:true
   }
  }
  case RETRIEVESMURF:{
   return {
    ...state,
    smurfs: [...state.smurfs, action.payload]
   }
   }
   default:
    return{
     state
    }
  }
 }
