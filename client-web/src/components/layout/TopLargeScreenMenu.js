import React from 'react';
import { Grid, Typography } from '@material-ui/core'
import { Link } from 'react-scroll';


const topMenuFontStyle = {textTransform: 'uppercase', fontWeight: '600'};

export default function TopLargeScreenMenu() {

  return (
    <Grid container style={{paddingTop: 30}}>
      <Grid item xs={12} sm={12} md={2} lg={4} >
      </Grid>
      <Grid item xs={12} sm={12} md={8} lg={4} style={{color: '#3365A7', textAlign: 'center'}}>
        <Link style={{textDecoration: 'none', display: 'inline-block', paddingLeft: 15, paddingRight: 15, cursor: 'pointer'}}
              activeClass="active"
              to="schedulesSection"
              spy
              smooth
              duration={500}
              isDynamic
        >
          <Typography align="center" style={topMenuFontStyle}>
            Schedule
          </Typography>
        </Link>
        <Link style={{textDecoration: 'none', display: 'inline-block',  paddingLeft: 15, paddingRight: 5, cursor: 'pointer'}}
              activeClass="active"
              to="contactsSection"
              spy
              smooth
              duration={1000}
              isDynamic
        >
          <Typography align="center" style={topMenuFontStyle}>
            Contacts
          </Typography>
        </Link>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <Link style={{textDecoration: 'none', display: 'inline-block', paddingLeft: 5, paddingRight: 15, cursor: 'pointer'}}
              activeClass="active"
              to="aboutUsSection"
              spy
              smooth
              duration={1500}
              isDynamic
        >
          <Typography align="center" style={topMenuFontStyle}>
            About&nbsp;Us
          </Typography>
        </Link>
      </Grid>
    </Grid>
  );
}