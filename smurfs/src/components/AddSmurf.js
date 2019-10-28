import React from 'react';
import {useState} from 'react'
import { connect } from 'react-redux'
import {pushSmurf} from '../actions/index'
function AddSmurf(props) {

 const [state,setState] = useState({
  name: '',
  age:'',
  height:''
 })


 function submitHandler(e) {
  e.preventDefault()
  const {name,age,height} = state
  const newSmurf = {
   name,
   age,
   height
  } 
  console.log(newSmurf)
  props.pushSmurf(newSmurf)
 }
 function handleChange(e){
  const value = e.target.value
  setState({
   ...state,
   [e.target.name]:value
  })
 
 }

 return (
  <div>
   <form onSubmit={submitHandler}>
    <input type="text" name="name" placeholder="name" value={state.name} onChange={handleChange}/><br/>
    <input type="text" name="age" placeholder="age" value={state.age} onChange={handleChange}/><br/>
    <input type="text" name="height" placeholder="height" value={state.height} onChange={handleChange}/><br/>
    <button>Add Smurf</button>

   </form>
  </div>
 );
 }
function mapStateToProps(state) {
 return{
  smurfs: state.smurfs
 }
}
const mapDispatchToProps = {
 pushSmurf: pushSmurf
}
export default connect(
 mapStateToProps,
 mapDispatchToProps,
 )(AddSmurf)