import React from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import Button from '@material-ui/core/Button'
import UserProfileMenu from './UserProfileMenu';
import { hasExactNumberOfNestedComponents, clickElementWithWithTypeAndTextOnWrapper } from '../../../src/utils/testHelpers';
import { configure, mount } from 'enzyme/build'
import Adapter from 'enzyme-adapter-react-16';


configure({ adapter: new Adapter() });

const setup = (propOverrides) => {

  const props = Object.assign({
    name: 'testUserName',
    auth: {
      logout: jest.fn()
    }
  }, propOverrides);

  const wrapper = mount(
    <UserProfileMenu {...props}/>
  );

  return {
    wrapper,
    props
  };
};

describe('UserProfileMenu', () => {

  it('should render with accepted user name', () => {
    const { wrapper } = setup();

    expect(wrapper).toBeDefined();
    expect(wrapper.text()).toContain('testUserName');

    hasExactNumberOfNestedComponents(wrapper, MenuItem, 1);
    expect(wrapper.find(MenuItem).at(0).text()).toBe('Logout...');
    hasExactNumberOfNestedComponents(wrapper, Menu, 1);
    expect(wrapper.find(Menu).at(0).text()).toBe('Logout...');
    hasExactNumberOfNestedComponents(wrapper, Button, 1);
    expect(wrapper.find(Button).at(0).text()).toBe('testUserName');
  });

  it('should contain nested elements when user not authorized', () => {
    const { wrapper, props } = setup();

    expect(wrapper).toBeDefined();
    clickElementWithWithTypeAndTextOnWrapper(wrapper, MenuItem, 'Logout...');
    expect(props.auth.logout).toHaveBeenCalled();
    expect(props.auth.logout).toHaveBeenCalledTimes(1);
  });

  it('should render without user name', () => {
    const { wrapper } = setup({name: ''});

    expect(wrapper).toBeDefined();
    expect(wrapper.text()).toContain('Logged in user');

    hasExactNumberOfNestedComponents(wrapper, MenuItem, 1);
    expect(wrapper.find(MenuItem).at(0).text()).toBe('Logout...');
    hasExactNumberOfNestedComponents(wrapper, Menu, 1);
    expect(wrapper.find(Menu).at(0).text()).toBe('Logout...');
    hasExactNumberOfNestedComponents(wrapper, Button, 1);
    expect(wrapper.find(Button).at(0).text()).toBe('Logged in user');
  });

});
