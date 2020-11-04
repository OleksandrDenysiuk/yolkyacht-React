import React from 'react';
import PropTypes from "prop-types";
import { FormControl, InputLabel, MenuItem, Select } from '@material-ui/core';
import { PURPOSE_OF_TRANSPORT } from '../../../constants/user_defined';


export default function TransportPurposeSelector(props) {

  function handleChange(event) {
    props.onSelect(event.target.value);
  }

  return (
      <FormControl style={{width: '100%', maxWidth: `${400}px`}}>
        <InputLabel>Purpose of Transport</InputLabel>
        <Select onChange={handleChange}
                value={props.value}
                defaultValue={''}
                style={{width: '100%', maxWidth: `${400}px`}}
        >
          <MenuItem value='' key={`transportPurposeKey1`}></MenuItem>
          <MenuItem value={PURPOSE_OF_TRANSPORT.boatShow} key={`transportPurposeKey2`}>{PURPOSE_OF_TRANSPORT.boatShow}</MenuItem>
          <MenuItem value={PURPOSE_OF_TRANSPORT.charter} key={`transportPurposeKey3`}>{PURPOSE_OF_TRANSPORT.charter}</MenuItem>
          <MenuItem value={PURPOSE_OF_TRANSPORT.purchaseSale} key={`transportPurposeKey4`}>{PURPOSE_OF_TRANSPORT.purchaseSale}</MenuItem>
          <MenuItem value={PURPOSE_OF_TRANSPORT.yardWork} key={`transportPurposeKey5`}>{PURPOSE_OF_TRANSPORT.yardWork}</MenuItem>
          <MenuItem value={PURPOSE_OF_TRANSPORT.fishingTournament} key={`transportPurposeKey6`}>{PURPOSE_OF_TRANSPORT.fishingTournament}</MenuItem>
          <MenuItem value={PURPOSE_OF_TRANSPORT.regatta} key={`transportPurposeKey7`}>{PURPOSE_OF_TRANSPORT.regatta}</MenuItem>
          <MenuItem value={PURPOSE_OF_TRANSPORT.other} key={`transportPurposeKey8`}>{PURPOSE_OF_TRANSPORT.other}</MenuItem>
        </Select>
      </FormControl>
  );
}

TransportPurposeSelector.propTypes = {
  value: PropTypes.string,
  onSelect: PropTypes.func.isRequired
};
