import React from "react";
import { Route } from "react-router-dom";
import PropTypes from "prop-types";

const RouteWithLayout = (props) => {
  const { component: Component, ...rest } = props;
  return (
    <Route
      {...rest}
      render={(matchProps) => (
        <Component
          characterData={props.characterData}
          userData={props.userData}
          handleSubmit={props.handleSubmit}
          removeCharater={props.removeCharater}
          loginflag={props.loginflag}
          signIN={props.signIN}
          signUP={props.signUP}
          signOUT={props.signOUT}
          modify={props.modify}
          {...props}
        />
      )}
    />
  );
};

RouteWithLayout.propTypes = {
  component: PropTypes.any.isRequired,
  path: PropTypes.string,
};

export default RouteWithLayout;
