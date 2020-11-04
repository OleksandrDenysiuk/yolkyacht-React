import actions from '../../constants/action_types';
import { storeDeparturePortId, storeDestinationPortId, storeSelectedMonth } from './index';

describe('Ports reducer actions', () => {

  it('should create Ports.STORE_DEPARTURE_PORT_ID action', () => {
    const departurePortId = 1;
    const expectedAction = {
      type: actions.Ports.STORE_DEPARTURE_PORT_ID,
      payload: departurePortId
    };

    expect(storeDeparturePortId(departurePortId)).toEqual(expectedAction);
  });

  it('should create Ports.STORE_DESTINATION_PORT_ID action', () => {
    const destinationPortId = 1;
    const expectedAction = {
      type: actions.Ports.STORE_DESTINATION_PORT_ID,
      payload: destinationPortId
    };

    expect(storeDestinationPortId(destinationPortId)).toEqual(expectedAction);
  });

  it('should create Ports.STORE_SELECTED_MONTH action', () => {
    const selectedMonth = 1;
    const expectedAction = {
      type: actions.Ports.STORE_SELECTED_MONTH,
      payload: selectedMonth
    };

    expect(storeSelectedMonth(selectedMonth)).toEqual(expectedAction);
  });

});

