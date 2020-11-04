import actions from '../../constants/action_types';
import client from '../client';
import { getPorts, getSchedules } from './api';
import { getPorts as getPortsUrl, getSchedules as getSchedulesUrl } from './urls';


describe('Ports reducer API call actions', () => {

  client.get = jest.fn();
  client.post = jest.fn();

  it('should call client with Ports.GET_PORTS action', () => {
    getPorts()();

    expect(client.get.mock.calls.length).toBe(1);
    expect(client.get.mock.calls[0][0]).toBe(getPortsUrl());
    expect(client.get.mock.calls[0][1]).toBe(actions.Ports.GET_PORTS);
  });

  it('should call client with Ports.GET_SCHEDULES action', () => {
    const testShipData = {
      departurePortId: 1,
      destinationPortId: 2
    }
    getSchedules(testShipData)();

    expect(client.post.mock.calls.length).toBe(1);
    expect(client.post.mock.calls[0][0]).toBe(getSchedulesUrl());
    expect(client.post.mock.calls[0][1]).toBe(actions.Ports.GET_SCHEDULES);
    expect(client.post.mock.calls[0][2]).toBe(testShipData);
  });

});

