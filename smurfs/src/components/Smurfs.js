import React from "react";
import { useEffect } from "react";
import { connect } from "react-redux";
import Smurf from "./Smurf";
import { retrieveSmurf } from "../actions/index";

function Smurfs(props) {
  const { isLoading } = props;

  useEffect(() => {
    props.retrieveSmurf();
  }, [isLoading]);

  return (
    <div>
      {props.smurfs &&
        props.smurfs.map((smurf, index) => (
          <Smurf details={smurf} key={index} />
        ))}
    </div>
  );
}
function mapStateToProps(state) {
  return {
    isLoading: state.isLoading,
    smurfs: state.smurfs,
    error: state.error
  };
}
const mapDispatchToProps = {
  retrieveSmurf
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Smurfs);
