import React from 'react';
import { Select } from '@material-ui/core';
import TransportPurposeSelector from './TransportPurposeSelector';
import { PURPOSE_OF_TRANSPORT } from '../../../constants/user_defined';
import { configure, mount } from 'enzyme/build'
import Adapter from 'enzyme-adapter-react-16';


configure({ adapter: new Adapter() });

describe('TransportPurposeSelector', () => {

  const setup = (propOverrides) => {

    const props = Object.assign({
      value: PURPOSE_OF_TRANSPORT.boatShow,
      onSelect: jest.fn()
    }, propOverrides);

    const wrapper = mount(
      <TransportPurposeSelector {...props} />
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
    expect(labels.at(0).text()).toContain('Purpose of Transport');

    const selects = wrapper.find(Select);
    expect(selects).toHaveLength(1);
  });

  it('should show selected Boat Show purpose', () => {
    const { wrapper } = setup({value: PURPOSE_OF_TRANSPORT.boatShow});
    expect(wrapper).toBeDefined();

    const selects = wrapper.find(Select);
    expect(selects).toHaveLength(1);
    expect(selects.at(0).text()).toContain(PURPOSE_OF_TRANSPORT.boatShow);
  })

  it('should show selected Charter purpose', () => {
    const { wrapper } = setup({value: PURPOSE_OF_TRANSPORT.charter});
    expect(wrapper).toBeDefined();

    const selects = wrapper.find(Select);
    expect(selects).toHaveLength(1);
    expect(selects.at(0).text()).toContain(PURPOSE_OF_TRANSPORT.charter);
  });

  it('should show selected Sale purpose', () => {
    const { wrapper } = setup({value: PURPOSE_OF_TRANSPORT.purchaseSale});
    expect(wrapper).toBeDefined();

    const selects = wrapper.find(Select);
    expect(selects).toHaveLength(1);
    expect(selects.at(0).text()).toContain(PURPOSE_OF_TRANSPORT.purchaseSale);
  });

  it('should show selected Yard Work purpose', () => {
    const { wrapper } = setup({value: PURPOSE_OF_TRANSPORT.yardWork});
    expect(wrapper).toBeDefined();

    const selects = wrapper.find(Select);
    expect(selects).toHaveLength(1);
    expect(selects.at(0).text()).toContain(PURPOSE_OF_TRANSPORT.yardWork);
  });

  it('should show selected Fishing Tournament purpose', () => {
    const { wrapper } = setup({value: PURPOSE_OF_TRANSPORT.fishingTournament});
    expect(wrapper).toBeDefined();

    const selects = wrapper.find(Select);
    expect(selects).toHaveLength(1);
    expect(selects.at(0).text()).toContain(PURPOSE_OF_TRANSPORT.fishingTournament);
  });

  it('should show selected Regatta purpose', () => {
    const { wrapper } = setup({value: PURPOSE_OF_TRANSPORT.regatta});
    expect(wrapper).toBeDefined();

    const selects = wrapper.find(Select);
    expect(selects).toHaveLength(1);
    expect(selects.at(0).text()).toContain(PURPOSE_OF_TRANSPORT.regatta);
  });

  it('should show selected Other purpose', () => {
    const { wrapper } = setup({value: PURPOSE_OF_TRANSPORT.other});
    expect(wrapper).toBeDefined();

    const selects = wrapper.find(Select);
    expect(selects).toHaveLength(1);
    expect(selects.at(0).text()).toContain(PURPOSE_OF_TRANSPORT.other);
  });

  it('should call onSelect() on select', () => {
    const { wrapper, props } = setup();
    expect(wrapper).toBeDefined();

    const selects = wrapper.find(Select);
    expect(selects).toHaveLength(1);

    expect(props.onSelect).toHaveBeenCalledTimes(0);

    selects.at(0).props().onChange({ target: { value: PURPOSE_OF_TRANSPORT.regatta } });

    expect(props.onSelect).toHaveBeenCalledTimes(1);
    expect(props.onSelect).toHaveBeenCalledWith(PURPOSE_OF_TRANSPORT.regatta);
  });

});
