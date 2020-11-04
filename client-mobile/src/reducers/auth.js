import actions from '../constants/action_types';


const emptyUser = {
  name: '',
  email: ''
};
export const initialState = {
  accessToken: null,
  idToken: null,
  expiresAt: null,
  isAuthenticated: false,
  user: emptyUser,
  loading: false,
  auth: {}
};

export default function(state = initialState, action) {
  switch (action.type) {

    case actions.Auth.SET_AUTH: {
      //console.log("actions.Auth.SET_AUTH. payload: ",action.payload);
      return {
        ...state,
        auth: action.payload
      };
    }

    case actions.Auth.SET_USER_CREDENTIALS: {
      //console.log("actions.Auth.SET_USER_CREDENTIALS().  action.payload: ",action.payload);
      return {
        ...state,
        accessToken: action.payload.accessToken,
        idToken: action.payload.idToken,
        expiresAt: action.payload.expiresAt,
        isAuthenticated: true,
        user: {
          ...action.payload.user,
          name: action.payload.user.name,
          email: action.payload.user.email
        },
      }
    }

    case actions.Auth.RESET_USER_CREDENTIALS: return {
      ...state,
      accessToken: null,
      idToken: null,
      expiresAt: null,
      isAuthenticated: false,
      user: {
        name: '',
        email: ''
      },
    }

    default:
      return state;
  }
}
