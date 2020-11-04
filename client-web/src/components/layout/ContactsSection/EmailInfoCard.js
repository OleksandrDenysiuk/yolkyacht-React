import React from "react";
import { Grid, Typography } from '@material-ui/core';
import LocalPostOffice from '@material-ui/icons/LocalPostOffice';

export default function EmailInfoCard() {

  return(
    <Grid container spacing={3} style={{textAlign: 'center'}}>
      <Grid item xs={12} sm={12} md={12} lg={12} >
        <LocalPostOffice color='primary' style={{transform: 'scale(1.8)'}}/>
      </Grid>
      <Grid item xs={12} sm={12} md={12} lg={12} style={{paddingTop: 0}}>
        <Typography variant="h6" component="h6">
          <b>E-mail</b>
        </Typography>
        <br/>
          Info Email:&nbsp;<a href="mailto:info@allied-yacht.com" style={{textDecoration: 'none', color: 'black'}}>info@allied-yacht.com</a>
        <br/>
          Sales Email:&nbsp;<a href="mailto:sales@allied-yacht.com:" style={{textDecoration: 'none', color: 'black'}}>sales@allied-yacht.com</a>
      </Grid>
    </Grid>
  );

}
