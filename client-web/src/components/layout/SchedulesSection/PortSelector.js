import React from 'react';
import PropTypes from "prop-types";
import { makeStyles } from '@material-ui/core';
import { FormControl, InputLabel, MenuItem, Select, FormHelperText } from '@material-ui/core';


const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 80,
    width: 300
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function PortSelector(props) {
  const classes = useStyles();

  function handleChange(event) {
    props.onSelect(event.target.value);
  }

  return (
    <div className="row">
      <FormControl className={classes.formControl} >
        <InputLabel>{props.label}</InputLabel>
        <Select
          value={props.selectedPort}
          onChange={handleChange}
        >
          {props.ports.map((port, index) =>
            <MenuItem value={port._id} key={`portSelectorKey${index}`}>{port.portName}</MenuItem>
          )}
        </Select>
        <FormHelperText error>{props.errors}</FormHelperText>
      </FormControl>
    </div>
  );
}

PortSelector.propTypes = {
  selectedPort: PropTypes.string.isRequired,
  ports: PropTypes.array.isRequired,
  label: PropTypes.string.isRequired,
  errors: PropTypes.string,
  onSelect: PropTypes.func.isRequired
};
