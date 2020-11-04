import React from 'react';
import PropTypes from "prop-types";
import { FormControl, InputLabel, MenuItem, Select } from '@material-ui/core';
import { LENGTH_METRIC } from '../../../constants/user_defined';


export default function LengthMetricSelector(props) {

  function handleChange(event) {
    props.onSelect(event.target.value);
  }

  return (
    <FormControl style={{width: '100%', maxWidth: `${400}px`}}>
      <InputLabel>{props.label}</InputLabel>
      <Select onChange={handleChange}
              style={{width: '100%', maxWidth: `${400}px`}}
              defaultValue={LENGTH_METRIC.meters}
              value={props.value}
      >
        <MenuItem value={LENGTH_METRIC.meters} key={`lengthMetricKey2`} selected>{LENGTH_METRIC.meters}</MenuItem>
        <MenuItem value={LENGTH_METRIC.feet} key={`lengthMetricKey3`}>{LENGTH_METRIC.feet}</MenuItem>
      </Select>
    </FormControl>
  );
}

LengthMetricSelector.propTypes = {
  value: PropTypes.string,
  label: PropTypes.string.isRequired,
  onSelect: PropTypes.func.isRequired
};
