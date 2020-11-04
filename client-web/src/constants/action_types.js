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
    'STORE_SELECTED_MONTH',
    ...apiAction('GET_PORTS'),
    ...apiAction('GET_SCHEDULES'),
  ],
  QuoteRequest: [
    'SET_USER_SELECT_SCHEDULE',
    'SET_FIRST_NAME',
    'SET_FIRST_NAME_ERROR',
    'SET_LAST_NAME',
    'SET_LAST_NAME_ERROR',
    'SET_PHONE_NUMBER',
    'SET_PHONE_NUMBER_ERROR',
    'SET_EMAIL',
    'SET_EMAIL_ERROR',
    'SET_BEST_TIME_TO_CONTACT',
    'SET_YACHT_MODEL',
    'SET_YEAR',
    'SET_LENGTH',
    'SET_LENGTH_UNIT',
    'SET_BEAM',
    'SET_BEAM_UNIT',
    'SET_WEIGHT',
    'SET_WEIGHT_UNIT',
    'SET_PURPOSE',
    'SET_FROM_WHERE',
    'SET_TO_WHERE',
    'SET_WHEN',
    'RESET_QUOTE_REQUEST_FORM',
    'RESET_QUOTE_REQUEST_ERRORS',
    ...apiAction('POST_QUOTE_REQUEST'),
  ]
};

export default makeActions(dict);
