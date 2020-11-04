import React from 'react';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import Navbar from './Navbar';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
import UserProfileMenu from '../auth/UserProfileMenu';
import { hasExactNumberOfNestedComponents } from '../../../src/utils/testHelpers';
import { initialState } from '../../reducers/auth';
import { configure, mount } from 'enzyme/build'
import Adapter from 'enzyme-adapter-react-16';
import configureMockStore from 'redux-mock-store';


configure({ adapter: new Adapter() });

const middleware = [thunk];

const setup = (propOverrides) => {

  const props = Object.assign({
    auth: initialState
  }, propOverrides);

  const mockStore = configureMockStore(middleware);
  let store = mockStore({auth: props.auth});

  const wrapper = mount(
    <Provider store={store}>
      <Navbar {...props}/>
    </Provider>
  );

  return {
    wrapper,
    props
  };
};

describe('Navbar', () => {

  it('should render element with defined structure', () => {
    const { wrapper } = setup();

    expect(wrapper).toBeDefined();
    expect(wrapper.text()).toContain('Allied Yacht Transportation');
    expect(wrapper.text()).toContain('Login');
  });

  it('should contain nested elements when user not authorized', () => {
    const { wrapper } = setup();

    expect(wrapper).toBeDefined();
    hasExactNumberOfNestedComponents(wrapper, AppBar, 1);
    hasExactNumberOfNestedComponents(wrapper, Toolbar, 1);
    hasExactNumberOfNestedComponents(wrapper, MenuIcon, 1);
    hasExactNumberOfNestedComponents(wrapper, IconButton, 1);
    hasExactNumberOfNestedComponents(wrapper, UserProfileMenu, 0);
    hasExactNumberOfNestedComponents(wrapper, Button, 1);
    expect(wrapper.find(Button).at(0).text()).toBe('Login');
  });

  it('should contain nested elements when user authorized', () => {
    const authorizedAuth = {
      ...initialState,
      isAuthenticated: true,
      user: {
        name: 'testUsername',
        email: 'testUserEmail'
      },
      auth: {
        login: 'testUser@login.com'
      }
    }
    const { wrapper } = setup({auth: authorizedAuth});

    expect(wrapper).toBeDefined();
    expect(wrapper.text()).toContain('Allied Yacht Transportation');
    expect(wrapper.text()).not.toContain('Login');
    expect(wrapper.text()).toContain('testUsername');

    hasExactNumberOfNestedComponents(wrapper, AppBar, 1);
    hasExactNumberOfNestedComponents(wrapper, Toolbar, 1);
    hasExactNumberOfNestedComponents(wrapper, MenuIcon, 1);
    hasExactNumberOfNestedComponents(wrapper, IconButton, 1);
    hasExactNumberOfNestedComponents(wrapper, UserProfileMenu, 1);
    hasExactNumberOfNestedComponents(wrapper, Button, 1);
    expect(wrapper.find(Button).at(0).text()).toBe('testUsername');
  });

});
