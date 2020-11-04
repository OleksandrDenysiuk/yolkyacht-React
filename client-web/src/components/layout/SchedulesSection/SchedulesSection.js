import React, { Component } from "react";
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import PortSelector from './PortSelector';
import YearSelector from './YearSelector';
import MonthSelector from './MonthSelector';
import { Grid, Container, Typography } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import RouteBoxesList from './RouteBoxesList';
import {
  getPorts, storeDeparturePortId, storeDestinationPortId, getSchedules, storeSelectedMonth
} from '../../../actions/ports';
import { setUserSelectSchedule } from '../../../actions/quoteRequest';


export class SchedulesSection extends Component {

  constructor(props) {
    super(props);

    this.handleDeparturePortSelected = this.handleDeparturePortSelected.bind(this);
    this.handleDestinationPortSelected = this.handleDestinationPortSelected.bind(this);
    this.handleStoreUserSelection = this.handleStoreUserSelection.bind(this);
    this.handleMonthSelected = this.handleMonthSelected.bind(this);
  }

  componentDidMount () {
    this.handleLoadPorts();
  }

  componentDidUpdate(prevProps) {
    if( this.props.ports.departurePortId && this.props.ports.destinationPortId ) {
      if( this.props.ports.departurePortId !== prevProps.ports.departurePortId ||
        this.props.ports.destinationPortId !== prevProps.ports.destinationPortId ||
        this.props.ports.month !== prevProps.ports.month ) {
        const shipData = {
          departurePortId: this.props.ports.departurePortId,
          destinationPortId: this.props.ports.destinationPortId,
          month: this.props.ports.month
        }
        this.props.getSchedules(shipData);
      }
    }
  }

  handleLoadPorts() {
    this.props.getPorts();
  }

  handleDeparturePortSelected(selectedPortId) {
    this.props.storeDeparturePortId(selectedPortId);
  }

  handleDestinationPortSelected(selectedPortId) {
    this.props.storeDestinationPortId(selectedPortId);
  }

  handleMonthSelected(selectedMonth) {
    this.props.storeSelectedMonth(selectedMonth);
  }

  handleStoreUserSelection(data) {
    this.props.setUserSelectSchedule(data);
    this.props.onSelectSchedule();
  }

  render() {
    const { departurePortId, destinationPortId, month, portsList, errors, schedules } = this.props.ports;

    return (
      <main id='schedulesSection' style={{minHeight: `${100}vh`, backgroundColor: '#F7F8F9'}}>
        <Container style={{paddingTop: 30, color: '#3365A7', textTransform: 'uppercase'}}>
          <Typography component="h4" variant="h4" align="center" >
            Schedule
          </Typography>
        </Container>
        <Container maxWidth="sm" style={{paddingTop: 30}}>
          <Typography component="h6" variant="h6" align="center">
            Select departure and destination
          </Typography>
        </Container>
        <Grid container style={{margin: 0, padding: 15}}>
          <Grid item xs={12} sm={6} md={6} lg={3}>
            <Box textAlign="center">
              <PortSelector
                selectedPort={departurePortId}
                ports={portsList}
                errors={errors.departurePortId}
                label='From'
                onSelect={this.handleDeparturePortSelected}
              />
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={3} >
            <Box textAlign="center">
              <PortSelector
                selectedPort={destinationPortId}
                ports={portsList}
                errors={errors.destinationPortId}
                label='To'
                onSelect={this.handleDestinationPortSelected}
              />
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={3} >
            <Box textAlign="center">
              <MonthSelector month={month} onSelect={this.handleMonthSelected}/>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={3} >
            <Box textAlign="center">
              <YearSelector />
            </Box>
          </Grid>
          <RouteBoxesList routesList={schedules} onUserGetRouteSelect={this.handleStoreUserSelection}/>
        </Grid>
      </main>
    );
  }
}

SchedulesSection.propTypes = {
  ports: PropTypes.shape({
    portsList: PropTypes.array.isRequired,
    schedules: PropTypes.array.isRequired,
    departurePortId: PropTypes.string.isRequired,
    destinationPortId: PropTypes.string.isRequired,
    errors: PropTypes.shape({
      departurePortId: PropTypes.string,
      destinationPortId: PropTypes.string
    }),
    errorMessage: PropTypes.string.isRequired
  }),
  getPorts: PropTypes.func.isRequired,
  getSchedules: PropTypes.func.isRequired,
  storeDeparturePortId: PropTypes.func.isRequired,
  storeDestinationPortId: PropTypes.func.isRequired,
  onSelectSchedule: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  ports: state.ports
});

const mapActionsToProps = dispatch => ({
  dispatch,
  getPorts: () => {
    dispatch(getPorts());
  },
  getSchedules: (shipData) => {
    dispatch(getSchedules(shipData)).then(() => {}, () => {});
  },
  storeDeparturePortId: (departurePortId) => {
    dispatch(storeDeparturePortId(departurePortId));
  },
  storeDestinationPortId: (destinationPortId) => {
    dispatch(storeDestinationPortId(destinationPortId));
  },
  storeSelectedMonth: (selectedMonth) => {
    dispatch(storeSelectedMonth(selectedMonth));
  },
  setUserSelectSchedule: (data) => {
    dispatch(setUserSelectSchedule(data));
  }
});

export default connect(mapStateToProps, mapActionsToProps)(SchedulesSection);
