import actions from '../constants/action_types';
import { LENGTH_METRIC, WEIGHT_METRIC } from '../constants/user_defined'


export const defaultQuoteRequestFormState = {
  firstName: '',
  lastName: '',
  phoneNumber: '',
  email: '',
  bestTimeToContact: '',
  yachtModel: '',
  year: '',
  length: '',
  lengthUnit: LENGTH_METRIC.meters,
  beam: '',
  beamUnit: LENGTH_METRIC.meters,
  weight: '',
  weightUnit: WEIGHT_METRIC.metricTons,
  purpose: '',
  fromWhere: '',
  toWhere: '',
  when: ''
};
export const defaultQuoteRequestFormErrorsState = {
  firstName: '',
  lastName: '',
  phoneNumber: '',
  email: '',
  bestTimeToContact: '',
  yachtModel: '',
  year: '',
  length: '',
  lengthUnit: '',
  beam: '',
  beamUnit: '',
  weight: '',
  weightUnit: '',
  purpose: '',
  fromWhere: '',
  toWhere: '',
  when: ''
};
export const defaultQuoteRequestState = {
  quoteRequest: defaultQuoteRequestFormState,
  requestErrors: defaultQuoteRequestFormErrorsState,
  isLoading: false,
};

export const defaultState = defaultQuoteRequestState;

const reducer = (state = defaultState, action) => {

  switch (action.type) {

    case actions.QuoteRequest.POST_QUOTE_REQUEST: {
      const newState = {
        ...state,
        isLoading: true
      };
      return newState;
    }

    case actions.QuoteRequest.POST_QUOTE_REQUEST_SUCCESS: {
      const newState = {
        ...state,
        isLoading: false,
      };
      return newState;
    }

    case actions.QuoteRequest.POST_QUOTE_REQUEST_FAILURE: {
      const newState = {
        ...state,
        requestErrors: {
          ...defaultQuoteRequestFormErrorsState,
          ...action.payload
        },
        isLoading: false,
      };
      return newState;
    }

    case actions.QuoteRequest.SET_USER_SELECT_SCHEDULE: {
      const newState = {
        ...state,
        quoteRequest: {
          ...state.quoteRequest,
          fromWhere: action.payload.fromWhere,
          toWhere: action.payload.toWhere,
          when: action.payload.when
        },
        requestErrors: defaultQuoteRequestFormErrorsState,
        isLoading: false,
      };
      return newState;
    }

    case actions.QuoteRequest.SET_FIRST_NAME: {
      const newState = {
        ...state,
        quoteRequest: {
          ...state.quoteRequest,
          firstName: action.payload
        },
        requestErrors: {
          ...state.requestErrors,
          firstName: ''
        }
      };
      return newState;
    }

    case actions.QuoteRequest.SET_FIRST_NAME_ERROR: {
      const newState = {
        ...state,
        requestErrors: {
          ...state.requestErrors,
          firstName: action.payload
        }
      };
      return newState;
    }

    case actions.QuoteRequest.SET_LAST_NAME: {
      const newState = {
        ...state,
        quoteRequest: {
          ...state.quoteRequest,
          lastName: action.payload
        },
        requestErrors: {
          ...state.requestErrors,
          lastName: ''
        }
      };
      return newState;
    }

    case actions.QuoteRequest.SET_LAST_NAME_ERROR: {
      const newState = {
        ...state,
        requestErrors: {
          ...state.requestErrors,
          lastName: action.payload
        }
      };
      return newState;
    }

    case actions.QuoteRequest.SET_PHONE_NUMBER: {
      const newState = {
        ...state,
        quoteRequest: {
          ...state.quoteRequest,
          phoneNumber: action.payload
        },
        requestErrors: {
          ...state.requestErrors,
          phoneNumber: ''
        }
      };
      return newState;
    }

    case actions.QuoteRequest.SET_PHONE_NUMBER_ERROR: {
      const newState = {
        ...state,
        requestErrors: {
          ...state.requestErrors,
          phoneNumber: action.payload
        }
      };
      return newState;
    }

    case actions.QuoteRequest.SET_EMAIL: {
      const newState = {
        ...state,
        quoteRequest: {
          ...state.quoteRequest,
          email: action.payload
        },
        requestErrors: {
          ...state.requestErrors,
          email: ''
        }
      };
      return newState;
    }

    case actions.QuoteRequest.SET_EMAIL_ERROR: {
      const newState = {
        ...state,
        requestErrors: {
          ...state.requestErrors,
          email: action.payload
        }
      };
      return newState;
    }

    case actions.QuoteRequest.SET_BEST_TIME_TO_CONTACT: {
      const newState = {
        ...state,
        quoteRequest: {
          ...state.quoteRequest,
          bestTimeToContact: action.payload
        },
        requestErrors: {
          ...state.requestErrors,
          bestTimeToContact: ''
        }
      };
      return newState;
    }

    case actions.QuoteRequest.SET_YACHT_MODEL: {
      const newState = {
        ...state,
        quoteRequest: {
          ...state.quoteRequest,
          yachtModel: action.payload
        },
        requestErrors: {
          ...state.requestErrors,
          yachtModel: ''
        }
      };
      return newState;
    }

    case actions.QuoteRequest.SET_YEAR: {
      const newState = {
        ...state,
        quoteRequest: {
          ...state.quoteRequest,
          year: action.payload
        },
        requestErrors: {
          ...state.requestErrors,
          year: ''
        }
      };
      return newState;
    }

    case actions.QuoteRequest.SET_LENGTH: {
      const newState = {
        ...state,
        quoteRequest: {
          ...state.quoteRequest,
          length: action.payload
        },
        requestErrors: {
          ...state.requestErrors,
          length: ''
        }
      };
      return newState;
    }

    case actions.QuoteRequest.SET_LENGTH_UNIT: {
      const newState = {
        ...state,
        quoteRequest: {
          ...state.quoteRequest,
          lengthUnit: action.payload
        },
        requestErrors: {
          ...state.requestErrors,
          lengthUnit: ''
        }
      };
      return newState;
    }

    case actions.QuoteRequest.SET_BEAM: {
      const newState = {
        ...state,
        quoteRequest: {
          ...state.quoteRequest,
          beam: action.payload
        },
        requestErrors: {
          ...state.requestErrors,
          beam: ''
        }
      };
      return newState;
    }

   case actions.QuoteRequest.SET_BEAM_UNIT: {
      const newState = {
        ...state,
        quoteRequest: {
          ...state.quoteRequest,
          beamUnit: action.payload
        },
        requestErrors: {
          ...state.requestErrors,
          beamUnit: ''
        }
      };
      return newState;
    }

    case actions.QuoteRequest.SET_WEIGHT: {
      const newState = {
        ...state,
        quoteRequest: {
          ...state.quoteRequest,
          weight: action.payload
        },
        requestErrors: {
          ...state.requestErrors,
          weight: ''
        }
      };
      return newState;
    }

    case actions.QuoteRequest.SET_WEIGHT_UNIT: {
      const newState = {
        ...state,
        quoteRequest: {
          ...state.quoteRequest,
          weightUnit: action.payload
        },
        requestErrors: {
          ...state.requestErrors,
          weightUnit: ''
        }
      };
      return newState;
    }

    case actions.QuoteRequest.SET_PURPOSE: {
      const newState = {
        ...state,
        quoteRequest: {
          ...state.quoteRequest,
          purpose: action.payload
        },
        requestErrors: {
          ...state.requestErrors,
          purpose: ''
        }
      };
      return newState;
    }

    case actions.QuoteRequest.SET_FROM_WHERE: {
      const newState = {
        ...state,
        quoteRequest: {
          ...state.quoteRequest,
          fromWhere: action.payload
        },
        requestErrors: {
          ...state.requestErrors,
          fromWhere: ''
        }
      };
      return newState;
    }

    case actions.QuoteRequest.SET_TO_WHERE: {
      const newState = {
        ...state,
        quoteRequest: {
          ...state.quoteRequest,
          toWhere: action.payload
        },
        requestErrors: {
          ...state.requestErrors,
          toWhere: ''
        }
      };
      return newState;
    }

    case actions.QuoteRequest.SET_WHEN: {
      const newState = {
        ...state,
        quoteRequest: {
          ...state.quoteRequest,
          when: action.payload
        },
        requestErrors: {
          ...state.requestErrors,
          when: ''
        }
      };
      return newState;
    }

    case actions.QuoteRequest.RESET_QUOTE_REQUEST_FORM: {
      const newState = {
        ...state,
        quoteRequest: defaultQuoteRequestFormState,
        requestErrors: defaultQuoteRequestFormErrorsState
      };
      return newState;
    }

    case actions.QuoteRequest.RESET_QUOTE_REQUEST_ERRORS: {
      const newState = {
        ...state,
        requestErrors: defaultQuoteRequestFormErrorsState
      };
      return newState;
    }

    default: return state;
  }

};

export default reducer;
