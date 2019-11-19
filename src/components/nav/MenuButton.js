import React, { Component } from "react";
import PropTypes from "prop-types";
import { matchPath, withRouter } from "react-router-dom";

import { Box, Text } from "grommet";
import RoutedButton from "./RoutedButton";

class MenuButton extends Component {
    static propTypes = {
        match: PropTypes.object.isRequired,
        location: PropTypes.object.isRequired,
        history: PropTypes.object.isRequired
      }

  render() {
    const { match, location, history, active, Icon, label, path, ...rest } = this.props;
    return (
      <RoutedButton
        active={active || !!matchPath(location.pathname, { path })}
        hoverIndicator="dark-4"
        path={path}
        {...rest}
      >
        <Box
          pad={{ vertical: "small" }}
          gap="xsmall"
          align="center"
          justify="center"
        >
          <Icon color="light-5" />
          <Text size="xsmall" color="white">
            {label}
          </Text>
        </Box>
      </RoutedButton>
    );
  }
}

export default withRouter(MenuButton)
