import actions from '../../constants/action_types';
import {
  setUserSelectSchedule, setFirstName, setFirstNameError, setLastName, setLastNameError, setPhoneNumber,
  setPhoneNumberError, setEmail, setEmailError, setBestTimeToContact, setYachtModel, setYear,
  setLength, setLengthUnit, setBeam, setBeamUnit, setWeight, setWeightUnit, setPurpose, setFromWhere,
  setToWhere, setWhen, resetQuoteRequestForm, resetQuoteRequestErrors
} from './index';

describe('quoteRequest reducer actions', () => {

  it('should create SET_USER_SELECT_SCHEDULE action', () => {
    const userSelection = 'test user selection';
    const expectedAction = {
      type: actions.QuoteRequest.SET_USER_SELECT_SCHEDULE,
      payload: userSelection
    };

    expect(setUserSelectSchedule(userSelection)).toEqual(expectedAction);
  });

  it('should create SET_FIRST_NAME action', () => {
    const firstName = 'test first name';
    const expectedAction = {
      type: actions.QuoteRequest.SET_FIRST_NAME,
      payload: firstName
    };

    expect(setFirstName(firstName)).toEqual(expectedAction);
  });

  it('should create SET_FIRST_NAME_ERROR action', () => {
    const firstNameError = 'test first name error';
    const expectedAction = {
      type: actions.QuoteRequest.SET_FIRST_NAME_ERROR,
      payload: firstNameError
    };

    expect(setFirstNameError(firstNameError)).toEqual(expectedAction);
  });

  it('should create SET_LAST_NAME action', () => {
    const lastName = 'test last name';
    const expectedAction = {
      type: actions.QuoteRequest.SET_LAST_NAME,
      payload: lastName
    };

    expect(setLastName(lastName)).toEqual(expectedAction);
  });

  it('should create SET_LAST_NAME_ERROR action', () => {
    const lastNameError = 'test last name error';
    const expectedAction = {
      type: actions.QuoteRequest.SET_LAST_NAME_ERROR,
      payload: lastNameError
    };

    expect(setLastNameError(lastNameError)).toEqual(expectedAction);
  });

  it('should create SET_PHONE_NUMBER action', () => {
    const phoneNumber = 'test phone number';
    const expectedAction = {
      type: actions.QuoteRequest.SET_PHONE_NUMBER,
      payload: phoneNumber
    };

    expect(setPhoneNumber(phoneNumber)).toEqual(expectedAction);
  });

  it('should create SET_PHONE_NUMBER_ERROR action', () => {
    const phoneNumberError = 'test phone number error';
    const expectedAction = {
      type: actions.QuoteRequest.SET_PHONE_NUMBER_ERROR,
      payload: phoneNumberError
    };

    expect(setPhoneNumberError(phoneNumberError)).toEqual(expectedAction);
  });

  it('should create SET_EMAIL action', () => {
    const email = 'test@email.comerror';
    const expectedAction = {
      type: actions.QuoteRequest.SET_EMAIL,
      payload: email
    };

    expect(setEmail(email)).toEqual(expectedAction);
  });

  it('should create SET_EMAIL_ERROR action', () => {
    const emailError = 'test email error';
    const expectedAction = {
      type: actions.QuoteRequest.SET_EMAIL_ERROR,
      payload: emailError
    };

    expect(setEmailError(emailError)).toEqual(expectedAction);
  });

  it('should create SET_BEST_TIME_TO_CONTACT action', () => {
    const bestTime = 'best time to contact';
    const expectedAction = {
      type: actions.QuoteRequest.SET_BEST_TIME_TO_CONTACT,
      payload: bestTime
    };

    expect(setBestTimeToContact(bestTime)).toEqual(expectedAction);
  });

  it('should create SET_YACHT_MODEL action', () => {
    const yachtModel = 'Suoer-Puper';
    const expectedAction = {
      type: actions.QuoteRequest.SET_YACHT_MODEL,
      payload: yachtModel
    };

    expect(setYachtModel(yachtModel)).toEqual(expectedAction);
  });

  it('should create SET_YEAR action', () => {
    const year = 'Suoer-Puper';
    const expectedAction = {
      type: actions.QuoteRequest.SET_YEAR,
      payload: year
    };

    expect(setYear(year)).toEqual(expectedAction);
  });

  it('should create SET_LENGTH action', () => {
    const yachtLength = '100 meters';
    const expectedAction = {
      type: actions.QuoteRequest.SET_LENGTH,
      payload: yachtLength
    };

    expect(setLength(yachtLength)).toEqual(expectedAction);
  });

  it('should create SET_LENGTH_UNIT action', () => {
    const lengthUnit = 'meters';
    const expectedAction = {
      type: actions.QuoteRequest.SET_LENGTH_UNIT,
      payload: lengthUnit
    };

    expect(setLengthUnit(lengthUnit)).toEqual(expectedAction);
  });

  it('should create SET_BEAM action', () => {
    const beam = 'beam';
    const expectedAction = {
      type: actions.QuoteRequest.SET_BEAM,
      payload: beam
    };

    expect(setBeam(beam)).toEqual(expectedAction);
  });

  it('should create SET_BEAM_UNIT action', () => {
    const beamUnit = 'meters';
    const expectedAction = {
      type: actions.QuoteRequest.SET_BEAM_UNIT,
      payload: beamUnit
    };

    expect(setBeamUnit(beamUnit)).toEqual(expectedAction);
  });

  it('should create SET_WEIGHT action', () => {
    const weight = '100 tons';
    const expectedAction = {
      type: actions.QuoteRequest.SET_WEIGHT,
      payload: weight
    };

    expect(setWeight(weight)).toEqual(expectedAction);
  });

  it('should create SET_WEIGHT_UNIT action', () => {
    const weightUnit = 'metric tons';
    const expectedAction = {
      type: actions.QuoteRequest.SET_WEIGHT_UNIT,
      payload: weightUnit
    };

    expect(setWeightUnit(weightUnit)).toEqual(expectedAction);
  });

  it('should create SET_PURPOSE action', () => {
    const purpose = 'Regatta';
    const expectedAction = {
      type: actions.QuoteRequest.SET_PURPOSE,
      payload: purpose
    };

    expect(setPurpose(purpose)).toEqual(expectedAction);
  });

  it('should create SET_FROM_WHERE action', () => {
    const fromWhere = 'Irpin';
    const expectedAction = {
      type: actions.QuoteRequest.SET_FROM_WHERE,
      payload: fromWhere
    };

    expect(setFromWhere(fromWhere)).toEqual(expectedAction);
  });

  it('should create SET_TO_WHERE action', () => {
    const toWhere = 'Barcelona';
    const expectedAction = {
      type: actions.QuoteRequest.SET_TO_WHERE,
      payload: toWhere
    };

    expect(setToWhere(toWhere)).toEqual(expectedAction);
  });

  it('should create SET_WHEN action', () => {
    const when = 'today';
    const expectedAction = {
      type: actions.QuoteRequest.SET_WHEN,
      payload: when
    };

    expect(setWhen(when)).toEqual(expectedAction);
  });

  it('should create RESET_QUOTE_REQUEST_FORM action', () => {
    const expectedAction = {
      type: actions.QuoteRequest.RESET_QUOTE_REQUEST_FORM
    };

    expect(resetQuoteRequestForm()).toEqual(expectedAction);
  });

  it('should create RESET_QUOTE_REQUEST_ERRORS action', () => {
    const expectedAction = {
      type: actions.QuoteRequest.RESET_QUOTE_REQUEST_ERRORS
    };

    expect(resetQuoteRequestErrors()).toEqual(expectedAction);
  });

});

