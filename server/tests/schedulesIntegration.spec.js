import request from "supertest";
import app from "../server";
import testDataLoader from "../modules/testdata/testDataLoader";


const agent = request.agent(app);

describe('Schedules Integration Tests', () => {

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

  it('should return schedules list for given departurePortId and destinationPortId', async (done) => {
    const scheduleData = {
      departurePortId: '41224d776a326fb40f001101',
      destinationPortId: '41224d776a326fb40f001103',
      month: ''
    }

    const result = await agent.post('/api/schedules/').send(scheduleData);
    expect(result.statusCode).toBe(200);
    expect(Array.isArray(result.body)).toBe(true);
    expect(result.body.length).toBe(9);


    expect(result.body[0][0]).toHaveProperty('_id');
    expect(result.body[0][0]).toHaveProperty('departurePortId');
    expect(result.body[0][0]).toHaveProperty('departureOn');
    expect(result.body[0][0]).toHaveProperty('destinationPortId');
    expect(result.body[0][0]).toHaveProperty('arrivalOn');
    expect(result.body[0][0]).toHaveProperty('sailingName');
    expect(result.body[0][0]).toHaveProperty('destinationName');
    expect(result.body[0][0]).toHaveProperty('departurePort');
    expect(result.body[0][0]).toHaveProperty('destinationPort');
    expect(JSON.stringify(result.body[0][0])).toContain('41224d776a326fb40f001101');
    expect(JSON.stringify(result.body[0][0])).toContain('Fort Lauderdale, Florida');
    expect(JSON.stringify(result.body[0][0])).toContain('41224d776a326fb40f001102');
    expect(JSON.stringify(result.body[0][0])).toContain('Palma de Mallorca, Spain');
    expect(JSON.stringify(result.body[0][1])).toContain('41224d776a326fb40f001102');
    expect(JSON.stringify(result.body[0][1])).toContain('Palma de Mallorca, Spain');
    expect(JSON.stringify(result.body[0][1])).toContain('41224d776a326fb40f001103');
    expect(JSON.stringify(result.body[0][1])).toContain('Genoa, Italy');
    expect(JSON.stringify(result.body[0][1])).toContain('arrivalOn');
    expect(JSON.stringify(result.body[0][1])).toContain('2020-04-21');

    expect(result.body[1][0]).toHaveProperty('_id');
    expect(result.body[1][0]).toHaveProperty('departurePortId');
    expect(result.body[1][0]).toHaveProperty('departureOn');
    expect(result.body[1][0]).toHaveProperty('destinationPortId');
    expect(result.body[1][0]).toHaveProperty('arrivalOn');
    expect(result.body[1][0]).toHaveProperty('sailingName');
    expect(result.body[1][0]).toHaveProperty('destinationName');
    expect(result.body[1][0]).toHaveProperty('departurePort');
    expect(result.body[1][0]).toHaveProperty('destinationPort');
    expect(JSON.stringify(result.body[1][0])).toContain('41224d776a326fb40f001101');
    expect(JSON.stringify(result.body[1][0])).toContain('Fort Lauderdale, Florida');
    expect(JSON.stringify(result.body[1][0])).toContain('41224d776a326fb40f001102');
    expect(JSON.stringify(result.body[1][0])).toContain('Palma de Mallorca, Spain');
    expect(JSON.stringify(result.body[1][1])).toContain('41224d776a326fb40f001102');
    expect(JSON.stringify(result.body[1][1])).toContain('Palma de Mallorca, Spain');
    expect(JSON.stringify(result.body[1][1])).toContain('41224d776a326fb40f001103');
    expect(JSON.stringify(result.body[1][1])).toContain('Genoa, Italy');
    expect(JSON.stringify(result.body[1][1])).toContain('arrivalOn');
    expect(JSON.stringify(result.body[1][1])).toContain('2020-06-02');

    expect(result.body[2][0]).toHaveProperty('_id');
    expect(result.body[2][0]).toHaveProperty('departurePortId');
    expect(result.body[2][0]).toHaveProperty('departureOn');
    expect(result.body[2][0]).toHaveProperty('destinationPortId');
    expect(result.body[2][0]).toHaveProperty('arrivalOn');
    expect(result.body[2][0]).toHaveProperty('sailingName');
    expect(result.body[2][0]).toHaveProperty('destinationName');
    expect(result.body[2][0]).toHaveProperty('departurePort');
    expect(result.body[2][0]).toHaveProperty('destinationPort');
    expect(JSON.stringify(result.body[2][0])).toContain('41224d776a326fb40f001101');
    expect(JSON.stringify(result.body[2][0])).toContain('Fort Lauderdale, Florida');
    expect(JSON.stringify(result.body[2][0])).toContain('41224d776a326fb40f001103');
    expect(JSON.stringify(result.body[2][0])).toContain('Genoa, Italy');
    expect(JSON.stringify(result.body[2][0])).toContain('arrivalOn');
    expect(JSON.stringify(result.body[2][0])).toContain('2020-08-21');

    expect(result.body[3][0]).toHaveProperty('_id');
    expect(result.body[3][0]).toHaveProperty('departurePortId');
    expect(result.body[3][0]).toHaveProperty('departureOn');
    expect(result.body[3][0]).toHaveProperty('destinationPortId');
    expect(result.body[3][0]).toHaveProperty('arrivalOn');
    expect(result.body[3][0]).toHaveProperty('sailingName');
    expect(result.body[3][0]).toHaveProperty('destinationName');
    expect(result.body[3][0]).toHaveProperty('departurePort');
    expect(result.body[3][0]).toHaveProperty('destinationPort');
    expect(JSON.stringify(result.body[3][0])).toContain('41224d776a326fb40f001101');
    expect(JSON.stringify(result.body[3][0])).toContain('Fort Lauderdale, Florida');
    expect(JSON.stringify(result.body[3][0])).toContain('41224d776a326fb40f001103');
    expect(JSON.stringify(result.body[3][0])).toContain('Genoa, Italy');
    expect(JSON.stringify(result.body[3][0])).toContain('arrivalOn');
    expect(JSON.stringify(result.body[3][0])).toContain('2020-10-16');

    done();
  })

  it('should return filtered by month schedules list for given departurePortId and destinationPortId', async (done) => {
    const scheduleData = {
      departurePortId: '41224d776a326fb40f001101',
      destinationPortId: '41224d776a326fb40f001103',
      month: '3'
    }

    const result = await agent.post('/api/schedules/').send(scheduleData);
    expect(result.statusCode).toBe(200);
    expect(Array.isArray(result.body)).toBe(true);
    expect(result.body.length).toBe(3);


    expect(result.body[0][0]).toHaveProperty('_id');
    expect(result.body[0][0]).toHaveProperty('departurePortId');
    expect(result.body[0][0]).toHaveProperty('departureOn');
    expect(result.body[0][0]).toHaveProperty('destinationPortId');
    expect(result.body[0][0]).toHaveProperty('arrivalOn');
    expect(result.body[0][0]).toHaveProperty('sailingName');
    expect(result.body[0][0]).toHaveProperty('destinationName');
    expect(result.body[0][0]).toHaveProperty('departurePort');
    expect(result.body[0][0]).toHaveProperty('destinationPort');
    expect(JSON.stringify(result.body[0][0])).toContain('41224d776a326fb40f001101');
    expect(JSON.stringify(result.body[0][0])).toContain('Fort Lauderdale, Florida');
    expect(JSON.stringify(result.body[0][0])).toContain('41224d776a326fb40f001102');
    expect(JSON.stringify(result.body[0][0])).toContain('Palma de Mallorca, Spain');
    expect(JSON.stringify(result.body[0][1])).toContain('arrivalOn');
    expect(JSON.stringify(result.body[0][1])).toContain('2020-04-21');

    done();
  })

  it('should return BadRequest when departurePortId is absent', async (done) => {
    const scheduleData = {
      departurePortId: '',
      destinationPortId: '41224d776a326fb40f001002'
    }

    const result = await agent.post('/api/schedules/').send(scheduleData);

    expect(result.statusCode).toBe(400);
    expect(result.body).toHaveProperty('departurePortId');
    expect(JSON.stringify(result.body)).toContain('Departure Port is required');

    done();
  })

  it('should return BadRequest when destinationPortId is absent', async (done) => {
    const scheduleData = {
      departurePortId: '41224d776a326fb40f001001',
      destinationPortId: ''
    }

    const result = await agent.post('/api/schedules/').send(scheduleData);

    expect(result.statusCode).toBe(400);
    expect(result.body).toHaveProperty('destinationPortId');
    expect(JSON.stringify(result.body)).toContain('Destination Port is required');

    done();
  })

  it('should return BadRequest when departurePortId and destinationPortId are absent', async (done) => {
    const scheduleData = {
      departurePortId: '',
      destinationPortId: ''
    }

    const result = await agent.post('/api/schedules/').send(scheduleData);

    expect(result.statusCode).toBe(400);
    expect(result.body).toHaveProperty('departurePortId');
    expect(result.body).toHaveProperty('destinationPortId');
    expect(JSON.stringify(result.body)).toContain('Departure Port is required');
    expect(JSON.stringify(result.body)).toContain('Destination Port is required');

    done();
  })

});

