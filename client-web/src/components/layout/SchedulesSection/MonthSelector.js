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

export default function MonthSelector(props) {
  const classes = useStyles();

  function handleChange(event) {
    props.onSelect(event.target.value);
  }

  return (
    <div className="row">
      <FormControl className={classes.formControl} >
        <InputLabel>Month</InputLabel>
        <Select
          value={props.month.toString()}
          onChange={handleChange}
        >
          <MenuItem value={''} key={'monthSelectorKeyEmpty'}><em>All Year Round</em></MenuItem>
            <MenuItem value={0} key={'monthSelectorKey0'}>January</MenuItem>
            <MenuItem value={1} key={'monthSelectorKey1'}>February</MenuItem>
            <MenuItem value={2} key={'monthSelectorKey2'}>March</MenuItem>
            <MenuItem value={3} key={'monthSelectorKey3'}>April</MenuItem>
            <MenuItem value={4} key={'monthSelectorKey4'}>May</MenuItem>
            <MenuItem value={5} key={'monthSelectorKey5'}>June</MenuItem>
            <MenuItem value={6} key={'monthSelectorKey6'}>July</MenuItem>
            <MenuItem value={7} key={'monthSelectorKey7'}>August</MenuItem>
            <MenuItem value={8} key={'monthSelectorKey8'}>September</MenuItem>
            <MenuItem value={9} key={'monthSelectorKey9'}>October</MenuItem>
            <MenuItem value={10} key={'monthSelectorKey10'}>November</MenuItem>
            <MenuItem value={11} key={'monthSelectorKey11'}>December</MenuItem>
        </Select>
        <FormHelperText error>{props.errors}</FormHelperText>
      </FormControl>
    </div>
  );
}

MonthSelector.propTypes = {
  selectedMonth: PropTypes.string,
  errors: PropTypes.string,
  onSelect: PropTypes.func.isRequired
};
