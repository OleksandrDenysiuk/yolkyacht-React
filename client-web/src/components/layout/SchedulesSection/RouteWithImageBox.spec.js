import React from 'react';
import RouteWithImageBox from './RouteWithImageBox';
import { Button } from '@material-ui/core';
import { configure, mount } from 'enzyme/build'
import Adapter from 'enzyme-adapter-react-16';


configure({ adapter: new Adapter() });

const route = [
  {
    _id: "41224d776a326fb40f002105",
    departureOn: "2020-05-16T00:00:00.000Z",
    arrivalOn: "2020-05-31T00:00:00.000Z",
    sailingName: "Summer Mediterranean Sailing",
    destinationName: "Mediterranean",
    departurePortId: "41224d776a326fb40f001101",
    destinationPortId: "41224d776a326fb40f001102",
    miles: 4262,
    daysAtSea: 15,
    daysInPort: 2,
    fileName: "Mediterranean.jpg",
    departurePort: [{
      _id: "41224d776a326fb40f001101",
      portName: "Fort Lauderdale, Florida",
      destinationName: "East Coast North America"
    }],
    destinationPort: [{
      _id: "41224d776a326fb40f001102",
      portName: "Palma de Mallorca, Spain",
      destinationName: "Mediterranean"
    }]
  },
  {
    _id: "41224d776a326fb40f002106",
    departureOn: "2020-06-02T00:00:00.000Z",
    arrivalOn: "2020-06-03T00:00:00.000Z",
    sailingName: "Summer Mediterranean Sailing",
    destinationName: "Mediterranean",
    departurePortId: "41224d776a326fb40f001102",
    destinationPortId: "41224d776a326fb40f001103",
    miles: 441,
    daysAtSea: 1,
    daysInPort: 4,
    fileName: "Mediterranean.jpg",
    departurePort: [{
      _id: "41224d776a326fb40f001102",
      portName: "Palma de Mallorca, Spain",
      destinationName: "Mediterranean"
    }],
    destinationPort: [{
      _id: "41224d776a326fb40f001103",
      portName: "Genoa, Italy",
      destinationName: "Mediterranean"
    }]
  }
]

const setup = (propOverrides) => {
  const props = Object.assign({
    route: route,
    index: 0,
    onUserGetRouteSelect: jest.fn()
  }, propOverrides);


  const wrapper = mount(
    <RouteWithImageBox
      {...props}
    />
  );

  return {
    props,
    wrapper
  };
};

describe('RouteWithImageBox', () => {

  it('should render component with header', () => {
    const { wrapper } = setup();

    expect(wrapper).toBeDefined();
    expect(wrapper.text()).toContain('Destination');
    expect(wrapper.text()).toContain('Ports');
    expect(wrapper.text()).toContain('Miles');
    expect(wrapper.text()).toContain('Days In Transit');


    const buttons = wrapper.find(Button);
    expect(buttons).toHaveLength(1);
    expect(buttons.at(0).text()).toContain('Get');
    expect(buttons.at(0).text()).toContain('Quote');
  });

  it('should show all routes in accepted route ', () => {
    const { wrapper } = setup();

    expect(wrapper.text()).toContain('Destination');
    expect(wrapper.text()).toContain('Ports');
    expect(wrapper.text()).toContain('Miles');
    expect(wrapper.text()).toContain('Days In Transit');

    expect(wrapper.text()).toContain('Summer Mediterranean Sailing');
    expect(wrapper.text()).toContain('Mediterranean');

    // Start / End dates
    expect(wrapper.text()).toContain(new Date(route[0].departureOn).toLocaleDateString("en-US"));
    expect(wrapper.text()).toContain(new Date(route[route.length - 1].arrivalOn).toLocaleDateString("en-US"));

    // Ports list
    expect(wrapper.text()).toContain(route[0].departurePort[0].portName);
    expect(wrapper.text()).toContain(route[0].destinationPort[0].portName);
    expect(wrapper.text()).toContain(route[1].destinationPort[0].portName);

   // Statistics
    expect(wrapper.text()).toContain('4703');
    expect(wrapper.text()).toContain('20');
  });

  it('should call handler when "Get route" clicked', () => {
    const { wrapper, props } = setup();

    expect(wrapper).toBeDefined();
    expect(wrapper.text()).toContain('Destination');

    const buttons = wrapper.find(Button);
    expect(buttons).toHaveLength(1);
    expect(buttons.at(0).text()).toContain('Get');
    expect(buttons.at(0).text()).toContain('Quote');

    expect(props.onUserGetRouteSelect).toHaveBeenCalledTimes(0);

    wrapper.find('button').at(0).simulate('click');

    expect(props.onUserGetRouteSelect).toHaveBeenCalledTimes(1);
    expect(props.onUserGetRouteSelect).toHaveBeenCalledWith({"fromWhere": "Fort Lauderdale, Florida", "toWhere": "Genoa, Italy", "when": "6/3/2020"});
  });

});
