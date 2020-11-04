import { apiAction, makeActions } from './utils';

const dict = {
  Auth: [
    'SET_AUTH',
    'SET_USER_CREDENTIALS',
    'RESET_USER_CREDENTIALS'
  ],
  Ports: [
    'STORE_DEPARTURE_PORT_ID',
    'STORE_DESTINATION_PORT_ID',
    ...apiAction('GET_PORTS'),
    ...apiAction('GET_SCHEDULES'),
  ]
};

export default makeActions(dict);
