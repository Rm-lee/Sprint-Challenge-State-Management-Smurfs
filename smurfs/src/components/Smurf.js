import React from 'react';

function Smurf(props) {
 return (
  <div className="smurf-details">
   <p>{props.details.name}</p>
   <p>{props.details.age}</p>
   <p>{props.details.height}</p>
  </div>
 );
 }

export default Smurf