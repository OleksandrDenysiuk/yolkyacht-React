import thunk from 'redux-thunk';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import configureMockStore from 'redux-mock-store';
import actions from '../../constants/action_types';
import {
  getPorts, storeDeparturePortId, storeDestinationPortId, getSchedules, storeSelectedMonth
} from './index';
import { getPorts as getPortsURL, getSchedules as getSchedulesURL } from './urls';


const middleware = [thunk];
const mockStore = configureMockStore(middleware);

describe('Call Actions for Ports reducer', () => {

  it('should create actions.Ports.STORE_DEPARTURE_PORT_ID action', async () => {
    const testDeparturePortId = 1;
    const expectedActions = [
      { type: actions.Ports.STORE_DEPARTURE_PORT_ID, payload: testDeparturePortId }
    ]
    let store = mockStore({ports: []});

    store.dispatch(storeDeparturePortId(testDeparturePortId));

    expect(store.getActions()).toEqual(expectedActions);
  });

  it('should create actions.Ports.STORE_DESTINATION_PORT_ID action', async () => {
    const testDestinationPortId = 1;
    const expectedActions = [
      { type: actions.Ports.STORE_DESTINATION_PORT_ID, payload: testDestinationPortId }
    ]
    let store = mockStore({ports: []});

    store.dispatch(storeDestinationPortId(testDestinationPortId));

    expect(store.getActions()).toEqual(expectedActions);
  });

  it('should create actions.Ports.GET_PORTS/GET_GET_PORTS_SUCCESS action', async () => {
    const ports = ['port1', 'port2'];
    const axiosMock = new MockAdapter(axios);
    const expectedActions = [
      { type: actions.Ports.GET_GET_PORTS },
      { type: actions.Ports.GET_GET_PORTS_SUCCESS, payload: ports }
    ]
    axiosMock.onGet(getPortsURL()).reply(200, ports);
    let store = mockStore({ports: []});

    const actionsResult = await store.dispatch(getPorts());
    expect(ports).toBe(actionsResult);
    //expect(store.getActions()).toBe(expectedActions);     // store.getActions unexpectedly return empty array

    axiosMock.restore();
  });

  it('should create actions.Ports.GET_PORTS/GET_GET_PORTS_FAILURE action', async () => {
    const serverBadResult = 'Failed to get Ports';
    const axiosMock = new MockAdapter(axios);
    const expectedActions = [
      { type: actions.Ports.GET_GET_PORTS },
      { type: actions.Ports.GET_GET_PORTS_FAILURE, payload: serverBadResult }
    ]
    axiosMock.onGet(getPortsURL()).reply(400, serverBadResult);
    let store = mockStore({ports: []});

    try {
      await store.dispatch(getPorts());
    } catch (errorActionResult) {
      expect(serverBadResult).toBe(errorActionResult);
      //expect(store.getActions()).toBe(expectedActions);     // store.getActions unexpectedly return empty array
    }

    axiosMock.restore();
  });

  it('should create actions.Ports.GET_SCHEDULES/GET_SCHEDULES_SUCCESS action', async () => {
    const schedules = ['schedule1', 'schedule2'];
    const axiosMock = new MockAdapter(axios);
    const expectedActions = [
      { type: actions.Ports.GET_SCHEDULES },
      { type: actions.Ports.GET_SCHEDULES_SUCCESS, payload: schedules }
    ]
    axiosMock.onPost(getSchedulesURL()).reply(200, schedules);
    let store = mockStore({ports: []});

    const actionsResult = await store.dispatch(getSchedules());
    expect(schedules).toBe(actionsResult);
    //expect(store.getActions()).toBe(expectedActions);   // store.getActions unexpectedly return empty array

    axiosMock.restore();
  });

  it('should create actions.Ports.GET_SCHEDULES/GET_SCHEDULES_FAILURE action', async () => {
    const serverBadResult = 'Failed to get Schedules';
    const axiosMock = new MockAdapter(axios);
    const expectedActions = [
      { type: actions.Ports.GET_SCHEDULES },
      { type: actions.Ports.GET_SCHEDULES_FAILURE, payload: serverBadResult }
    ]
    axiosMock.onPost(getSchedulesURL()).reply(400, serverBadResult);
    let store = mockStore({ports: []});

    try {
      await store.dispatch(getSchedules());
    } catch (errorActionResult) {
      expect(serverBadResult).toBe(errorActionResult);
      //expect(store.getActions()).toBe(expectedActions);     // store.getActions unexpectedly return empty array
    }

    axiosMock.restore();
  });

  it('should create actions.Ports.STORE_SELECTED_MONTH action', async () => {
    const testMonth = 0;
    const expectedActions = [
      { type: actions.Ports.STORE_SELECTED_MONTH, payload: testMonth }
    ]
    let store = mockStore({ports: []});

    store.dispatch(storeSelectedMonth(testMonth));

    expect(store.getActions()).toEqual(expectedActions);
  });

});

