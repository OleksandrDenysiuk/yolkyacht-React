import client from '../client';
import * as urls from './urls';
import actions from '../../constants/action_types';


export const getPorts = () => () => {
  return client.get(urls.getPorts(), actions.Ports.GET_PORTS);
};

export const getSchedules = (shipData) => () => {
  return client.post(urls.getSchedules(), actions.Ports.GET_SCHEDULES, shipData);
};

