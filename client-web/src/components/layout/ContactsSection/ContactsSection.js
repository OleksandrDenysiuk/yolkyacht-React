import React, { Component } from "react";
import SeaSmall from '../../../images/SeaSmall.jpg';
import { Container, Grid, Typography } from '@material-ui/core';
import AddressInfoCard from './AddressInfoCard';
import EmailInfoCard from './EmailInfoCard';
import PhonesInfoCard from './PhonesInfoCard';


const imageDivStyle = {
  margin: 0,
  minHeight: `${100}vh`,
  backgroundImage: `linear-gradient(rgba(255,255,255,0.8), rgba(255,255,255,0.5)), url(${SeaSmall})`,
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  paddingBottom: 30
}

export default class ContactsSection extends Component {

  render() {

    return (
      <div id='contactsSection' style={{margin: 0, padding: 0}}>
        <main style={imageDivStyle}>
          <Container style={{paddingTop: 30, color: '#3365A7', textTransform: 'uppercase'}}>
            <Typography component="h4" variant="h4" align="center" >
              Contacts
            </Typography>
          </Container>
          <Container style={{paddingTop: 30, color: '#3365A7'}}>
            <Typography component="h6" variant="h5" align="center" >
              Allied Ocean Transport
            </Typography>
          </Container>
          <Grid container style={{paddingTop: 30}}>
            <Grid item xs={1} sm={1} md={2} lg={2}></Grid>
            <Grid item xs={12} sm={10} md={8} lg={8}>
              <Grid container>
                <Grid item xs={12} sm={12} md={4} lg={4} style={{marginTop: 30}}>
                  <AddressInfoCard/>
                </Grid>
                <Grid item xs={12} sm={12} md={4} lg={4} style={{marginTop: 30}}>
                  <EmailInfoCard/>
                </Grid>
                <Grid item xs={12} sm={12} md={4} lg={4} style={{marginTop: 30}}>
                  <PhonesInfoCard/>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={1} sm={1} md={2} lg={2}></Grid>
          </Grid>
        </main>
      </div>
    );
  }
}

