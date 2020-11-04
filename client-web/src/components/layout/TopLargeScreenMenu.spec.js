import React from 'react';
import { Link } from 'react-scroll';
import TopLargeScreenMenu from './TopLargeScreenMenu';
import { configure, mount, shallow } from 'enzyme/build'
import Adapter from 'enzyme-adapter-react-16';


configure({ adapter: new Adapter() });

const setup = () => {

  const wrapper = mount(
    <TopLargeScreenMenu />
  );

  return {
    wrapper
  };
};

describe('TopLargeScreenMenu', () => {

  it('should render element with defined structure', () => {
    const { wrapper } = setup();

    expect(wrapper).toBeDefined();

    expect(wrapper.text()).toContain('Schedule');
    expect(wrapper.text()).toContain('Contacts');
    expect(wrapper.text()).toContain('About');

    const links = wrapper.find(Link);
    expect(links).toHaveLength(3);
  });

});
