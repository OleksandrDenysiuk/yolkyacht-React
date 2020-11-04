import React, { Component } from "react";
import Vertig from '../../../images/Vertig_small.jpg';
import { Container, Grid, Typography } from '@material-ui/core';
import CopyrightFooter from '../ContactsSection/CopyrightFooter'


const imageDivStyle = {
  margin: 0,
  minHeight: `${100}vh`,
  backgroundImage: `linear-gradient(rgba(255,255,255,0.8), rgba(255,255,255,0.6)), url(${Vertig})`,
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  paddingBottom: 30,
  position: 'relative'
}

export default class AboutUsSection extends Component {

  render() {

    return (
      <div id='aboutUsSection' style={{margin: 0, padding: 0}}>
        <main style={imageDivStyle}>
          <Container style={{paddingTop: 30, color: '#3365A7', textTransform: 'uppercase'}}>
            <Typography component="h4" variant="h4" align="center" >
              About Us
            </Typography>
          </Container>
          <Container style={{paddingTop: 30, color: '#3365A7'}}>
            <Typography component="h6" variant="h5" align="center" >
              Allied Ocean Transport
            </Typography>
          </Container>
          <Grid container style={{paddingTop: 30}}>
            <Grid item xs={1} sm={1} md={2} lg={2}></Grid>
            <Grid item xs={12} sm={10} md={8} lg={8} style={{padding: 15}}>
              <Grid container>
                <p align="justify" style={{fontWeight: 500, fontSize: `${1.3}em`}}>
                  Founded upon established relationships with repeat yacht transport customers, Allied Ocean Transport,
                  LLC ("Allied Ocean") is a direct carrier providing safe, reliable, and cost-effective yacht
                  shipping and associated logistics services supported by established schedules and convenient
                  booking options for yachts and boats of any size and weight worldwide.
                  <br/><br/>
                  In addition to yacht transport services, Allied Ocean also provides international cargo shipping
                  services directly to customers and through established relationships with freight forwarders.
                  <br/><br/>
                  The Allied Ocean Management Team is comprised of business professionals with experience ranging
                  from the development of a world leading independent yacht shipping company and maritime operations
                  to extensive business development, investment banking, capitalization, andtransactions in multiple
                  sectors including banking, private equity, real estate, government, and corporate.
                  <br/><br/>
                  The Allied Ocean Management Team has successfully supported closing USD $1 billion+ in
                  capitalizations, acquisitions, dispositions, mergers, and partnering arrangements to develop new
                  business opportunities.
                </p>
              </Grid>
            </Grid>
            <Grid item xs={1} sm={1} md={2} lg={2}></Grid>
          </Grid>
          <CopyrightFooter/>
        </main>
      </div>
    );
  }
}

