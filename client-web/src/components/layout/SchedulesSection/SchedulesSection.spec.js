import React from 'react';
import { SchedulesSection } from './SchedulesSection.js';
import PortSelector from './PortSelector';
import { configure, mount } from 'enzyme/build';
import Adapter from 'enzyme-adapter-react-16';
import RouteBoxesList from './RouteBoxesList';


configure({ adapter: new Adapter() });

const lauderdalePort = {
  _id: '41224d776a326fb40f001101',
  portName: 'Fort Lauderdale, Florida',
  destinationName: 'East Coast North America'
};
const palmaPort = {
  _id: '41224d776a326fb40f001102',
  portName: 'Palma de Mallorca, Spain',
  destinationName: 'Mediterranean'
};
const genoaPort = {
  _id: '41224d776a326fb40f001103',
  portName: 'Genoa, Italy',
  destinationName: 'Mediterranean'
};

const setup = (propOverrides) => {
  const portsState = {
    portsList: [lauderdalePort, palmaPort, genoaPort],
    schedules: [],
    departurePortId: `${lauderdalePort._id}`,
    destinationPortId: `${palmaPort._id}`,
    month: '0',
    errors: {
      departurePortId: '',
      destinationPortId: ''
    },
    errorMessage: ''
  };
  const props = Object.assign({
    ports: portsState,
    dispatch: jest.fn(),
    getPorts: jest.fn(),
    getSchedules: jest.fn(),
    storeDeparturePortId: jest.fn(),
    storeDestinationPortId: jest.fn(),
    onSelectSchedule: jest.fn(),
  }, propOverrides);

  const wrapper = mount(
    <SchedulesSection {...props}/>
  );

  return {
    wrapper,
    props
  };
};

describe('SchedulesSection', () => {

  it('should render element with defined structure', () => {
    const { wrapper } = setup();

    expect(wrapper).toBeDefined();
    expect(wrapper.text()).toContain('Select departure and destination');
    expect(wrapper.text()).toContain('From');
    expect(wrapper.text()).toContain('To');
    expect(wrapper.text()).toContain('Month');
    expect(wrapper.text()).toContain('January');
    expect(wrapper.text()).toContain('Year');
    expect(wrapper.text()).toContain('2020');

    const selects = wrapper.find(PortSelector);
    expect(selects).toHaveLength(2);
    expect(selects.at(0).text()).toContain(lauderdalePort .portName);
    expect(selects.at(1).text()).toContain(palmaPort.portName);
  });

  it('should call getPorts() at start', async () => {
    const { wrapper, props } = setup();

    wrapper.update();
    expect(wrapper).toBeDefined();
    expect(props.getPorts).toHaveBeenCalled();
  });

  it('should show received schedule', () => {
    const { wrapper } = setup();

    expect(wrapper).toBeDefined();
    const routeBoxesLists = wrapper.find(RouteBoxesList);
    expect(routeBoxesLists).toHaveLength(1);
  });

  it('should show errors if any', () => {
    const testPorts = {
      portsList: [genoaPort, lauderdalePort],
      schedules: [],
      departurePortId: `${genoaPort._id}`,
      destinationPortId: `${lauderdalePort._id}`,
      month: '0',
      errors: {
        departurePortId: 'Departure port is required',
        destinationPortId: 'Destination port is required'
      },
      errorMessage: ''
    }
    const { wrapper } = setup({ports: testPorts});

    expect(wrapper).toBeDefined();

    expect(wrapper.text()).toContain('Departure port is required')
    expect(wrapper.text()).toContain('Destination port is required')
  });

});
