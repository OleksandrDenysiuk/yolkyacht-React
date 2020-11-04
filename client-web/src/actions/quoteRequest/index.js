import actions from '../../constants/action_types'

export * from './api.js';


export const setUserSelectSchedule = (data) => ({
  type: actions.QuoteRequest.SET_USER_SELECT_SCHEDULE,
  payload: data
});

export const setFirstName = (firstName) => ({
  type: actions.QuoteRequest.SET_FIRST_NAME,
  payload: firstName
});

export const setFirstNameError = (data) => ({
  type: actions.QuoteRequest.SET_FIRST_NAME_ERROR,
  payload: data
});

export const setLastName = (lastName) => ({
  type: actions.QuoteRequest.SET_LAST_NAME,
  payload: lastName
});

export const setLastNameError = (data) => ({
  type: actions.QuoteRequest.SET_LAST_NAME_ERROR,
  payload: data
});

export const setPhoneNumber = (phoneNumber) => ({
  type: actions.QuoteRequest.SET_PHONE_NUMBER,
  payload: phoneNumber
});

export const setPhoneNumberError = (data) => ({
  type: actions.QuoteRequest.SET_PHONE_NUMBER_ERROR,
  payload: data
});

export const setEmail = (email) => ({
  type: actions.QuoteRequest.SET_EMAIL,
  payload: email
});

export const setEmailError = (data) => ({
  type: actions.QuoteRequest.SET_EMAIL_ERROR,
  payload: data
});

export const setBestTimeToContact = (bestTimeToContact) => ({
  type: actions.QuoteRequest.SET_BEST_TIME_TO_CONTACT,
  payload: bestTimeToContact
});

export const setYachtModel= (yachtModel) => ({
  type: actions.QuoteRequest.SET_YACHT_MODEL,
  payload: yachtModel
});

export const setYear= (year) => ({
  type: actions.QuoteRequest.SET_YEAR,
  payload: year
});

export const setLength= (length) => ({
  type: actions.QuoteRequest.SET_LENGTH,
  payload: length
});

export const setLengthUnit= (lengthUnit) => ({
  type: actions.QuoteRequest.SET_LENGTH_UNIT,
  payload: lengthUnit
});

export const setBeam = (beam) => ({
  type: actions.QuoteRequest.SET_BEAM,
  payload: beam
});

export const setBeamUnit = (beamUnit) => ({
  type: actions.QuoteRequest.SET_BEAM_UNIT,
  payload: beamUnit
});

export const setWeight = (weight) => ({
  type: actions.QuoteRequest.SET_WEIGHT,
  payload: weight
});

export const setWeightUnit = (weightUnit) => ({
  type: actions.QuoteRequest.SET_WEIGHT_UNIT,
  payload: weightUnit
});

export const setPurpose = (purpose) => ({
  type: actions.QuoteRequest.SET_PURPOSE,
  payload: purpose
});

export const setFromWhere = (fromWhere) => ({
  type: actions.QuoteRequest.SET_FROM_WHERE,
  payload: fromWhere
});

export const setToWhere = (toWhere) => ({
  type: actions.QuoteRequest.SET_TO_WHERE,
  payload: toWhere
});

export const setWhen = (when) => ({
  type: actions.QuoteRequest.SET_WHEN,
  payload: when
});

export const resetQuoteRequestForm = () => ({
  type: actions.QuoteRequest.RESET_QUOTE_REQUEST_FORM
});

export const resetQuoteRequestErrors = () => ({
  type: actions.QuoteRequest.RESET_QUOTE_REQUEST_ERRORS
});
