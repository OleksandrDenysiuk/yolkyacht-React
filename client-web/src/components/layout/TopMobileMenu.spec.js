import React from 'react';
import TopMobileMenu from './TopMobileMenu';
import Menu from '@material-ui/core/Menu';
import { configure, mount } from 'enzyme/build'
import Adapter from 'enzyme-adapter-react-16';


configure({ adapter: new Adapter() });

const setup = () => {

  const wrapper = mount(
    <TopMobileMenu />
  );

  return {
    wrapper
  };
};

describe('TopMobileMenu', () => {

  it('should render element with defined structure', () => {
    const { wrapper } = setup();

    expect(wrapper).toBeDefined();

    const menus = wrapper.find(Menu);
    expect(menus).toHaveLength(1);
  });

});
