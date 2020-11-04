import actions from '../constants/action_types';
import reducer, {
  defaultQuoteRequestFormErrorsState,
  defaultQuoteRequestFormState,
  defaultQuoteRequestState
} from './quoteRequest';
import 'raf/polyfill';


describe('QuoteRequest reducer', () => {

  it('QuoteRequest.POST_QUOTE_REQUEST action', () => {
    const action = {
      type: actions.QuoteRequest.POST_QUOTE_REQUEST,
    };

    const expectedState = {
      ...defaultQuoteRequestState,
      isLoading: true
    };

    expect(reducer(defaultQuoteRequestState, action)).toEqual(expectedState);
  });

  it('QuoteRequest.POST_QUOTE_REQUEST_SUCCESS action', () => {
    const action = {
      type: actions.QuoteRequest.POST_QUOTE_REQUEST_SUCCESS,
    };

    const expectedState = {
      ...defaultQuoteRequestState,
      isLoading: false
    };

    expect(reducer(defaultQuoteRequestState, action)).toEqual(expectedState);
  });

  it('QuoteRequest.POST_QUOTE_REQUEST_FAILURE action', () => {
    const formErrors = {
      firstName: 'is required',
      email: 'wrong email'
    }
    const action = {
      type: actions.QuoteRequest.POST_QUOTE_REQUEST_FAILURE,
      payload: formErrors
    };

    const expectedState = {
      ...defaultQuoteRequestState,
      requestErrors: {
        ...defaultQuoteRequestFormErrorsState,
        ...action.payload
      },
      isLoading: false
    };

    expect(reducer(defaultQuoteRequestState, action)).toEqual(expectedState);
  });

  it('QuoteRequest.SET_USER_SELECT_SCHEDULE action', () => {
    const formErrors = {
      fromWhere: 'selected from where port',
      toWhere: 'selected to where port',
      when: 'selected date'
    }
    const action = {
      type: actions.QuoteRequest.SET_USER_SELECT_SCHEDULE,
      payload: formErrors
    };

    const expectedState = {
      ...defaultQuoteRequestState,
      quoteRequest: {
        ...defaultQuoteRequestState.quoteRequest,
        fromWhere: action.payload.fromWhere,
        toWhere: action.payload.toWhere,
        when: action.payload.when
      },
      requestErrors: defaultQuoteRequestFormErrorsState,
      isLoading: false,
    };

    expect(reducer(defaultQuoteRequestState, action)).toEqual(expectedState);
  });

  it('QuoteRequest.SET_FIRST_NAME action', () => {
    const firstName = 'test first name';
    const action = {
      type: actions.QuoteRequest.SET_FIRST_NAME,
      payload: firstName
    };

    const expectedState = {
      ...defaultQuoteRequestState,
      quoteRequest: {
        ...defaultQuoteRequestState.quoteRequest,
        firstName: action.payload
      },
      requestErrors: {
        ...defaultQuoteRequestState.requestErrors,
        firstName: ''
      }
    };

    expect(reducer(defaultQuoteRequestState, action)).toEqual(expectedState);
  });

  it('QuoteRequest.SET_FIRST_NAME_ERROR action', () => {
    const firstNameError = 'test first name error';
    const action = {
      type: actions.QuoteRequest.SET_FIRST_NAME_ERROR,
      payload: firstNameError
    };

    const expectedState = {
      ...defaultQuoteRequestState,
      requestErrors: {
        ...defaultQuoteRequestState.requestErrors,
        firstName: action.payload
      }
    };

    expect(reducer(defaultQuoteRequestState, action)).toEqual(expectedState);
  });

  it('QuoteRequest.SET_LAST_NAME action', () => {
    const lastName = 'test last name';
    const action = {
      type: actions.QuoteRequest.SET_LAST_NAME,
      payload: lastName
    };

    const expectedState = {
      ...defaultQuoteRequestState,
      quoteRequest: {
        ...defaultQuoteRequestState.quoteRequest,
        lastName: action.payload
      },
      requestErrors: {
        ...defaultQuoteRequestState.requestErrors,
        lastName: ''
      }
    };

    expect(reducer(defaultQuoteRequestState, action)).toEqual(expectedState);
  });

  it('QuoteRequest.SET_LAST_NAME_ERROR action', () => {
    const lastNameError = 'test last name error';
    const action = {
      type: actions.QuoteRequest.SET_LAST_NAME_ERROR,
      payload: lastNameError
    };

    const expectedState = {
      ...defaultQuoteRequestState,
      requestErrors: {
        ...defaultQuoteRequestState.requestErrors,
        lastName: action.payload
      }
    };

    expect(reducer(defaultQuoteRequestState, action)).toEqual(expectedState);
  });

  it('QuoteRequest.SET_PHONE_NUMBER action', () => {
    const phoneNumber = 'test phoneNumber';
    const action = {
      type: actions.QuoteRequest.SET_PHONE_NUMBER,
      payload: phoneNumber
    };

    const expectedState = {
      ...defaultQuoteRequestState,
      quoteRequest: {
        ...defaultQuoteRequestState.quoteRequest,
        phoneNumber: action.payload
      },
      requestErrors: {
        ...defaultQuoteRequestState.requestErrors,
        phoneNumber: ''
      }
    };

    expect(reducer(defaultQuoteRequestState, action)).toEqual(expectedState);
  });

  it('QuoteRequest.SET_PHONE_NUMBER_ERROR action', () => {
    const phoneNumberError = 'test phone number error';
    const action = {
      type: actions.QuoteRequest.SET_PHONE_NUMBER_ERROR,
      payload: phoneNumberError
    };

    const expectedState = {
      ...defaultQuoteRequestState,
      requestErrors: {
        ...defaultQuoteRequestState.requestErrors,
        phoneNumber: action.payload
      }
    };

    expect(reducer(defaultQuoteRequestState, action)).toEqual(expectedState);
  });

  it('QuoteRequest.SET_EMAIL action', () => {
    const email = 'test@email.com';
    const action = {
      type: actions.QuoteRequest.SET_EMAIL,
      payload: email
    };

    const expectedState = {
      ...defaultQuoteRequestState,
      quoteRequest: {
        ...defaultQuoteRequestState.quoteRequest,
        email: action.payload
      },
      requestErrors: {
        ...defaultQuoteRequestState.requestErrors,
        email: ''
      }
    };

    expect(reducer(defaultQuoteRequestState, action)).toEqual(expectedState);
  });

  it('QuoteRequest.SET_EMAIL_ERROR action', () => {
    const emailError = 'test emailerror';
    const action = {
      type: actions.QuoteRequest.SET_EMAIL_ERROR,
      payload: emailError
    };

    const expectedState = {
      ...defaultQuoteRequestState,
      requestErrors: {
        ...defaultQuoteRequestState.requestErrors,
        email: action.payload
      }
    };

    expect(reducer(defaultQuoteRequestState, action)).toEqual(expectedState);
  });

  it('QuoteRequest.SET_BEST_TIME_TO_CONTACT action', () => {
    const bestTimeToContact = 'now';
    const action = {
      type: actions.QuoteRequest.SET_BEST_TIME_TO_CONTACT,
      payload: bestTimeToContact
    };

    const expectedState = {
      ...defaultQuoteRequestState,
      quoteRequest: {
        ...defaultQuoteRequestState.quoteRequest,
        bestTimeToContact: action.payload
      },
      requestErrors: {
        ...defaultQuoteRequestState.requestErrors,
        bestTimeToContact: ''
      }
    };

    expect(reducer(defaultQuoteRequestState, action)).toEqual(expectedState);
  });

  it('QuoteRequest.SET_YACHT_MODEL action', () => {
    const yachtModel = 'Super-Puper';
    const action = {
      type: actions.QuoteRequest.SET_YACHT_MODEL,
      payload: yachtModel
    };

    const expectedState = {
      ...defaultQuoteRequestState,
      quoteRequest: {
        ...defaultQuoteRequestState.quoteRequest,
        yachtModel: action.payload
      },
      requestErrors: {
        ...defaultQuoteRequestState.requestErrors,
        yachtModel: ''
      }
    };

    expect(reducer(defaultQuoteRequestState, action)).toEqual(expectedState);
  });

  it('QuoteRequest.SET_YEAR action', () => {
    const year = '2020';
    const action = {
      type: actions.QuoteRequest.SET_YEAR,
      payload: year
    };

    const expectedState = {
      ...defaultQuoteRequestState,
      quoteRequest: {
        ...defaultQuoteRequestState.quoteRequest,
        year: action.payload
      },
      requestErrors: {
        ...defaultQuoteRequestState.requestErrors,
        year: ''
      }
    };

    expect(reducer(defaultQuoteRequestState, action)).toEqual(expectedState);
  });

  it('QuoteRequest.SET_LENGTH action', () => {
    const length = '180';
    const action = {
      type: actions.QuoteRequest.SET_LENGTH,
      payload: length
    };

    const expectedState = {
      ...defaultQuoteRequestState,
      quoteRequest: {
        ...defaultQuoteRequestState.quoteRequest,
        length: action.payload
      },
      requestErrors: {
        ...defaultQuoteRequestState.requestErrors,
        length: ''
      }
    };

    expect(reducer(defaultQuoteRequestState, action)).toEqual(expectedState);
  });

  it('QuoteRequest.SET_LENGTH_UNIT action', () => {
    const lengthUnit = 'meters';
    const action = {
      type: actions.QuoteRequest.SET_LENGTH_UNIT,
      payload: lengthUnit
    };

    const expectedState = {
      ...defaultQuoteRequestState,
      quoteRequest: {
        ...defaultQuoteRequestState.quoteRequest,
        lengthUnit: action.payload
      },
      requestErrors: {
        ...defaultQuoteRequestState.requestErrors,
        lengthUnit: ''
      }
    };

    expect(reducer(defaultQuoteRequestState, action)).toEqual(expectedState);
  });

  it('QuoteRequest.SET_BEAM action', () => {
    const beam = '20';
    const action = {
      type: actions.QuoteRequest.SET_BEAM,
      payload: beam
    };

    const expectedState = {
      ...defaultQuoteRequestState,
      quoteRequest: {
        ...defaultQuoteRequestState.quoteRequest,
        beam: action.payload
      },
      requestErrors: {
        ...defaultQuoteRequestState.requestErrors,
        beam: ''
      }
    };

    expect(reducer(defaultQuoteRequestState, action)).toEqual(expectedState);
  });

  it('QuoteRequest.SET_BEAM_UNIT action', () => {
    const beamUnit = 'meters';
    const action = {
      type: actions.QuoteRequest.SET_BEAM_UNIT,
      payload: beamUnit
    };

    const expectedState = {
      ...defaultQuoteRequestState,
      quoteRequest: {
        ...defaultQuoteRequestState.quoteRequest,
        beamUnit: action.payload
      },
      requestErrors: {
        ...defaultQuoteRequestState.requestErrors,
        beamUnit: ''
      }
    };

    expect(reducer(defaultQuoteRequestState, action)).toEqual(expectedState);
  });


  it('QuoteRequest.SET_WEIGHT action', () => {
    const weight = 'meters';
    const action = {
      type: actions.QuoteRequest.SET_WEIGHT,
      payload: weight
    };

    const expectedState = {
      ...defaultQuoteRequestState,
      quoteRequest: {
        ...defaultQuoteRequestState.quoteRequest,
        weight: action.payload
      },
      requestErrors: {
        ...defaultQuoteRequestState.requestErrors,
        weight: ''
      }
    };

    expect(reducer(defaultQuoteRequestState, action)).toEqual(expectedState);
  });


  it('QuoteRequest.SET_WEIGHT_UNIT action', () => {
    const weightUnit = 'metric tons';
    const action = {
      type: actions.QuoteRequest.SET_WEIGHT_UNIT,
      payload: weightUnit
    };

    const expectedState = {
      ...defaultQuoteRequestState,
      quoteRequest: {
        ...defaultQuoteRequestState.quoteRequest,
        weightUnit: action.payload
      },
      requestErrors: {
        ...defaultQuoteRequestState.requestErrors,
        weightUnit: ''
      }
    };

    expect(reducer(defaultQuoteRequestState, action)).toEqual(expectedState);
  });

  it('QuoteRequest.SET_PURPOSE action', () => {
    const purpose = 'Regatta';
    const action = {
      type: actions.QuoteRequest.SET_PURPOSE,
      payload: purpose
    };

    const expectedState = {
      ...defaultQuoteRequestState,
      quoteRequest: {
        ...defaultQuoteRequestState.quoteRequest,
        purpose: action.payload
      },
      requestErrors: {
        ...defaultQuoteRequestState.requestErrors,
        purpose: ''
      }
    };

    expect(reducer(defaultQuoteRequestState, action)).toEqual(expectedState);
  });

  it('QuoteRequest.SET_FROM_WHERE action', () => {
    const fromWhere = 'Regattta';
    const action = {
      type: actions.QuoteRequest.SET_FROM_WHERE,
      payload: fromWhere
    };

    const expectedState = {
      ...defaultQuoteRequestState,
      quoteRequest: {
        ...defaultQuoteRequestState.quoteRequest,
        fromWhere: action.payload
      },
      requestErrors: {
        ...defaultQuoteRequestState.requestErrors,
        fromWhere: ''
      }
    };

    expect(reducer(defaultQuoteRequestState, action)).toEqual(expectedState);
  });

  it('QuoteRequest.SET_TO_WHERE action', () => {
    const toWhere = 'Regattta';
    const action = {
      type: actions.QuoteRequest.SET_TO_WHERE,
      payload: toWhere
    };

    const expectedState = {
      ...defaultQuoteRequestState,
      quoteRequest: {
        ...defaultQuoteRequestState.quoteRequest,
        toWhere: action.payload
      },
      requestErrors: {
        ...defaultQuoteRequestState.requestErrors,
        toWhere: ''
      }
    };

    expect(reducer(defaultQuoteRequestState, action)).toEqual(expectedState);
  });

  it('QuoteRequest.SET_WHEN action', () => {
    const when = 'Regattta';
    const action = {
      type: actions.QuoteRequest.SET_WHEN,
      payload: when
    };

    const expectedState = {
      ...defaultQuoteRequestState,
      quoteRequest: {
        ...defaultQuoteRequestState.quoteRequest,
        when: action.payload
      },
      requestErrors: {
        ...defaultQuoteRequestState.requestErrors,
        when: ''
      }
    };

    expect(reducer(defaultQuoteRequestState, action)).toEqual(expectedState);
  });

  it('QuoteRequest.RESET_QUOTE_REQUEST_FORM action', () => {
    const action = {
      type: actions.QuoteRequest.RESET_QUOTE_REQUEST_FORM
    };

    const expectedState = {
      ...defaultQuoteRequestState,
      quoteRequest: defaultQuoteRequestFormState,
      requestErrors: defaultQuoteRequestFormErrorsState
    };

    expect(reducer(defaultQuoteRequestState, action)).toEqual(expectedState);
  });

  it('QuoteRequest.RESET_QUOTE_REQUEST_ERRORS action', () => {
    const action = {
      type: actions.QuoteRequest.RESET_QUOTE_REQUEST_ERRORS
    };

    const expectedState = {
      ...defaultQuoteRequestState,
      requestErrors: defaultQuoteRequestFormErrorsState
    };

    expect(reducer(defaultQuoteRequestState, action)).toEqual(expectedState);
  });

});

