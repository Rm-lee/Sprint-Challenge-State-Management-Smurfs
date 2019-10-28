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
 function handleChange(e){
  const value = e.target.value
  setState({
   [e.target.name]:value
  })
 }

 return (
  <div>
   <form onSubmit={submitHandler}>
    <input type="text" name="name" value={state.name} onChange={handleChange}/><br/>
    <input type="text" name="age" value={state.age} onChange={handleChange}/><br/>
    <input type="text" name="height" value={state.height} onChange={handleChange}/><br/>

   </form>
  </div>
 );
 }

export default connect(
 mapStateToProps,
 mapDispatchToProps,
 )(AddSmurf)