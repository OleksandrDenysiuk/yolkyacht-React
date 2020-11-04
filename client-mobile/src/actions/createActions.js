import { failureAction, successAction } from '../constants/utils';

export const createAction = (actionType, payload) => ({
  type: actionType,
  payload
});

export const createSuccessAction = (actionType, payload) => ({
  type: successAction(actionType),
  payload,
});

export const createFailureAction = (actionType, payload) => ({
  type: failureAction(actionType),
  error: true,
  payload,
});

