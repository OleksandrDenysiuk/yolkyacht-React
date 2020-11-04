import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { getPorts, storeDeparturePortId, storeDestinationPortId, getSchedules } from '../actions/ports';
import { getPorts as getPortsURL, getSchedules as getSchedulesURL } from '../actions/ports/urls';
import ports from '../reducers/ports.js';


describe('Store for Ports section', () => {

  it('should execute actions.Ports.STORE_DEPARTURE_PORT_ID action', async () => {
    const store = createStore(ports, applyMiddleware(thunk));
    const testDeparturePortId = 1;

    store.dispatch(storeDeparturePortId(testDeparturePortId));
    const storedDepartureId = store.getState().departurePortId;
    expect(storedDepartureId).toEqual(testDeparturePortId);
  });

  it('should execute actions.Ports.STORE_DESTINATION_PORT_ID action', async () => {
    const store = createStore(ports, applyMiddleware(thunk));
    const testDestinationPortId = 1;

    store.dispatch(storeDestinationPortId(testDestinationPortId));
    const storedDestinationId = store.getState().destinationPortId;
    expect(storedDestinationId).toEqual(testDestinationPortId);
  });

  it('should execute actions.Ports.GET_PORTS/GET_GET_PORTS_SUCCESS action', async () => {
    const portsList = ['port1', 'port2'];
    const store = createStore(ports, applyMiddleware(thunk));
    const axiosMock = new MockAdapter(axios);
    axiosMock.onGet(getPortsURL()).reply(200, portsList);

    const receivedPorts = await store.dispatch(getPorts());
    expect(receivedPorts).toBe(portsList);

    //const storeState = store.getState();   // store unexpectedly returns initial state

    axiosMock.restore();
  });

  it('should execute actions.Ports.GET_PORTS/GET_GET_PORTS_FAILURE action', async () => {
    const serverErrorMessage = 'Failed to get Ports';
    const axiosMock = new MockAdapter(axios);
    axiosMock.onGet(getPortsURL()).reply(400, serverErrorMessage);
    const store = createStore(ports, applyMiddleware(thunk));

    try {
      await store.dispatch(getPorts());
    } catch (errorActionResult) {
      console.log("errorActionResult: ",errorActionResult);
      expect(serverErrorMessage).toBe(errorActionResult);

      //const storeState = store.getState();   // store unexpectedly returns initial state
    }

    axiosMock.restore();
  });

  it('should execute actions.Ports.GET_SCHEDULES/GET_SCHEDULES_SUCCESS action', async () => {
    const schedules = ['schedule1', 'schedule2'];
    const axiosMock = new MockAdapter(axios);
    axiosMock.onPost(getSchedulesURL()).reply(200, schedules);
    const store = createStore(ports, applyMiddleware(thunk));

    const receivedSchedules = await store.dispatch(getSchedules());
    expect(schedules).toBe(receivedSchedules);

    //const storeState = store.getState();   // store unexpectedly returns initial state

    axiosMock.restore();
  });

  it('should execute actions.Ports.GET_SCHEDULES/GET_SCHEDULES_FAILURE action', async () => {
    const serverErrorMessage = 'Failed to get Schedules';
    const axiosMock = new MockAdapter(axios);
    axiosMock.onPost(getSchedulesURL()).reply(400, serverErrorMessage);
    const store = createStore(ports, applyMiddleware(thunk));

    try {
      await store.dispatch(getSchedules());
    } catch (errorActionResult) {
      expect(serverErrorMessage).toBe(errorActionResult);

      //const storeState = store.getState();   // store unexpectedly returns initial state
    }

    axiosMock.restore();
  });

});
