import actions from '../constants/action_types';
import reducer, { defaultState, emptyPortsErrors }  from './ports';
import { isObject } from '../utils/helpers';
import 'raf/polyfill';


describe('Ports reducer', () => {

  it('Ports.GET_PORTS action', () => {
    const action = {
      type: actions.Ports.GET_PORTS,
    };

    const expectedState = {
      ...defaultState,
      isLoadingPorts: true
    };

    expect(reducer(defaultState, action)).toEqual(expectedState);
  });

  it('Ports.GET_PORTS_SUCCESS action', () => {
    const action = {
      type: actions.Ports.GET_PORTS_SUCCESS,
      payload: [
        {_id: 'testid1', name: 'test 1 name'},
        {_id: 'testid2', name: 'test 2 name'}
      ]
    };

    const expectedState = {
      ...defaultState,
      portsList: action.payload,
      isLoadingPorts: false
    };

    expect(reducer(defaultState, action)).toEqual(expectedState);
  });

  it('Ports.GET_PORTS_FAILURE action', () => {
    const action = {
      type: actions.Ports.GET_PORTS_FAILURE,
      payload: "test 1 error message"
    };

    const expectedState = {
      ...defaultState,
      isLoadingPorts: false,
      errorMessage: action.payload
    };

    expect(reducer(defaultState, action)).toEqual(expectedState);
  });

  it('Ports.GET_SCHEDULES action', () => {
    const action = {
      type: actions.Ports.GET_SCHEDULES
    };

    const expectedState = {
      ...defaultState,
      schedules: [],
      isLoadingSchedule: true
    };

    expect(reducer(defaultState, action)).toEqual(expectedState);
  });

  it('Ports.GET_SCHEDULES_SUCCESS action', () => {
    const action = {
      type: actions.Ports.GET_SCHEDULES_SUCCESS,
      payload: [
        [{departurePortId: 1, destinationPortId: 2}, {departurePortId: 2, destinationPortId: 3}, {departurePortId: 3, destinationPortId: 4}],
        [{departurePortId: 1, destinationPortId: 4}]
      ]
    };

    const expectedState = {
      ...defaultState,
      schedules: action.payload,
      errors: emptyPortsErrors,
      isLoadingSchedule: false,
      errorMessage: ''
    };

    expect(reducer(defaultState, action)).toEqual(expectedState);
  });

  it('Ports.GET_SCHEDULES_FAILURE action when got validation errors', () => {
    const action = {
      type: actions.Ports.GET_SCHEDULES_FAILURE,
      payload: {
        departurePortId: 'This field is required',
        destinationPortId: 'This field is required'
      }
    };

    if( isObject(action.payload) ) {
      const expectedState = {
        ...defaultState,
        errors: action.payload,
        isLoadingSchedule: false,
        errorMessage: ''
      };
      expect(reducer(defaultState, action)).toEqual(expectedState);
    } else {
      const expectedState = {
        ...defaultState,
        errors: emptyPortsErrors,
        isLoadingSchedule: false,
        errorMessage: action.payload
      };
      expect(reducer(defaultState, action)).toEqual(expectedState);
    }
  });

  it('Ports.GET_SCHEDULES_FAILURE action when got common error', () => {
    const action = {
      type: actions.Ports.GET_SCHEDULES_FAILURE,
      payload: 'server error message'
    };

    if( isObject(action.payload) ) {
      const expectedState = {
        ...defaultState,
        errors: action.payload,
        isLoadingSchedule: false,
        errorMessage: ''
      };
      expect(reducer(defaultState, action)).toEqual(expectedState);
    } else {
      const expectedState = {
        ...defaultState,
        errors: emptyPortsErrors,
        isLoadingSchedule: false,
        errorMessage: action.payload
      };
      expect(reducer(defaultState, action)).toEqual(expectedState);
    }
  });

  it('Ports.STORE_DEPARTURE_PORT_ID action', () => {
    const action = {
      type: actions.Ports.STORE_DEPARTURE_PORT_ID,
      payload: 1
    };

    const expectedState = {
      ...defaultState,
      departurePortId: action.payload,
    };

    expect(reducer(defaultState, action)).toEqual(expectedState);
  });

  it('Ports.STORE_DESTINATION_PORT_ID action', () => {
    const action = {
      type: actions.Ports.STORE_DESTINATION_PORT_ID,
      payload: 1
    };

    const expectedState = {
      ...defaultState,
      destinationPortId: action.payload,
    };

    expect(reducer(defaultState, action)).toEqual(expectedState);
  });

  it('Ports.STORE_SELECTED_MONTH action', () => {
    const action = {
      type: actions.Ports.STORE_SELECTED_MONTH,
      payload: 1
    };

    const expectedState = {
      ...defaultState,
      month: action.payload,
    };

    expect(reducer(defaultState, action)).toEqual(expectedState);
  });

});

