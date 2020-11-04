/**
 * @jest-environment jsdom
 */
import React from 'react';
import { LoginView } from './LoginView';
import { mount } from 'enzyme/build';
import { Text, Button, Input } from 'react-native-elements';
import { initialState } from '../../reducers/auth';
import { pressButtonWithTextOnWrapper, mockTheme } from '../../utils/testHelpers'


describe('LoginView', () => {

  afterEach(() => {
    jest.clearAllMocks();
  });

  const loginViaAPIMock = jest.fn(() => new Promise.resolve());

  const setup = (propOverrides) => {

    const props = Object.assign({
      auth: {
        ...initialState,
        auth: {
          loginViaAPI: loginViaAPIMock
        }
      },
      navigation: {
        navigate: jest.fn()
      },
      theme: mockTheme
    }, propOverrides);

    const wrapper = mount(
      <LoginView {...props}/>
    );

    return {
      props,
      wrapper
    };
  };

  it('should contain expected view elements', () => {
    const { wrapper } = setup();
    expect(wrapper).toBeDefined();

    expect(wrapper.text()).toContain('Login');
    expect(wrapper.text()).toContain('Email *');
    expect(wrapper.text()).toContain('Login');
    expect(wrapper.text()).toContain('Password *');
    expect(wrapper.text()).toContain('Sign Up');

    expect(wrapper.find(Text).findWhere(w => w.text().indexOf('Login') !==  -1)).toBeDefined();
    expect(wrapper.find(Text).findWhere(w => w.text().indexOf('Email *') !==  -1)).toBeDefined();
    expect(wrapper.find(Text).findWhere(w => w.text().indexOf('Password *') !==  -1)).toBeDefined();
    expect(wrapper.find(Text).findWhere(w => w.text().indexOf('or') !==  -1)).toBeDefined();

    expect(wrapper.find(Input).length).toBe(2);

    expect(wrapper.find(Button).findWhere(w => w.text().indexOf('Login') !==  -1)).toBeDefined();
    expect(wrapper.find(Button).findWhere(w => w.text().indexOf('Sign Up') !==  -1)).toBeDefined();
    expect(wrapper.find(Button).length).toBe(2);
  });

  it('should call navigate when "Sign Up" pressed', () => {
    const { wrapper, props } = setup();
    expect(wrapper).toBeDefined();

    expect(props.navigation.navigate).not.toHaveBeenCalled();

    pressButtonWithTextOnWrapper(wrapper, 'Sign Up');

    expect(props.navigation.navigate).toHaveBeenCalled();
  });

  it('should validate email field when "Login" pressed', () => {
    const { wrapper, props } = setup();
    expect(wrapper).toBeDefined();

    wrapper.instance().state.email='wrongEmail.com';

    pressButtonWithTextOnWrapper(wrapper, 'Login');

    expect(wrapper.find(Text).findWhere(w => w.text().indexOf('Wrong email or password') !==  -1)).toBeDefined();
  });

  it('should validate password field when "Login" pressed', () => {
    const { wrapper, props } = setup();
    expect(wrapper).toBeDefined();

    const passwordInput = wrapper.find('input').at(1);
    expect(passwordInput).toBeDefined();

    passwordInput.value = '';

    pressButtonWithTextOnWrapper(wrapper, 'Sign Up');

    expect(wrapper.find(Text).findWhere(w => w.text().indexOf('Wrong email or password') !==  -1)).toBeDefined();
  });

  it('should call autoLoginViaAPI() "Login" pressed with correct email and password', () => {
    const handleLoginSpy = jest.spyOn(LoginView.prototype, 'handleLogin');
    const createActionSpy = jest.spyOn(LoginView.prototype, 'autoLoginViaAPI');

    const { wrapper } = setup();
    expect(wrapper).toBeDefined();

    const emailInput = wrapper.find(Input).at(0);
    expect(emailInput).toBeDefined();

    wrapper.instance().state.email='correct.email@test.com';
    wrapper.instance().state.password='TestPassword';

    expect(handleLoginSpy).not.toHaveBeenCalled();
    expect(createActionSpy).not.toHaveBeenCalled();

    pressButtonWithTextOnWrapper(wrapper, 'Login');

    expect(handleLoginSpy).toHaveBeenCalled();
    expect(createActionSpy).toHaveBeenCalled();
  });

  it('should not call autoLoginViaAPI() "Login" pressed with incorrect email and password', () => {
    const handleLoginSpy = jest.spyOn(LoginView.prototype, 'handleLogin');
    const createActionSpy = jest.spyOn(LoginView.prototype, 'autoLoginViaAPI');

    const { wrapper } = setup();
    expect(wrapper).toBeDefined();

    wrapper.instance().state.email='wrong.email.test.com';
    wrapper.instance().state.password='';

    expect(handleLoginSpy).not.toHaveBeenCalled();
    expect(createActionSpy).not.toHaveBeenCalled();

    pressButtonWithTextOnWrapper(wrapper, 'Login');

    expect(handleLoginSpy).toHaveBeenCalled();
    expect(createActionSpy).not.toHaveBeenCalled();
  });

});
