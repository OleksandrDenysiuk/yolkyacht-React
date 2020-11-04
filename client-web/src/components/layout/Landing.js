import React, { Component } from 'react';
import Scroll, { Link } from 'react-scroll';
import { Typography, Button, Box } from '@material-ui/core';
import ScrollToTop from 'react-scroll-up';
import AboutUsSection from './AboutUsSection/AboutUsSection';
import ContactsSection from './ContactsSection/ContactsSection';
import SchedulesSection from './SchedulesSection/SchedulesSection';
import QuoteRequestSection from './QuoteRequestSection/QuoteRequestSection';
import ArrowUpward from '@material-ui/icons/ArrowUpward';
import TopLargeScreenMenu from './TopLargeScreenMenu';
import TopMobileMenu from './TopMobileMenu';
import G2Transport from '../../images/YachTransport_small.jpg';

const imageDivStyle = {
  margin: 0,
  padding: 0,
  minHeight: `${100}vh`,
  backgroundImage: `url(${G2Transport})`,
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover'
}



export default class Landing extends Component {

  constructor(props) {
    super(props);
    console.log("Client.  process.env.NODE_ENV: ",process.env.NODE_ENV);
    console.log("Client.  process.env.PROXY_ENV: ",process.env.PROXY_ENV);

    this.handleSelectSchedule = this.handleSelectSchedule.bind(this);
  }

  handleSelectSchedule() {
    Scroll.scroller.scrollTo('quoteRequestSection', {
      duration: 1000,
      delay: 100,
      smooth: "easeInOutQuint",
    })
  }

  render() {

    return (
      <div style={{margin: 0, padding: 0}}>
        <div style={imageDivStyle}>
          <Box display={{ xs: 'block', sm: 'none', md: 'none', lg: 'none' }}>
            <TopMobileMenu/>
          </Box>
          <Box display={{ xs: 'none', sm: 'block', md: 'block', lg: 'block' }}>
            <TopLargeScreenMenu/>
          </Box>
          <div style={{position: 'absolute', bottom: '5%', left: '10%'}}>
            <Typography align='left' style={{width: '100%', fontFamily: 'Montserrat', fontStyle: 'normal', fontSize: '46px', lineHeight: '56px', fontWeight: '600', color: 'white'}}>
              Make the world your destination
            </Typography>
            <br/>
            <Button variant="contained" color="primary" style={{backgroundColor: 'white', borderRadius: 0 }} >
              <Link style={{textDecoration: 'none', cursor: 'pointer', align: 'center' }}
                    activeClass="active"
                    to="quoteRequestSection"
                    spy
                    smooth
                    duration={1000}
                    isDynamic
              >
                <Typography  style={{width: '100%', marginTop: 10, marginBottom: 10, marginLeft: 0, marginRight: 50, textTransform: 'uppercase', fontWeight: '600', fontSize: '16px', fontStyle: 'normal', color: '#3365A7'}}>
                  Get Quote
                </Typography>
              </Link>
            </Button>
          </div>
        </div>
        <SchedulesSection onSelectSchedule={this.handleSelectSchedule}/>
        <QuoteRequestSection/>
        <ContactsSection/>
        <AboutUsSection/>
        <ScrollToTop showUnder={200} style={{color: '#3365A7'}}>
          <span>
            <ArrowUpward color='primary' style={{transform: 'scale(1.8)'}}/>
          </span>
        </ScrollToTop>
      </div>
    );
  }
}
