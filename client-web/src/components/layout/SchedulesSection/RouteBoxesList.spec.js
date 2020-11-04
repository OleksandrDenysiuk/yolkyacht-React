import React from 'react';
import { Button } from '@material-ui/core';
import RouteBoxesList from './RouteBoxesList';
import RouteWithImageBox from './RouteWithImageBox';
import { configure, mount } from 'enzyme/build'
import Adapter from 'enzyme-adapter-react-16';


configure({ adapter: new Adapter() });

const route1 = [
  {
    _id: "41224d776a326fb40f002105",
    arrivalOn: "2020-05-16T00:00:00.000Z",
    departureOn: "2020-05-31T00:00:00.000Z",
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
    arrivalOn: "2020-06-02T00:00:00.000Z",
    departureOn: "2020-06-03T00:00:00.000Z",
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
];
const route2 = [
  {
    _id: "41224d776a326fb40f002105",
    arrivalOn: "2020-05-16T00:00:00.000Z",
    departureOn: "2020-05-31T00:00:00.000Z",
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
    arrivalOn: "2020-06-02T00:00:00.000Z",
    departureOn: "2020-06-03T00:00:00.000Z",
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
    routesList: [route1, route2],
    onUserGetRouteSelect: jest.fn()
  }, propOverrides);


  const wrapper = mount(
    <RouteBoxesList
      {...props}
    />
  );

  return {
    props,
    wrapper
  };
};


describe('RouteBoxesList', () => {

  it('should render component', () => {
    const { wrapper } = setup();

    expect(wrapper).toBeDefined();
  });

  it('should render nested components ', () => {
    const { wrapper } = setup();

    expect(wrapper).toBeDefined();
    expect(wrapper.text()).toContain('Destination');

    const routeBoxes = wrapper.find(RouteWithImageBox);
    expect(routeBoxes).toHaveLength(2);

    const buttons = wrapper.find(Button);
    expect(buttons).toHaveLength(2);
    expect(buttons.at(0).text()).toContain('Get');
    expect(buttons.at(0).text()).toContain('Quote');
    expect(buttons.at(1).text()).toContain('Get');
    expect(buttons.at(1).text()).toContain('Quote');
  });

  it('should snow "No matching schedule(s)" when no routes received', () => {
    const { wrapper } = setup({routesList: []});

    const routeBoxes = wrapper.find(RouteWithImageBox);
    expect(routeBoxes).toHaveLength(0);

    expect(wrapper).toBeDefined();
    expect(wrapper.text()).toContain('No matching schedule(s)');
  });

});
