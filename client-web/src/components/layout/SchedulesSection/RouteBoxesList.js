import React  from 'react'
import { Container, Grid, Typography } from '@material-ui/core'
import RouteWithImageBox from './RouteWithImageBox';
import PropTypes from 'prop-types'


export default function RouteBoxesList(props) {

  const routesList = props.routesList;

  return(
    <Grid container style={{margin: 0, padding: 15}}>
      { routesList && routesList.length > 0 ?
        routesList.map( (route, index) =>
          <Grid container justify='center' key={`shipKeyIndex${index}`} >
            <Grid item xs={12} sm={12} md={10} lg={8} style={{marginTop: 15, marginBottom: 15}}>
              <RouteWithImageBox route={route} index={index}
                                 onUserGetRouteSelect={props.onUserGetRouteSelect}
              />
            </Grid>
          </Grid>
        )
        :
        <Container >
          <Typography component="h4" variant="h6" align="center">
            No matching schedule(s).
          </Typography>
        </Container>
      }
    </Grid>
  );

}

RouteBoxesList.propTypes = {
  onUserGetRouteSelect: PropTypes.func.isRequired
};