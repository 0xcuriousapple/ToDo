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
          handleSubmit={props.handleSubmit}
          removeCharater={props.removeCharater}
          signIN={props.signIN}
          signUP={props.signUP}
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
