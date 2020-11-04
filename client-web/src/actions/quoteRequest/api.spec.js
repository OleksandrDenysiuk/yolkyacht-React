import actions from '../../constants/action_types';
import client from '../client';
import { postQuoteRequest } from './api';
import { postQuoteRequest as postQuoteRequestURL  } from './urls';


describe('Ports reducer API call actions', () => {

  client.get = jest.fn();
  client.post = jest.fn();

  it('should call client with QuoteRequest.POST_QUOTE_REQUEST action', () => {
    postQuoteRequest()();

    expect(client.post.mock.calls.length).toBe(1);
    expect(client.post.mock.calls[0][0]).toBe(postQuoteRequestURL());
    expect(client.post.mock.calls[0][1]).toBe(actions.QuoteRequest.POST_QUOTE_REQUEST);
  });

});

