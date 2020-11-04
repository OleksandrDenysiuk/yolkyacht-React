import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { View, ScrollView } from 'react-native';
import { Header, Text, withTheme } from 'react-native-elements';
import UserProfileMenu from '../components/user/UserProfileMenu';
import { getPorts, getSchedules, storeDeparturePortId, storeDestinationPortId } from '../actions/ports';
import PortSelector from '../components/PortSelector';
import PrimaryColorDivider from '../components/PrimaryColorDivider';
import SchedulesList from '../components/SchedulesList';


class Landing extends Component {
  constructor(props) {
    super(props);

    this.handleDeparturePortSelected = this.handleDeparturePortSelected.bind(this);
    this.handleDestinationPortSelected = this.handleDestinationPortSelected.bind(this);
  }

  componentDidMount () {
    this.handleLoadPorts();
  }

  componentDidUpdate(prevProps) {
    if( this.props.ports.departurePortId && this.props.ports.destinationPortId ) {
      if( this.props.ports.departurePortId !== prevProps.ports.departurePortId ||
        this.props.ports.destinationPortId !== prevProps.ports.destinationPortId ) {
        const shipData = {
          departurePortId: this.props.ports.departurePortId,
          destinationPortId: this.props.ports.destinationPortId
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


  render() {
    const { departurePortId, destinationPortId, portsList, errors, schedules } = this.props.ports;

    return (
      <View>
        <Header
          leftComponent={{ icon: 'menu', color: '#fff' }}
          centerComponent={{ text: 'Allied Yacht', style: { color: '#fff', fontSize: 24 } }}
          rightComponent={<UserProfileMenu/>}
        />
        <ScrollView contentContainerStyle={{alignItems: 'center'}}>
          <PortSelector
            selectedPort={departurePortId}
            ports={portsList}
            errors={errors.departurePortId}
            label='Select departure port'
            onSelect={this.handleDeparturePortSelected}
          />
          <PrimaryColorDivider width={70} />
          <PortSelector
            selectedPort={destinationPortId}
            ports={portsList}
            errors={errors.destinationPortId}
            label='Select destination port'
            onSelect={this.handleDestinationPortSelected}
          />
          <PrimaryColorDivider width={90} />
          <Text h4 style={{color: this.props.theme.colors.primary, marginTop: 20, marginBottom: 10}}>Schedules</Text>
          <SchedulesList schedules={schedules}/>
        </ScrollView>
      </View>
    );
  }
}

Landing.propTypes = {
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
  theme: PropTypes.object.isRequired
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
  }
});

export default connect(mapStateToProps, mapActionsToProps)(withTheme(Landing));
