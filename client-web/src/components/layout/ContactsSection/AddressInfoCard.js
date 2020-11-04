import React from "react";
import { Grid, Typography } from '@material-ui/core';
import LocationOn from '@material-ui/icons/LocationOn';


export default function AddressInfoCard() {

  return(
    <Grid container spacing={3} style={{textAlign: 'center'}}>
      <Grid item xs={12} sm={12} md={12} lg={12} >
        <LocationOn color='primary' style={{transform: 'scale(1.8)'}}/>
      </Grid>
      <Grid item xs={12} sm={12} md={12} lg={12} style={{paddingTop: 0}}>
        <Typography variant="h6" component="h6">
          <b>Address</b>
        </Typography>
      <br/>
      Allied Ocean Transport, LLC
      <br/>
      2598 East Sunrise Blvd.
      <br/>
      Suite 210A
      <br/>
      Fort Lauderdale, FL
      <br/>
      33304
      <br/>
      USA
      </Grid>
    </Grid>
  );

}
