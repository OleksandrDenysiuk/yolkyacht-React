/**
 * @jest-environment jsdom
 */
import React from 'react';
import { SignUpView } from './SignUpView';
import { mount } from 'enzyme/build';
import { Text, Button, Input } from 'react-native-elements';
import { initialState } from '../../reducers/auth';
import { pressButtonWithTextOnWrapper, mockTheme } from '../../utils/testHelpers';


describe('SignUpView', () => {

  afterEach(() => {
    jest.clearAllMocks();
  });

  const signUpViaAPIMock = jest.fn(() => new Promise.resolve());

  const setup = (propOverrides) => {

    const props = Object.assign({
      auth: {
        ...initialState,
        auth: {
          signUpViaAPI: signUpViaAPIMock
        }
      },
      navigation: {
        navigate: jest.fn()
      },
      theme: mockTheme
    }, propOverrides);

    const wrapper = mount(
      <SignUpView {...props}/>
    );

    return {
      props,
      wrapper
    };
  };

  it('should contain expected view elements', async () => {
    const { wrapper } = setup();
    expect(wrapper).toBeDefined();

    expect(wrapper.text()).toContain('Sign Up');
    expect(wrapper.text()).toContain('Email *');
    expect(wrapper.text()).toContain('Password *');
    expect(wrapper.text()).toContain('Retype Password *');
    expect(wrapper.text()).toContain('User Name *');

    expect(wrapper.find(Text).findWhere(w => w.text().indexOf('Login') !==  -1)).toBeDefined();
    expect(wrapper.find(Text).findWhere(w => w.text().indexOf('Email *') !==  -1)).toBeDefined();
    expect(wrapper.find(Text).findWhere(w => w.text().indexOf('Password *') !==  -1)).toBeDefined();
    expect(wrapper.find(Text).findWhere(w => w.text().indexOf('or') !==  -1)).toBeDefined();

    expect(wrapper.find(Input).length).toBe(4);

    expect(wrapper.find(Button).findWhere(w => w.text().indexOf('Sign Up') !==  -1)).toBeDefined();
    expect(wrapper.find(Button).length).toBe(1);
  });

  it('should show error message for empty email filed when "Sign Up" pressed', async () => {
    const { wrapper, props } = setup();
    expect(wrapper).toBeDefined();

    expect(wrapper.text()).not.toContain(('Email is required'));

    wrapper.instance().state.email = '';

    pressButtonWithTextOnWrapper(wrapper, 'Sign Up');

    expect(wrapper.text()).toContain(('Email is required'));
  });

  it('should validate email field when "Sign Up" pressed', () => {
    const { wrapper, props } = setup();
    expect(wrapper).toBeDefined();

    expect(wrapper.text()).not.toContain(('Invalid email'));

    wrapper.instance().state.email = 'wrong.emais.test.com';

    pressButtonWithTextOnWrapper(wrapper, 'Sign Up');

    expect(wrapper.text()).toContain(('Invalid email'));
  });

  it('should show error message for empty password1 field when "Sign Up" pressed', async () => {
    const { wrapper, props } = setup();
    expect(wrapper).toBeDefined();

    expect(wrapper.text()).not.toContain(('Password too short'));

    wrapper.instance().state.password1 = '';

    pressButtonWithTextOnWrapper(wrapper, 'Sign Up');

    expect(wrapper.text()).toContain(('Password too short'));
  });

  it('should validate password1 field when "Sign Up" pressed', () => {
    const { wrapper, props } = setup();
    expect(wrapper).toBeDefined();

    expect(wrapper.text()).not.toContain(('Password too short'));

    wrapper.instance().state.password1 = '12';

    pressButtonWithTextOnWrapper(wrapper, 'Sign Up');

    expect(wrapper.text()).toContain(('Password too short'));
  });

  it('should show error message for empty password2 field when "Sign Up" pressed', async () => {
    const { wrapper, props } = setup();
    expect(wrapper).toBeDefined();

    expect(wrapper.text()).not.toContain(('Must fit to first password'));

    wrapper.instance().state.password1 = 'SuperPuperPassword';
    wrapper.instance().state.password2 = '';

    pressButtonWithTextOnWrapper(wrapper, 'Sign Up');

    expect(wrapper.text()).toContain(('Password too short'));
  });

  it('should validate password2 field when "Sign Up" pressed', () => {
    const { wrapper, props } = setup();
    expect(wrapper).toBeDefined();

    expect(wrapper.text()).not.toContain(('Password too short'));

    wrapper.instance().state.password1 = 'SuperPuperPassword';
    wrapper.instance().state.password2 = '12345678';

    pressButtonWithTextOnWrapper(wrapper, 'Sign Up');

    expect(wrapper.text()).toContain(('Must fit to first password'));
  });

  it('should how error message for empty name field when "Sign Up" pressed', async () => {
    const { wrapper, props } = setup();
    expect(wrapper).toBeDefined();

    expect(wrapper.text()).not.toContain(('Name is required'));

    wrapper.instance().state.name = '';

    pressButtonWithTextOnWrapper(wrapper, 'Sign Up');

    expect(wrapper.text()).toContain(('Name is required'));
  });

  it('should validate name field when "Sign Up" pressed', () => {
    const { wrapper, props } = setup();
    expect(wrapper).toBeDefined();

    expect(wrapper.text()).not.toContain(('Name too short'));

    wrapper.instance().state.name = '12';

    pressButtonWithTextOnWrapper(wrapper, 'Sign Up');

    expect(wrapper.text()).toContain(('Name too short'));
  });

  it('should call signUpViaAPI() when "Sign Up" pressed with correct user data fields', async () => {
    const handleSignUpSpy = jest.spyOn(SignUpView.prototype, 'handleSignUp');
    const createActionSpy = jest.spyOn(SignUpView.prototype, 'signUpViaAPIMock');

    const { wrapper } = setup();
    expect(wrapper).toBeDefined();

    const emailInput = wrapper.find(Input).at(0);
    expect(emailInput).toBeDefined();

    wrapper.instance().state.email = 'correct.email@test.com';
    wrapper.instance().state.password1 = 'SuperTestPassword';
    wrapper.instance().state.password2 = 'SuperTestPassword';
    wrapper.instance().state.name = 'Test Name';


    expect(handleSignUpSpy).not.toHaveBeenCalled();
    expect(createActionSpy).not.toHaveBeenCalled();

    pressButtonWithTextOnWrapper(wrapper, 'Sign Up');

    expect(handleSignUpSpy).toHaveBeenCalled();
    expect(createActionSpy).toHaveBeenCalled();
  });

  it('should not call signUpViaAPI() when "Sign Up" pressed with icorrect user data fields', async () => {
    const handleSignUpSpy = jest.spyOn(SignUpView.prototype, 'handleSignUp');
    const createActionSpy = jest.spyOn(SignUpView.prototype, 'signUpViaAPIMock');

    const { wrapper } = setup();
    expect(wrapper).toBeDefined();

    const emailInput = wrapper.find(Input).at(0);
    expect(emailInput).toBeDefined();

    wrapper.instance().state.email = 'correct.email.test.com';
    wrapper.instance().state.password1 = 'SuperTestPassword';
    wrapper.instance().state.password2 = 'SuperTestPassword';
    wrapper.instance().state.name = 'Test Name';


    expect(handleSignUpSpy).not.toHaveBeenCalled();
    expect(createActionSpy).not.toHaveBeenCalled();

    pressButtonWithTextOnWrapper(wrapper, 'Sign Up');

    expect(handleSignUpSpy).toHaveBeenCalled();
    expect(createActionSpy).not.toHaveBeenCalled();
  });

});
