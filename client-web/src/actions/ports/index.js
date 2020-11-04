import actions from '../../constants/action_types';

export * from './api.js';

export const storeDeparturePortId = (departurePortId) => ({
  type: actions.Ports.STORE_DEPARTURE_PORT_ID,
  payload: departurePortId
});

export const storeDestinationPortId = (destinationPortId) => ({
  type: actions.Ports.STORE_DESTINATION_PORT_ID,
  payload: destinationPortId
});


export const storeSelectedMonth = (selectedMonth) => ({
  type: actions.Ports.STORE_SELECTED_MONTH,
  payload: selectedMonth
});

