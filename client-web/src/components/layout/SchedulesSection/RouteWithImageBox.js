import React from "react";
import { Button, Box, Grid, Typography } from '@material-ui/core';
import CalendarTodaySharpIcon from '@material-ui/icons/CalendarTodaySharp';
import PropTypes from 'prop-types';


export default function RouteWithImageBox(props) {

  const route = props.route;

  const handleUserGetRouteSelect = (departurePort, destinationPort, when) => {
    const data = {
      fromWhere: departurePort,
      toWhere: destinationPort,
      when: when
    };
    props.onUserGetRouteSelect(data);
  }

  const calculateMilesForRoute = (routes) => {
    return routes.reduce(function(acc, item) { return acc + item.miles; }, 0)
  }

  const calculateDaysAtSea = (routes) => {
    return routes.reduce(function(acc, item) { return acc + item.daysAtSea; }, 0)
  }

  const calculateDaysAtPorts = (routes) => {
    return routes.reduce(function(acc, item) { return acc + item.daysInPort; }, 0) - routes[0].daysInPort;
  }

  const calculateDaysInTransit = (routes) => {
    return calculateDaysAtSea(routes) + calculateDaysAtPorts(routes);
  }

  return(
    <Grid item style={{backgroundColor: 'white', minHeight: '194px', display: 'flex', width: '100%'}}>
      <Box display={{ xs: 'none', sm: 'block', md: 'block', lg: 'block' }} style={{float: 'left'}}>
        <img src={`/images/${route[route.length - 1].fileName}`} alt={"logo"}
             style={{height: '100%', width: '100%', objectFit: 'cover'}}
        />
      </Box>
      <div style={{float: 'left', minHeight: '194px', height: '100%', width: '100%', padding: 15}}>
        <Grid container style={{display: 'flex', justifyContent: 'space-between'}}>
          <Typography style={{ float: 'left', fontFamily: 'Montserrat', fontStyle: 'normal', fontWeight: '600', color: '#3365A7', fontSize: '20px', lineHeight: '24px', paddingTop: 3}}>
            {route[route.length - 1].sailingName}
          </Typography>
          <div style={{color: '#3365A7'}}>
              <CalendarTodaySharpIcon fontSize='small' style={{position: 'relative', top: '5'}}/>
            &nbsp;
            <span style={{display: 'inline-block'}}>
              <Typography style={{fontSize: '14px', fontWeight: '600'}}>
                {new Date(route[0].departureOn).toLocaleDateString("en-US")}&nbsp;-&nbsp;{new Date(route[route.length - 1].arrivalOn).toLocaleDateString("en-US")}
              </Typography>
            </span>
          </div>
        </Grid>
        <Grid container style={{marginTop: 20, marginBottom: 20}}>
          <table>
            <tbody>
              <tr>
                <th style={{verticalAlign: 'top'}}>
                  <Typography style={{paddingTop: 3, float: 'right', textTransform: 'uppercase', fontFamily: 'Montserrat', fontSize: '12px', fontStyle: 'regular', fontWeight: 'normal', color: '#3E3E3E', lineHeight: '15px'}}>
                    Destination&nbsp;&nbsp;&nbsp;
                  </Typography>
                </th>
                <th style={{verticalAlign: 'top', textAlign: 'left'}}>
                  <Typography style={{float: 'left', fontFamily: 'Montserrat', fontSize: '16px', fontStyle: 'regular', fontWeight: '600', color: '#3365A7', lineHeight: '20px'}}>
                    {route[route.length - 1].destinationPort[0].portName}
                  </Typography>
                </th>
              </tr>
              <tr>
                <th style={{verticalAlign: 'top'}}>
                  <Typography style={{paddingTop: 3, float: 'right', textTransform: 'uppercase', fontFamily: 'Montserrat', fontSize: '12px', fontStyle: 'regular', fontWeight: 'normal', color: '#3E3E3E', lineHeight: '15px'}}>
                    Ports&nbsp;&nbsp;&nbsp;
                  </Typography>
                </th>
                <th style={{verticalAlign: 'top', textAlign: 'left'}}>
                  <Typography style={{fontFamily: 'Montserrat', fontSize: '16px', fontStyle: 'normal', fontWeight: '600', color: '#333333', lineHeight: '20px'}}>
                    {`${route[0].departurePort[0].portName};  `}
                    {route.map( (ship, index) =>
                      `${ship.destinationPort[0].portName};  `
                    )}
                  </Typography>
                </th>
              </tr>
            </tbody>
          </table>
        </Grid>
        <Grid container>
          <div style={{whiteSpace: 'nowrap', display: 'table'}}>
            <Typography style={{display: 'table-cell', fontFamily: 'Montserrat', textTransform: 'uppercase', fontSize: '12px', fontStyle: 'normal', fontWeight: '500', color: '#3365A7', lineHeight: '15px'}}>
              Miles &nbsp;&nbsp;
            </Typography>
            <Typography style={{display: 'table-cell', fontFamily: 'Montserrat', textTransform: 'uppercase', fontSize: '12px', fontStyle: 'normal', fontWeight: '600', color: '#3365A7', lineHeight: '15px'}}>
              {calculateMilesForRoute(route)}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </Typography>
          </div>
          <div style={{whiteSpace: 'nowrap', display: 'table'}}>
            <Typography style={{display: 'table-cell', fontFamily: 'Montserrat', textTransform: 'uppercase', fontSize: '12px', fontStyle: 'normal', fontWeight: '500', color: '#3365A7', lineHeight: '15px'}}>
              Days In Transit &nbsp;&nbsp;
            </Typography>
            <Typography style={{display: 'table-cell', fontFamily: 'Montserrat', textTransform: 'uppercase', fontSize: '12px', fontStyle: 'normal', fontWeight: '600', color: '#3365A7', lineHeight: '15px'}}>
              {calculateDaysInTransit(route)}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </Typography>
          </div>
        </Grid>
      </div>
      <div style={{float: 'right'}}>
        <Button style={{width: 57, height: '100%', borderRadius: 0, color: 'white', background: 'linear-gradient(139.62deg, #0075FF 1.46%, #3365A7 75.98%)'}}
                onClick={() => handleUserGetRouteSelect(route[0].departurePort[0].portName, route[route.length - 1].destinationPort[0].portName, new Date(route[route.length - 1].arrivalOn).toLocaleDateString('us-Us'))}
        >
          <Typography style={{ textAlign: 'left', textTransform: 'uppercase', fontFamily: 'Montserrat', fontWeight: '600', letterSpacing: '0.115em', transform: 'rotate(-90deg)', fontSize: '16px', lineHeight: '20px', fontStyle: 'normal'}}>
            Get&nbsp;a&nbsp;Quote
          </Typography>
        </Button>
      </div>
    </Grid>
  );

}

RouteWithImageBox.propTypes = {
  route: PropTypes.array.isRequired,
  onUserGetRouteSelect: PropTypes.func.isRequired
};
