import client from './client';
import * as createActionModule from './createActions';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';


describe('Axios client', () => {

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should call client GET action with success result', async () => {
    const axiosMock = new MockAdapter(axios);
    const createActionSpy = jest.spyOn(createActionModule, 'createAction');
    const createSuccessActionSpy = jest.spyOn(createActionModule, 'createSuccessAction');

    const serverResultData = {data: 'serverData'};
    const testAction = '1';
    const testUrl = 'http://test.url.com';
    const testServerData = 'test server data';
    const testStoreData = 'test store data';
    axiosMock.onGet(testUrl).reply(200, serverResultData.data);

    const clientCallResult = await client.get(testUrl, testAction, testServerData, testStoreData);

    expect(createActionSpy).toHaveBeenCalled();
    expect(createActionSpy.mock.calls[0][0]).toBe(testAction);
    expect(createActionSpy.mock.calls[0][1]).toBe(testStoreData);

    expect(createSuccessActionSpy).toHaveBeenCalled();
    expect(createSuccessActionSpy.mock.calls.length).toBe(1);
    expect(createSuccessActionSpy.mock.calls[0][0]).toBe(testAction);
    expect(createSuccessActionSpy.mock.calls[0][1]).toBe(serverResultData.data);

    expect(clientCallResult).toBe(serverResultData.data);

    axiosMock.restore();
  });

  it('should call client GET action with error result from server', () => {
    const axiosMock = new MockAdapter(axios);
    const createActionSpy = jest.spyOn(createActionModule, 'createAction');
    const createFailureActionSpy = jest.spyOn(createActionModule, 'createFailureAction');

    const serverResultData = {data: 'serverErrorData'};
    const testAction = '1';
    const testUrl = 'http://test.url.com';
    const testServerData = 'test server data';
    const testStoreData = 'test store data';
    axiosMock.onGet(testUrl).reply(400, serverResultData.data);

    return client.get(testUrl, testAction, testServerData, testStoreData).then(
      (correctData) => {
      },
      (error) => {
        expect(createActionSpy).toHaveBeenCalled();
        expect(createActionSpy.mock.calls.length).toBe(1);
        expect(createActionSpy.mock.calls[0][0]).toBe(testAction);
        expect(createActionSpy.mock.calls[0][1]).toBe(testStoreData);

        expect(createFailureActionSpy).toHaveBeenCalled();
        expect(createFailureActionSpy.mock.calls.length).toBe(1);
        expect(createFailureActionSpy.mock.calls[0][0]).toBe(testAction);
        expect(createFailureActionSpy.mock.calls[0][1]).toBe(serverResultData.data);

        expect(error).toBe(serverResultData.data);
      },
    );

    axiosMock.restore();
  });

  it('should call client GET action with network error', () => {
    const axiosMock = new MockAdapter(axios);
    const createActionSpy = jest.spyOn(createActionModule, 'createAction');
    const createFailureActionSpy = jest.spyOn(createActionModule, 'createFailureAction');

    const testAction = '1';
    const testUrl = 'http://test.url.com';
    const testServerData = 'test server data';
    const testStoreData = 'test store data';
    axiosMock.onGet(testUrl).networkError();

    return client.get(testUrl, testAction, testServerData, testStoreData).then(
      (correctData) => {
      },
      (error) => {
        expect(error).toBe('Network error!');

        expect(createActionSpy).toHaveBeenCalled();
        expect(createActionSpy.mock.calls.length).toBe(1);
        expect(createActionSpy.mock.calls[0][0]).toBe(testAction);
        expect(createActionSpy.mock.calls[0][1]).toBe(testStoreData);

        expect(createFailureActionSpy).toHaveBeenCalled();
        expect(createFailureActionSpy.mock.calls.length).toBe(1);
        expect(createFailureActionSpy.mock.calls[0][0]).toBe(testAction);
        expect(createFailureActionSpy.mock.calls[0][1]).toBe('Network error!');
      },
    );

    axiosMock.restore();
  });

  it('should call client GET action with network timeout', () => {
    const axiosMock = new MockAdapter(axios);
    const createActionSpy = jest.spyOn(createActionModule, 'createAction');
    const createFailureActionSpy = jest.spyOn(createActionModule, 'createFailureAction');

    const testAction = '1';
    const testUrl = 'http://test.url.com';
    const testServerData = 'test server data';
    const testStoreData = 'test store data';
    axiosMock.onGet(testUrl).timeout();

    return client.get(testUrl, testAction, testServerData, testStoreData).then(
      (correctData) => {
      },
      (error) => {
        expect(error).toContain('Network error!');

        expect(createActionSpy).toHaveBeenCalled();
        expect(createActionSpy.mock.calls.length).toBe(1);
        expect(createActionSpy.mock.calls[0][0]).toBe(testAction);
        expect(createActionSpy.mock.calls[0][1]).toBe(testStoreData);

        expect(createFailureActionSpy).toHaveBeenCalled();
        expect(createFailureActionSpy.mock.calls.length).toBe(1);
        expect(createFailureActionSpy.mock.calls[0][0]).toBe(testAction);
        expect(createFailureActionSpy.mock.calls[0][1]).toContain('Network error!');
      },
    );

    axiosMock.restore();
  });

  it('should call client POST action with success result', async () => {
    const axiosMock = new MockAdapter(axios);
    const createActionSpy = jest.spyOn(createActionModule, 'createAction');
    const createSuccessActionSpy = jest.spyOn(createActionModule, 'createSuccessAction');

    const serverResultData = {data: 'Post Success'};
    const testAction = '1';
    const testUrl = 'http://test.url.com';
    const testServerData = 'test server data';
    const testStoreData = 'test store data';
    axiosMock.onPost(testUrl).reply(200, serverResultData.data);

    const clientCallResult = await client.post(testUrl, testAction, testServerData, testStoreData);

    expect(createActionSpy).toHaveBeenCalled();
    expect(createActionSpy.mock.calls[0][0]).toBe(testAction);
    expect(createActionSpy.mock.calls[0][1]).toBe(testStoreData);

    expect(createSuccessActionSpy).toHaveBeenCalled();
    expect(createSuccessActionSpy.mock.calls.length).toBe(1);
    expect(createSuccessActionSpy.mock.calls[0][0]).toBe(testAction);
    expect(createSuccessActionSpy.mock.calls[0][1]).toBe(serverResultData.data);

    expect(clientCallResult).toBe(serverResultData.data);

    axiosMock.restore();
  });

  it('should call client POST action with error result from server', () => {
    const axiosMock = new MockAdapter(axios);
    const createActionSpy = jest.spyOn(createActionModule, 'createAction');
    const createFailureActionSpy = jest.spyOn(createActionModule, 'createFailureAction');

    const serverResultData = {data: 'serverPostErrorData'};
    const testAction = '1';
    const testUrl = 'http://test.url.com';
    const testServerData = 'test server data';
    const testStoreData = 'test store data';
    axiosMock.onPost(testUrl).reply(400, serverResultData.data);

    return client.post(testUrl, testAction, testServerData, testStoreData).then(
      (correctData) => {
      },
      (error) => {
        expect(createActionSpy).toHaveBeenCalled();
        expect(createActionSpy.mock.calls.length).toBe(1);
        expect(createActionSpy.mock.calls[0][0]).toBe(testAction);
        expect(createActionSpy.mock.calls[0][1]).toBe(testStoreData);

        expect(createFailureActionSpy).toHaveBeenCalled();
        expect(createFailureActionSpy.mock.calls.length).toBe(1);
        expect(createFailureActionSpy.mock.calls[0][0]).toBe(testAction);
        expect(createFailureActionSpy.mock.calls[0][1]).toBe(serverResultData.data);

        expect(error).toBe(serverResultData.data);
      },
    );

    axiosMock.restore();
  });

  it('should call client POST action with network error', () => {

    const axiosMock = new MockAdapter(axios);
    const createActionSpy = jest.spyOn(createActionModule, 'createAction');
    const createFailureActionSpy = jest.spyOn(createActionModule, 'createFailureAction');

    const testAction = '1';
    const testUrl = 'http://test.url.com';
    const testServerData = 'test server data';
    const testStoreData = 'test store data';
    axiosMock.onPost(testUrl).networkError();

    return client.post(testUrl, testAction, testServerData, testStoreData).then(
      (correctData) => {
      },
      (error) => {
        expect(error).toBe('Network error!');

        expect(createActionSpy).toHaveBeenCalled();
        expect(createActionSpy.mock.calls.length).toBe(1);
        expect(createActionSpy.mock.calls[0][0]).toBe(testAction);
        expect(createActionSpy.mock.calls[0][1]).toBe(testStoreData);

        expect(createFailureActionSpy).toHaveBeenCalled();
        expect(createFailureActionSpy.mock.calls.length).toBe(1);
        expect(createFailureActionSpy.mock.calls[0][0]).toBe(testAction);
        expect(createFailureActionSpy.mock.calls[0][1]).toBe('Network error!');
      },
    );

    axiosMock.restore();
  });

  it('should call client POST action with network timeout', () => {

    const axiosMock = new MockAdapter(axios);
    const createActionSpy = jest.spyOn(createActionModule, 'createAction');
    const createFailureActionSpy = jest.spyOn(createActionModule, 'createFailureAction');

    const testAction = '1';
    const testUrl = 'http://test.url.com';
    const testServerData = 'test server data';
    const testStoreData = 'test store data';
    axiosMock.onPost(testUrl).timeout();

    return client.post(testUrl, testAction, testServerData, testStoreData).then(
      (correctData) => {
      },
      (error) => {
        expect(error).toContain('Network error!');

        expect(createActionSpy).toHaveBeenCalled();
        expect(createActionSpy.mock.calls.length).toBe(1);
        expect(createActionSpy.mock.calls[0][0]).toBe(testAction);
        expect(createActionSpy.mock.calls[0][1]).toBe(testStoreData);

        expect(createFailureActionSpy).toHaveBeenCalled();
        expect(createFailureActionSpy.mock.calls.length).toBe(1);
        expect(createFailureActionSpy.mock.calls[0][0]).toBe(testAction);
        expect(createFailureActionSpy.mock.calls[0][1]).toContain('Network error!');
      },
    );

    axiosMock.restore();
  });

});

