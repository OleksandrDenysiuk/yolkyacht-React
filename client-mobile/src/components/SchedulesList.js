import React from 'react';
import PropTypes from 'prop-types';
import { View, SafeAreaView } from 'react-native'
import { withTheme, Text } from 'react-native-elements';
import ScheduleItem from './ScheduleItem'
import PrimaryColorDivider from './PrimaryColorDivider'


function SchedulesList(props) {
  console.log("props.schedules: ",props.schedules)

  return (
    <SafeAreaView style={{flex: 1, marginHorizontal: 15}}>
      { props.schedules && props.schedules.length > 0 ?
        props.schedules.map( (schedule, index1) =>
          <View key={`scheduleKey${index1}`}>
            {schedule.map( (ship, index2) =>
              <ScheduleItem ship={ship} key={`shipKey${index1}_${index2}`}/>
            )}
            <PrimaryColorDivider width={100} />
          </View>
        )
        :
        <Text h5 style={{color: props.theme.colors.primary, marginTop: 20}} >
          No matching schedule(s).
        </Text>
      }
    </SafeAreaView>
  );

}

SchedulesList.propTypes = {
  schedules: PropTypes.array.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withTheme(SchedulesList);

