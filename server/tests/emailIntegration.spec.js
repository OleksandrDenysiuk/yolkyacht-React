import request from "supertest";
import app from "../server";
import testDataLoader from "../modules/testdata/testDataLoader";


const agent = request.agent(app);

jest.mock("@sendgrid/mail", () => {
  return {
    setApiKey: jest.fn(),
    send: jest.fn()
  };
});


describe('Email Integration Tests', () => {

  beforeEach(async (done) => {
    await testDataLoader();
    done();
  });

  afterEach((done) => {
    done();
  })

  afterAll( function (done) {
    app && app.server.close(done);
  });

  it('should return OK state when correct QuoteRequest for received', async (done) => {
    const quoteRequestFormState = {
      firstName: 'First Name',
      lastName: 'Last Name',
      phoneNumber: '+380-63-559-5190',
      email: 'test@email.com',
      bestTimeToContact: 'just now',
      yachtModel: 'Super-Puoer',
      year: '2019',
      length: '200',
      lengthUnit: 'meters',
      beam: '20',
      beamUnit: 'meters',
      weight: '100',
      weightUnit: 'metric tons',
      purpose: 'Regatta',
      fromWhere: 'Irpin',
      toWhere: 'Barcelona',
      when: '01/01/2020'
    };

    const result = await agent.post('/api/emails/quote').send(quoteRequestFormState);
    expect(result.statusCode).toBe(200);
    expect(result.body).toContain('Email sent successfully!');

    done();
  })

  it('should return BAD_REQUEST state with list of errors when incorrect QuoteRequest for received', async (done) => {
    const quoteRequestFormState = {
      firstName: '',
      lastName: '',
      phoneNumber: '',
      email: '',
      bestTimeToContact: 'just now',
      yachtModel: 'Super-Puoer',
      year: '2019',
      length: '200',
      lengthUnit: 'meters',
      beam: '20',
      beamUnit: 'meters',
      weight: '100',
      weightUnit: 'metric tons',
      purpose: 'Regatta',
      fromWhere: 'Irpin',
      toWhere: 'Barcelona',
      when: '01/01/2020'
    };

    const result = await agent.post('/api/emails/quote').send(quoteRequestFormState);
    expect(result.statusCode).toBe(400);
    expect(JSON.stringify(result.body)).toContain('Email field is required');
    expect(JSON.stringify(result.body)).toContain('First Name is required');
    expect(JSON.stringify(result.body)).toContain('Last Name is required');
    expect(JSON.stringify(result.body)).toContain('Phone Number is required');

    done();
  })

  it('should return BAD_REQUEST state with list of errors when incorrect QuoteRequest for received', async (done) => {
    const quoteRequestFormState = {
      firstName: 'First Name',
      lastName: 'Last Name',
      phoneNumber: '+10-000-0000',
      email: 'wrong.emqil.com',
      bestTimeToContact: 'just now',
      yachtModel: 'Super-Puoer',
      year: '2019',
      length: '200',
      lengthUnit: 'meters',
      beam: '20',
      beamUnit: 'meters',
      weight: '100',
      weightUnit: 'metric tons',
      purpose: 'Regatta',
      fromWhere: 'Irpin',
      toWhere: 'Barcelona',
      when: '01/01/2020'
    };

    const result = await agent.post('/api/emails/quote').send(quoteRequestFormState);
    expect(result.statusCode).toBe(400);
    expect(JSON.stringify(result.body)).toContain('Email is invalid');

    done();
  })

});

