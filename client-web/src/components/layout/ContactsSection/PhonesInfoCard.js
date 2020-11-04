import React from "react";
import { Grid, Typography } from '@material-ui/core';
import PhoneInTalk from '@material-ui/icons/PhoneInTalk';


export default function PhonesInfoCard() {

  return(
    <Grid container spacing={3} style={{textAlign: 'center'}}>
      <Grid item xs={12} sm={12} md={12} lg={12} >
        <PhoneInTalk color='primary' style={{transform: 'scale(1.8)'}}/>
      </Grid>
      <Grid item xs={12} sm={12} md={12} lg={12} style={{paddingTop: 0}}>
        <Typography variant="h6" component="h6">
          <b>Phone</b>
        </Typography>
        <br/>
        Phone: +1-954-764-9670
      </Grid>
    </Grid>
  );

}
