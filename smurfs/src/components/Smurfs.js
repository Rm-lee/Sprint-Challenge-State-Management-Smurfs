import React from 'react';
import {useEffect} from 'react'
import {connect} from "react-redux"
import {retrieveSmurf} from '../actions/index'

function Smurfs(props) {
useEffect(() => {
props.retrieveSmurf()
},[])

 return (
  <div>
   
  </div>
 );

 }
 function mapStateToProps(state) {
  return{
  isLoading: state.isLoading,
  smurfs: state.smurfs,
  error: state.error
  }
 }
 const mapDispatchToProps = {
  retrieveSmurf
 }
export default connect(
 mapStateToProps,
 mapDispatchToProps
)(Smurfs)