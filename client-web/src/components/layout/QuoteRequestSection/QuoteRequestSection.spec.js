import React from 'react';
import { TextField, Button } from '@material-ui/core';
import { QuoteRequestSection } from './QuoteRequestSection.js';
import LengthMetricSelector from './LengthMetricSelector';
import WeightMetricSelector from './WeightMetricSelector';
import TransportPurposeSelector from './TransportPurposeSelector';
import { defaultQuoteRequestFormErrorsState, defaultQuoteRequestFormState } from '../../../reducers/quoteRequest';
import { LENGTH_METRIC, WEIGHT_METRIC, PURPOSE_OF_TRANSPORT } from '../../../constants/user_defined';
import { configure, mount } from 'enzyme/build';
import Adapter from 'enzyme-adapter-react-16';


configure({ adapter: new Adapter() });

const setup = (propOverrides) => {

  const props = Object.assign({
    quoteRequest: defaultQuoteRequestFormState,
    requestErrors: defaultQuoteRequestFormErrorsState,
    enqueueSnackbar: jest.fn(),
    dispatch: jest.fn(),
    postQuoteRequest: jest.fn().mockResolvedValue(),
    setFirstName: jest.fn(),
    setFirstNameError: jest.fn(),
    setLastName: jest.fn(),
    setLastNameError: jest.fn(),
    setPhoneNumber: jest.fn(),
    setPhoneNumberError: jest.fn(),
    setEmail: jest.fn(),
    setEmailError: jest.fn(),
    setBestTimeToContact: jest.fn(),
    setYachtModel: jest.fn(),
    setYear: jest.fn(),
    setLength: jest.fn(),
    setLengthUnit: jest.fn(),
    setBeam: jest.fn(),
    setBeamUnit: jest.fn(),
    setWeight: jest.fn(),
    setWeightUnit: jest.fn(),
    setPurpose: jest.fn(),
    setFromWhere: jest.fn(),
    setToWhere: jest.fn(),
    setWhen: jest.fn(),
    resetQuoteRequestForm: jest.fn(),
    resetQuoteRequestErrors: jest.fn(),
  }, propOverrides);

  const wrapper = mount(
    <QuoteRequestSection {...props}/>
  );

  return {
    wrapper,
    props
  };
};

describe('SchedulesSection', () => {

  it('should render with defined structure', () => {
    const { wrapper } = setup();

    expect(wrapper).toBeDefined();
    expect(wrapper.text()).toContain('Get Quote');
    expect(wrapper.text()).toContain('First Name');
    expect(wrapper.text()).toContain('Last Name');
    expect(wrapper.text()).toContain('Phone');
    expect(wrapper.text()).toContain('Email');
    expect(wrapper.text()).toContain('Best Time to Contact');
    expect(wrapper.text()).toContain('Yacht Make and Model');
    expect(wrapper.text()).toContain('Length');
    expect(wrapper.text()).toContain('Beam');
    expect(wrapper.text()).toContain('Weight');
    expect(wrapper.text()).toContain('Purpose of Transport');
    expect(wrapper.text()).toContain('From Where');
    expect(wrapper.text()).toContain('To Where');
    expect(wrapper.text()).toContain('When');

    const textFields = wrapper.find(TextField);
    expect(textFields).toHaveLength(13);

    const lengthMetricSelectors = wrapper.find(LengthMetricSelector);
    expect(lengthMetricSelectors).toHaveLength(2);

    const weightMetricSelectors = wrapper.find(WeightMetricSelector);
    expect(weightMetricSelectors).toHaveLength(1);

    const transportPurposeSelectors = wrapper.find(TransportPurposeSelector);
    expect(transportPurposeSelectors).toHaveLength(1);

    const buttons = wrapper.find(Button);
    expect(buttons).toHaveLength(1);
    expect(buttons.at(0).text()).toContain('Send');
  });

  it('should show form data', () => {
    const quoteRequest = {
      firstName: 'Test First Name',
      lastName: 'Test Last Name',
      phoneNumber: 'Test Phone Number',
      email: 'test@email.com',
      bestTimeToContact: 'Current Time',
      yachtModel: 'Super-Puper',
      year: '2020',
      length: '180',
      lengthUnit: LENGTH_METRIC.meters,
      beam: '30',
      beamUnit: LENGTH_METRIC.meters,
      weight: '100',
      weightUnit: WEIGHT_METRIC.metricTons,
      purpose: PURPOSE_OF_TRANSPORT.regatta,
      fromWhere: 'Irnen',
      toWhere: 'Barcelona',
      when: 'Now'
    };
    const { wrapper } = setup({quoteRequest: quoteRequest});

    expect(wrapper).toBeDefined();
    const textFields = wrapper.find(TextField);
    expect(textFields.at(0).props().value).toContain('Test First Name');
    expect(textFields.at(1).props().value).toContain('Test Last Name');
    expect(textFields.at(2).props().value).toContain('Test Phone Number');
    expect(textFields.at(3).props().value).toContain('test@email.com');
    expect(textFields.at(4).props().value).toContain('Current Time');
    expect(textFields.at(5).props().value).toContain('Super-Puper');
    expect(textFields.at(6).props().value).toContain('2020');
    expect(textFields.at(7).props().value).toContain('180');
    expect(textFields.at(8).props().value).toContain('30');
    expect(textFields.at(9).props().value).toContain('100');
    expect(textFields.at(10).props().value).toContain('Irnen');
    expect(textFields.at(11).props().value).toContain('Barcelona');
    expect(textFields.at(12).props().value).toContain('Now');
  });

  it('should show errors if any', () => {
    const requestErrors = {
      firstName: 'First Name is Required',
      lastName: 'Last Name is Required',
      phoneNumber: 'Phone Number is Required',
      email: 'Wrong Email',
    };
    const { wrapper } = setup({requestErrors: requestErrors});

    expect(wrapper).toBeDefined();
    const textFields = wrapper.find(TextField)
    expect(textFields.at(0).props().helperText).toContain('First Name is Required');
    expect(textFields.at(1).props().helperText).toContain('Last Name is Required');
    expect(textFields.at(2).props().helperText).toContain('Phone Number is Required');
    expect(textFields.at(3).props().helperText).toContain('Wrong Email');
  });

  it('should call setFirstName() when First Name changed', () => {
    const { wrapper, props } = setup();

    expect(wrapper).toBeDefined();

    const textFields = wrapper.find(TextField)
    expect(props.setFirstName).toHaveBeenCalledTimes(0);
    textFields.at(0).props().onChange({ target: { value: 'A' } });
    expect(props.setFirstName).toHaveBeenCalledTimes(1);
  });

  it('should call setFirstNameError() when First Name blur', () => {
    const { wrapper, props } = setup();

    expect(wrapper).toBeDefined();

    const textFields = wrapper.find(TextField)
    expect(props.setFirstName).toHaveBeenCalledTimes(0);
    textFields.at(0).props().onBlur({ target: { value: 'B' } });
    expect(props.setFirstNameError).toHaveBeenCalledTimes(1);
  });

  it('should call setLastName() when Last Name changed', () => {
    const { wrapper, props } = setup();

    expect(wrapper).toBeDefined();

    const textFields = wrapper.find(TextField)
    expect(props.setLastName).toHaveBeenCalledTimes(0);
    textFields.at(1).props().onChange({ target: { value: 'A' } });
    expect(props.setLastName).toHaveBeenCalledTimes(1);
  });

  it('should call setLastNameError() when Last Name blur', () => {
    const { wrapper, props } = setup();

    expect(wrapper).toBeDefined();

    const textFields = wrapper.find(TextField)
    expect(props.setLastNameError).toHaveBeenCalledTimes(0);
    textFields.at(1).props().onBlur({ target: { value: 'B' } });
    expect(props.setLastNameError).toHaveBeenCalledTimes(1);
  });

  it('should call setPhoneNumber() when Phone Number changed', () => {
    const { wrapper, props } = setup();

    expect(wrapper).toBeDefined();

    const textFields = wrapper.find(TextField)
    expect(props.setPhoneNumber).toHaveBeenCalledTimes(0);
    textFields.at(2).props().onChange({ target: { value: 'A' } });
    expect(props.setPhoneNumber).toHaveBeenCalledTimes(1);
  });

  it('should call setPhoneNumberError() when Phone Number blur', () => {
    const { wrapper, props } = setup();

    expect(wrapper).toBeDefined();

    const textFields = wrapper.find(TextField)
    expect(props.setPhoneNumberError).toHaveBeenCalledTimes(0);
    textFields.at(2).props().onBlur({ target: { value: 'B' } });
    expect(props.setPhoneNumberError).toHaveBeenCalledTimes(1);
  });

  it('should call setEmail() when Email changed', () => {
    const { wrapper, props } = setup();

    expect(wrapper).toBeDefined();

    const textFields = wrapper.find(TextField)
    expect(props.setEmail).toHaveBeenCalledTimes(0);
    textFields.at(3).props().onChange({ target: { value: 'A' } });
    expect(props.setEmail).toHaveBeenCalledTimes(1);
  });

  it('should call setEmailError() when Email blur', () => {
    const { wrapper, props } = setup();

    expect(wrapper).toBeDefined();

    const textFields = wrapper.find(TextField)
    expect(props.setEmailError).toHaveBeenCalledTimes(0);
    textFields.at(3).props().onBlur({ target: { value: 'B' } });
    expect(props.setEmailError).toHaveBeenCalledTimes(1);
  });

  it('should call setBestTimeToContact() when Email changed', () => {
    const { wrapper, props } = setup();

    expect(wrapper).toBeDefined();

    const textFields = wrapper.find(TextField)
    expect(props.setBestTimeToContact).toHaveBeenCalledTimes(0);
    textFields.at(4).props().onChange({ target: { value: 'A' } });
    expect(props.setBestTimeToContact).toHaveBeenCalledTimes(1);
  });

  it('should call setYachtModel() when Yacht Model changed', () => {
    const { wrapper, props } = setup();

    expect(wrapper).toBeDefined();

    const textFields = wrapper.find(TextField)
    expect(props.setYachtModel).toHaveBeenCalledTimes(0);
    textFields.at(5).props().onChange({ target: { value: 'A' } });
    expect(props.setYachtModel).toHaveBeenCalledTimes(1);
  });

  it('should call setYear() when Year changed', () => {
    const { wrapper, props } = setup();

    expect(wrapper).toBeDefined();

    const textFields = wrapper.find(TextField)
    expect(props.setYear).toHaveBeenCalledTimes(0);
    textFields.at(6).props().onChange({ target: { value: 'A' } });
    expect(props.setYear).toHaveBeenCalledTimes(1);
  });

  it('should call setLength() when Length changed', () => {
    const { wrapper, props } = setup();

    expect(wrapper).toBeDefined();

    const textFields = wrapper.find(TextField)
    expect(props.setLength).toHaveBeenCalledTimes(0);
    textFields.at(7).props().onChange({ target: { value: 'A' } });
    expect(props.setLength).toHaveBeenCalledTimes(1);
  });

  it('should call setBeam() when Beam changed', () => {
    const { wrapper, props } = setup();

    expect(wrapper).toBeDefined();

    const textFields = wrapper.find(TextField)
    expect(props.setBeam).toHaveBeenCalledTimes(0);
    textFields.at(8).props().onChange({ target: { value: 'A' } });
    expect(props.setBeam).toHaveBeenCalledTimes(1);
  });

  it('should call setWeight() when Weight changed', () => {
    const { wrapper, props } = setup();

    expect(wrapper).toBeDefined();

    const textFields = wrapper.find(TextField)
    expect(props.setWeight).toHaveBeenCalledTimes(0);
    textFields.at(9).props().onChange({ target: { value: 'A' } });
    expect(props.setWeight).toHaveBeenCalledTimes(1);
  });

  it('should call setFromWhere() when From Where changed', () => {
    const { wrapper, props } = setup();

    expect(wrapper).toBeDefined();

    const textFields = wrapper.find(TextField)
    expect(props.setFromWhere).toHaveBeenCalledTimes(0);
    textFields.at(10).props().onChange({ target: { value: 'A' } });
    expect(props.setFromWhere).toHaveBeenCalledTimes(1);
  });

  it('should call setToWhere() when To Where changed', () => {
    const { wrapper, props } = setup();

    expect(wrapper).toBeDefined();

    const textFields = wrapper.find(TextField)
    expect(props.setToWhere).toHaveBeenCalledTimes(0);
    textFields.at(11).props().onChange({ target: { value: 'A' } });
    expect(props.setToWhere).toHaveBeenCalledTimes(1);
  });

  it('should call setWhen() when When changed', () => {
    const { wrapper, props } = setup();

    expect(wrapper).toBeDefined();

    const textFields = wrapper.find(TextField)
    expect(props.setWhen).toHaveBeenCalledTimes(0);
    textFields.at(12).props().onChange({ target: { value: 'A' } });
    expect(props.setWhen).toHaveBeenCalledTimes(1);
  });

  it('should call resetQuoteRequestErrors() and postQuoteRequest() Send button clicked', () => {
    const { wrapper, props } = setup();

    expect(wrapper).toBeDefined();

    const buttons = wrapper.find(Button)
    expect(props.resetQuoteRequestErrors).toHaveBeenCalledTimes(0);
    expect(props.postQuoteRequest).toHaveBeenCalledTimes(0);

    buttons.at(0).simulate('click');

    expect(props.resetQuoteRequestErrors).toHaveBeenCalledTimes(1);
    expect(props.postQuoteRequest).toHaveBeenCalledTimes(1);
  });

});
