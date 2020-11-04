import client from '../client';
import * as urls from './urls';
import actions from '../../constants/action_types';


export const postQuoteRequest = (data) => () => {
  return client.post(urls.postQuoteRequest(), actions.QuoteRequest.POST_QUOTE_REQUEST, data);
};

