import React from 'react';
import PortSelector from './PortSelector';
import { FormControl, InputLabel, Select, FormHelperText } from '@material-ui/core';
import { configure, mount } from 'enzyme/build'
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

const testPort1 = {
  _id: 1,
  portName: 'port 1 short name',
};
const testPort2 = {
  _id: 2,
  portName: 'port 2 short name',
};


const setup = (propOverrides) => {
  const props = Object.assign({
    selectedPort: `${testPort1._id}`,
    ports: [testPort1, testPort2],
    errors: 'test error message',
    label: 'Select destination port',
    onSelect: jest.fn()
  }, propOverrides);


  const wrapper = mount(
    <PortSelector
      {...props}
    />
  );

  return {
    props,
    wrapper
  };
};

describe('PortSelector', () => {

  it('should render element with defined structure', () => {
    const { wrapper } = setup();

    expect(wrapper).toBeDefined();

    expect(wrapper.find(InputLabel).exists()).toBe(true);
    expect(wrapper.find(FormControl).exists()).toBe(true);
    //expect(wrapper.find(MenuItem).exists()).toBe(true); - // ?, should be 2 items
    expect(wrapper.find(Select).exists()).toBe(true);
    expect(wrapper.find(FormHelperText).exists()).toBe(true);
  });

  it('should show component with received data', () => {
    const { wrapper } = setup();

    const labels = wrapper.find(InputLabel);
    expect(labels).toHaveLength(1);
    expect(labels.at(0).text()).toContain('Select destination port');

    const selects = wrapper.find(Select);
    expect(selects).toHaveLength(1);
    expect(selects.at(0).text()).toContain(testPort1.portName);

    const errors = wrapper.find(FormHelperText);
    expect(errors).toHaveLength(1);
    expect(errors.at(0).text()).toContain('test error message');
  });

});
