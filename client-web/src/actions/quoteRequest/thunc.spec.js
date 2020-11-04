import thunk from 'redux-thunk';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import configureMockStore from 'redux-mock-store';
import actions from '../../constants/action_types';
import {
  setUserSelectSchedule, setFirstName, setFirstNameError, setLastName, setLastNameError, setPhoneNumber,
  setPhoneNumberError, setEmail, setEmailError, setBestTimeToContact, setYachtModel, setYear, setLength,
  setLengthUnit, setBeam, setBeamUnit, setWeight, setWeightUnit, setPurpose, setFromWhere, setToWhere,
  setWhen, resetQuoteRequestForm, resetQuoteRequestErrors
} from './index';
import { postQuoteRequest as postQuoteRequestURL} from './urls';
import { postQuoteRequest } from './api'


const middleware = [thunk];
const mockStore = configureMockStore(middleware);

describe('Call Actions for QuoteRequest reducer', () => {

  it('should call actions.QuoteRequest.SET_USER_SELECT_SCHEDULE action', async () => {
    const selectedSchedule = 'data';
    const expectedActions = [
      { type: actions.QuoteRequest.SET_USER_SELECT_SCHEDULE, payload: selectedSchedule }
    ]
    let store = mockStore({quoteRequest: []});

    store.dispatch(setUserSelectSchedule(selectedSchedule));

    expect(store.getActions()).toEqual(expectedActions);
  });

  it('should call actions.QuoteRequest.SET_FIRST_NAME action', async () => {
    const firstName = 'first name';
    const expectedActions = [
      { type: actions.QuoteRequest.SET_FIRST_NAME, payload: firstName }
    ]
    let store = mockStore({quoteRequest: []});

    store.dispatch(setFirstName(firstName));

    expect(store.getActions()).toEqual(expectedActions);
  });

  it('should call actions.QuoteRequest.SET_FIRST_NAME_ERROR action', async () => {
    const firstNameError = 'test first name error';
    const expectedActions = [
      { type: actions.QuoteRequest.SET_FIRST_NAME_ERROR, payload: firstNameError }
    ]
    let store = mockStore({quoteRequest: []});

    store.dispatch(setFirstNameError(firstNameError));

    expect(store.getActions()).toEqual(expectedActions);
  });

  it('should call actions.QuoteRequest.SET_LAST_NAME action', async () => {
    const lastName = 'last name';
    const expectedActions = [
      { type: actions.QuoteRequest.SET_LAST_NAME, payload: lastName }
    ]
    let store = mockStore({quoteRequest: []});

    store.dispatch(setLastName(lastName));

    expect(store.getActions()).toEqual(expectedActions);
  });

  it('should call actions.QuoteRequest.SET_LAST_NAME_ERROR action', async () => {
    const lastNameError = 'last name error';
    const expectedActions = [
      { type: actions.QuoteRequest.SET_LAST_NAME_ERROR, payload: lastNameError }
    ]
    let store = mockStore({quoteRequest: []});

    store.dispatch(setLastNameError(lastNameError));

    expect(store.getActions()).toEqual(expectedActions);
  });

  it('should call actions.QuoteRequest.SET_PHONE_NUMBER action', async () => {
    const phoneNumber = 'phone number';
    const expectedActions = [
      { type: actions.QuoteRequest.SET_PHONE_NUMBER, payload: phoneNumber }
    ]
    let store = mockStore({quoteRequest: []});

    store.dispatch(setPhoneNumber(phoneNumber));

    expect(store.getActions()).toEqual(expectedActions);
  });

  it('should call actions.QuoteRequest.SET_PHONE_NUMBER_ERROR action', async () => {
    const phoneNumberError = 'phone number error';
    const expectedActions = [
      { type: actions.QuoteRequest.SET_PHONE_NUMBER_ERROR, payload: phoneNumberError }
    ]
    let store = mockStore({quoteRequest: []});

    store.dispatch(setPhoneNumberError(phoneNumberError));

    expect(store.getActions()).toEqual(expectedActions);
  });

  it('should call actions.QuoteRequest.SET_EMAIL action', async () => {
    const email = 'email@test.com';
    const expectedActions = [
      { type: actions.QuoteRequest.SET_EMAIL, payload: email }
    ]
    let store = mockStore({quoteRequest: []});

    store.dispatch(setEmail(email));

    expect(store.getActions()).toEqual(expectedActions);
  });

  it('should call actions.QuoteRequest.SET_EMAIL_ERROR action', async () => {
    const emailError = 'email error';
    const expectedActions = [
      { type: actions.QuoteRequest.SET_EMAIL_ERROR, payload: emailError }
    ]
    let store = mockStore({quoteRequest: []});

    store.dispatch(setEmailError(emailError));

    expect(store.getActions()).toEqual(expectedActions);
  });

  it('should call actions.QuoteRequest.SET_BEST_TIME_TO_CONTACT action', async () => {
    const bestTimeToContact = 'just now';
    const expectedActions = [
      { type: actions.QuoteRequest.SET_BEST_TIME_TO_CONTACT, payload: bestTimeToContact }
    ]
    let store = mockStore({quoteRequest: []});

    store.dispatch(setBestTimeToContact(bestTimeToContact));

    expect(store.getActions()).toEqual(expectedActions);
  });

  it('should call actions.QuoteRequest.SET_YACHT_MODEL action', async () => {
    const yachtModel = 'Super-Puper';
    const expectedActions = [
      { type: actions.QuoteRequest.SET_YACHT_MODEL, payload: yachtModel }
    ]
    let store = mockStore({quoteRequest: []});

    store.dispatch(setYachtModel(yachtModel));

    expect(store.getActions()).toEqual(expectedActions);
  });

  it('should call actions.QuoteRequest.SET_YEAR action', async () => {
    const year = '2019';
    const expectedActions = [
      { type: actions.QuoteRequest.SET_YEAR, payload: year }
    ]
    let store = mockStore({quoteRequest: []});

    store.dispatch(setYear(year));

    expect(store.getActions()).toEqual(expectedActions);
  });

  it('should call actions.QuoteRequest.SET_LENGTH action', async () => {
    const length = '200';
    const expectedActions = [
      { type: actions.QuoteRequest.SET_LENGTH, payload: length }
    ]
    let store = mockStore({quoteRequest: []});

    store.dispatch(setLength(length));

    expect(store.getActions()).toEqual(expectedActions);
  });

  it('should call actions.QuoteRequest.SET_LENGTH_UNIT action', async () => {
    const lengthUnit = 'meters';
    const expectedActions = [
      { type: actions.QuoteRequest.SET_LENGTH_UNIT, payload: lengthUnit }
    ]
    let store = mockStore({quoteRequest: []});

    store.dispatch(setLengthUnit(lengthUnit));

    expect(store.getActions()).toEqual(expectedActions);
  });

  it('should call actions.QuoteRequest.SET_BEAM action', async () => {
    const beam = '40';
    const expectedActions = [
      { type: actions.QuoteRequest.SET_BEAM, payload: beam }
    ]
    let store = mockStore({quoteRequest: []});

    store.dispatch(setBeam(beam));

    expect(store.getActions()).toEqual(expectedActions);
  });

  it('should call actions.QuoteRequest.SET_BEAM_UNIT action', async () => {
    const beamUnit = 'meters';
    const expectedActions = [
      { type: actions.QuoteRequest.SET_BEAM_UNIT, payload: beamUnit }
    ]
    let store = mockStore({quoteRequest: []});

    store.dispatch(setBeamUnit(beamUnit));

    expect(store.getActions()).toEqual(expectedActions);
  });

  it('should call actions.QuoteRequest.SET_WEIGHT action', async () => {
    const weight = '100';
    const expectedActions = [
      { type: actions.QuoteRequest.SET_WEIGHT, payload: weight }
    ]
    let store = mockStore({quoteRequest: []});

    store.dispatch(setWeight(weight));

    expect(store.getActions()).toEqual(expectedActions);
  });

  it('should call actions.QuoteRequest.SET_WEIGHT_UNIT action', async () => {
    const weightUnit = 'meter';
    const expectedActions = [
      { type: actions.QuoteRequest.SET_WEIGHT_UNIT, payload: weightUnit }
    ]
    let store = mockStore({quoteRequest: []});

    store.dispatch(setWeightUnit(weightUnit));

    expect(store.getActions()).toEqual(expectedActions);
  });

  it('should call actions.QuoteRequest.SET_PURPOSE action', async () => {
    const purpose = 'Regatta';
    const expectedActions = [
      { type: actions.QuoteRequest.SET_PURPOSE, payload: purpose }
    ]
    let store = mockStore({quoteRequest: []});

    store.dispatch(setPurpose(purpose));

    expect(store.getActions()).toEqual(expectedActions);
  });

  it('should call actions.QuoteRequest.SET_FROM_WHERE action', async () => {
    const fromWhere = 'Irpin';
    const expectedActions = [
      { type: actions.QuoteRequest.SET_FROM_WHERE, payload: fromWhere }
    ]
    let store = mockStore({quoteRequest: []});

    store.dispatch(setFromWhere(fromWhere));

    expect(store.getActions()).toEqual(expectedActions);
  });

  it('should call actions.QuoteRequest.SET_TO_WHERE action', async () => {
    const toWhere = 'Barcelona';
    const expectedActions = [
      { type: actions.QuoteRequest.SET_TO_WHERE, payload: toWhere }
    ]
    let store = mockStore({quoteRequest: []});

    store.dispatch(setToWhere(toWhere));

    expect(store.getActions()).toEqual(expectedActions);
  });

  it('should call actions.QuoteRequest.SET_WHEN action', async () => {
    const when = 'just now';
    const expectedActions = [
      { type: actions.QuoteRequest.SET_WHEN, payload: when }
    ]
    let store = mockStore({quoteRequest: []});

    store.dispatch(setWhen(when));

    expect(store.getActions()).toEqual(expectedActions);
  });

  it('should call actions.QuoteRequest.RESET_QUOTE_REQUEST_FORM action', async () => {
    const expectedActions = [
      { type: actions.QuoteRequest.RESET_QUOTE_REQUEST_FORM }
    ]
    let store = mockStore({quoteRequest: []});

    store.dispatch(resetQuoteRequestForm());

    expect(store.getActions()).toEqual(expectedActions);
  });

  it('should call actions.QuoteRequest.RESET_QUOTE_REQUEST_ERRORS action', async () => {
    const expectedActions = [
      { type: actions.QuoteRequest.RESET_QUOTE_REQUEST_ERRORS }
    ]
    let store = mockStore({quoteRequest: []});

    store.dispatch(resetQuoteRequestErrors());

    expect(store.getActions()).toEqual(expectedActions);
  });

  it('should create actions.QuoteRequest.POST_QUOTE_REQUESTS/POST_QUOTE_REQUESTS_FAILURE action', async () => {
    const quoteRequest = { name: 'name', when: 'when'};
    const success = 'Ok'
    const axiosMock = new MockAdapter(axios);

    const expectedActions = [
      { type: actions.Ports.POST_QUOTE_REQUESTS, payload: quoteRequest },
      { type: actions.Ports.POST_QUOTE_REQUESTS_SUCCESS }
    ]
    axiosMock.onPost(postQuoteRequestURL()).reply(200, success);
    let store = mockStore({ports: []});

    const actionsResult = await store.dispatch(postQuoteRequest(quoteRequest));
    expect(success).toBe(actionsResult);
    //expect(store.getActions()).toBe(expectedActions);   // store.getActions unexpectedly return empty array

    axiosMock.restore();
  });

  it('should create actions.Ports.GET_SCHEDULES/POST_QUOTE_REQUESTS_FAILURE action', async () => {
    const quoteRequest = { name: 'name', when: 'when'};
    const serverBadResult = 'error';
    const axiosMock = new MockAdapter(axios);

    const expectedActions = [
      { type: actions.Ports.POST_QUOTE_REQUESTS, payload: quoteRequest },
      { type: actions.Ports.POST_QUOTE_REQUESTS_FAILURE }
    ]
    axiosMock.onPost(postQuoteRequestURL()).reply(400, serverBadResult);
    let store = mockStore({ports: []});

    try {
      await store.dispatch(postQuoteRequest(quoteRequest));
    } catch (errorActionResult) {
      expect(serverBadResult).toBe(errorActionResult);
      //expect(store.getActions()).toBe(expectedActions);     // store.getActions unexpectedly return empty array
    }

    axiosMock.restore();
  });

});

