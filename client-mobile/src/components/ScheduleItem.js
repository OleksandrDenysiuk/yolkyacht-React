import React from 'react';
import PropTypes from 'prop-types';
import { Text} from 'react-native-elements';
import { withTheme } from 'react-native-elements';


function ScheduleItem(props) {

  return (
    <Text h5>
      {`From ${props.ship.departurePort[0].shortName} on ${new Date(props.ship.departureOn).toLocaleDateString("en-US")} to ${props.ship.destinationPort[0].shortName} on ${new Date(props.ship.arrivalOn).toLocaleDateString("en-US")}`}
    </Text>
  );

}

ScheduleItem.propTypes = {
  ship: PropTypes.object.isRequired,
};

export default withTheme(ScheduleItem);

