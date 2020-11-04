import React from 'react';
import PropTypes from "prop-types";
import { FormControl, InputLabel, MenuItem, Select } from '@material-ui/core';
import { WEIGHT_METRIC } from '../../../constants/user_defined';


export default function WeightMetricSelector(props) {

  function handleChange(event) {
    props.onSelect(event.target.value);
  }

  return (
    <FormControl style={{width: '100%', maxWidth: `${400}px`}}>
      <InputLabel>{props.label}</InputLabel>
      <Select onChange={handleChange}
              style={{width: '100%', maxWidth: `${400}px`}}
              defaultValue={WEIGHT_METRIC.metricTons}
              value={props.value}
      >
        <MenuItem value={WEIGHT_METRIC.metricTons} key={`weightMetricKey1`}>{WEIGHT_METRIC.metricTons}</MenuItem>
        <MenuItem value={WEIGHT_METRIC.lbs} key={`weightMetricKey2`}>{WEIGHT_METRIC.lbs}</MenuItem>
      </Select>
    </FormControl>
  );
}

WeightMetricSelector.propTypes = {
  value: PropTypes.string,
  label: PropTypes.string.isRequired,
  onSelect: PropTypes.func.isRequired
};
