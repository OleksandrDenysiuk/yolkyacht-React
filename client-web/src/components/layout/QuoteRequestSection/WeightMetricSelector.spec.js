import React from 'react';
import { Select } from '@material-ui/core';
import WeightMetricSelector from './WeightMetricSelector';
import { WEIGHT_METRIC } from '../../../constants/user_defined';
import { configure, mount } from 'enzyme/build'
import Adapter from 'enzyme-adapter-react-16';


configure({ adapter: new Adapter() });

describe('WeightMetricSelector', () => {

  const setup = (propOverrides) => {

    const props = Object.assign({
      label: 'Test Label',
      value: WEIGHT_METRIC.metricTons,
      onSelect: jest.fn()
    }, propOverrides);

    const wrapper = mount(
      <WeightMetricSelector {...props} />
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

  it('should show selected ,etric tons metric', () => {
    const { wrapper } = setup({value: WEIGHT_METRIC.metricTons});
    expect(wrapper).toBeDefined();

    const selects = wrapper.find(Select);
    expect(selects).toHaveLength(1);
    expect(selects.at(0).text()).toContain(WEIGHT_METRIC.metricTons);
  });

  it('should show selected lbs metric', () => {
    const { wrapper } = setup({value: WEIGHT_METRIC.lbs});
    expect(wrapper).toBeDefined();

    const selects = wrapper.find(Select);
    expect(selects).toHaveLength(1);
    expect(selects.at(0).text()).toContain(WEIGHT_METRIC.lbs);
  });

  it('should call onSelect() on select', () => {
    const { wrapper, props } = setup();
    expect(wrapper).toBeDefined();

    const selects = wrapper.find(Select);
    expect(selects).toHaveLength(1);

    expect(props.onSelect).toHaveBeenCalledTimes(0);

    selects.at(0).props().onChange({ target: { value: WEIGHT_METRIC.lbs } });

    expect(props.onSelect).toHaveBeenCalledTimes(1);
    expect(props.onSelect).toHaveBeenCalledWith(WEIGHT_METRIC.lbs);
  });

});
