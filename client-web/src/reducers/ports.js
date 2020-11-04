import actions from '../constants/action_types';
import { isObject } from '../utils/helpers';


export const emptyPortsErrors = {
  departurePortId: '',
  destinationPortId: ''
};

export const defaultPortsState = {
  isLoadingPorts: false,
  isLoadingSchedule: false,
  portsList: [],
  departurePortId: '',
  destinationPortId: '',
  month: '',
  errors: emptyPortsErrors,
  schedules: [],
  errorMessage: ''
};

export const defaultState = defaultPortsState;

const reducer = (state = defaultState, action) => {

  switch (action.type) {

    case actions.Ports.GET_PORTS: {
      const newState = {
        ...state,
        isLoadingPorts: true
      };
      return newState;
    }

    case actions.Ports.GET_PORTS_SUCCESS: {
      const newState = {
        ...state,
        portsList: action.payload,
        isLoadingPorts: false
      };
      return newState;
    }

    case actions.Ports.GET_PORTS_FAILURE: {
      const newState = {
        ...state,
        isLoadingPorts: false,
        errorMessage: action.payload
      };
      return newState;
    }

    case actions.Ports.GET_SCHEDULES: {
      const newState = {
        ...state,
        schedules: [],
        isLoadingSchedule: true
      };
      return newState;
    }

    case actions.Ports.GET_SCHEDULES_SUCCESS: {
      const newState = {
        ...state,
        schedules: action.payload,
        errors: emptyPortsErrors,
        isLoadingSchedule: false,
        errorMessage: ''
      };
      return newState;
    }

    case actions.Ports.GET_SCHEDULES_FAILURE: {
      if( isObject(action.payload) ) {
        const newState = {
          ...state,
          errors: action.payload,
          isLoadingSchedule: false,
          errorMessage: ''
        };
        return newState;
      } else {
        const newState = {
          ...state,
          errors: emptyPortsErrors,
          isLoadingSchedule: false,
          errorMessage: action.payload
        };
        return newState;
      }
    }

    case actions.Ports.STORE_DEPARTURE_PORT_ID: {
      const newState = {
        ...state,
        departurePortId: action.payload,
      };
      return newState;
    }

    case actions.Ports.STORE_SELECTED_MONTH: {
      const newState = {
        ...state,
        month: action.payload,
      };
      return newState;
    }

    case actions.Ports.STORE_DESTINATION_PORT_ID: {
      const newState = {
        ...state,
        destinationPortId: action.payload,
      };
      return newState;
    }

    default: return state;
  }

};

export default reducer;
