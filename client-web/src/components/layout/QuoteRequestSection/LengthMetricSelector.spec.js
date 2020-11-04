import React from 'react';
import { Select } from '@material-ui/core';
import LengthMetricSelector from './LengthMetricSelector';
import { LENGTH_METRIC } from '../../../constants/user_defined';
import { configure, mount } from 'enzyme/build'
import Adapter from 'enzyme-adapter-react-16';


configure({ adapter: new Adapter() });

describe('LengthMetricSelector', () => {

  const setup = (propOverrides) => {

    const props = Object.assign({
      label: 'Test Label',
      value: LENGTH_METRIC.meters,
      onSelect: jest.fn()
    }, propOverrides);

    const wrapper = mount(
      <LengthMetricSelector {...props} />
    );

    return {
      props,
      wrapper,
    };
  };

  it('should render component and have defined structure', () => {
    const { wrapper } = setup();
    expect(wrapper).toBeDefined();

    const labels = wrapper.find('label');
    expect(labels).toHaveLength(1);
    expect(labels.at(0).text()).toContain('Test Label');

    const selects = wrapper.find(Select);
    expect(selects).toHaveLength(1);
  });

  it('should show selected meters metric', () => {
    const { wrapper } = setup({value: LENGTH_METRIC.meters});
    expect(wrapper).toBeDefined();

    const selects = wrapper.find(Select);
    expect(selects).toHaveLength(1);
    expect(selects.at(0).text()).toContain(LENGTH_METRIC.meters);
  });

  it('should show selected feet metric', () => {
    const { wrapper } = setup({value: LENGTH_METRIC.feet});
    expect(wrapper).toBeDefined();

    const selects = wrapper.find(Select);
    expect(selects).toHaveLength(1);
    expect(selects.at(0).text()).toContain(LENGTH_METRIC.feet);
  });

  it('should call onSelect() on select', () => {
    const { wrapper, props } = setup();
    expect(wrapper).toBeDefined();

    const selects = wrapper.find(Select);
    expect(selects).toHaveLength(1);

    expect(props.onSelect).toHaveBeenCalledTimes(0);

    selects.at(0).props().onChange({ target: { value: LENGTH_METRIC.feet } });

    expect(props.onSelect).toHaveBeenCalledTimes(1);
    expect(props.onSelect).toHaveBeenCalledWith(LENGTH_METRIC.feet);
  });

});
