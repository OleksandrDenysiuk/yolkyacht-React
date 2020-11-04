import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import { withTheme } from 'react-native-elements';


function PrimaryColorDivider(props) {

  return (
    <View
      style={{
        borderBottomColor: props.theme.colors.primary,
        borderBottomWidth: 1,
        width: `${props.width}%`
      }}
    />
  );

}

PrimaryColorDivider.propTypes = {
  width: PropTypes.number.isRequired
};

export default withTheme(PrimaryColorDivider);

