import React from 'react';
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

export default function YearSelector(props) {
  const classes = useStyles();

  return (
    <div className="row">
      <FormControl className={classes.formControl} >
        <InputLabel>Year</InputLabel>
        <Select value={2020} disabled >
          <MenuItem value={2020} key={`portSelectorKey${2020}`}>2020</MenuItem>
        </Select>
        <FormHelperText error>{props.errors}</FormHelperText>
      </FormControl>
    </div>
  );
}

