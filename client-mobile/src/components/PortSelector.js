import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, Picker } from 'react-native';
import { withTheme } from 'react-native-elements';


function PortSelector(props) {

  return (
    <View style={{marginTop:15}}>
      <Text style={{color: props.theme.colors.primary}}>{props.label}</Text>
      <Picker
        selectedValue={props.selectedPort}
        onValueChange={(value) => props.onSelect(value)}
      >
        {props.ports.map((port, index) =>
          <Picker.Item value={port._id} key={`portSelectorKey${index}`} label={port.shortName}/>
        )}
      </Picker>
    </View>
  );

}

PortSelector.propTypes = {
  selectedPort: PropTypes.string.isRequired,
  ports: PropTypes.array.isRequired,
  label: PropTypes.string.isRequired,
  errors: PropTypes.string,
  onSelect: PropTypes.func.isRequired
};

export default withTheme(PortSelector);

