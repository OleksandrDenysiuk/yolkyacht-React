import request from "supertest";
import app from "../server";
import testDataLoader from "../modules/testdata/testDataLoader";


const agent = request.agent(app);

describe('Ports Integration Tests', () => {

  beforeEach( async (done) => {
    await testDataLoader();
    done();
  });

  afterEach((done) => {
    done();
  });

  afterAll(   function (done) {
    app && app.server.close(done);
  });

  it('should return ports list', async (done) => {
    const result = await agent.get('/api/ports/');

    expect(result.statusCode).toBe(200);
    expect(Array.isArray(result.body)).toBe(true);
    expect(result.body.length).toBe(9);

    expect(result.body[0]).toHaveProperty('_id');
    expect(result.body[0]).toHaveProperty('portName');
    expect(result.body[0]).toHaveProperty('destinationName');
    expect(JSON.stringify(result.body[0])).toContain('41224d776a326fb40f001101');
    expect(JSON.stringify(result.body[0])).toContain('Fort Lauderdale, Florida');
    expect(JSON.stringify(result.body[0])).toContain('East Coast North America');


    expect(result.body[1]).toHaveProperty('_id');
    expect(result.body[1]).toHaveProperty('portName');
    expect(result.body[1]).toHaveProperty('destinationName');
    expect(JSON.stringify(result.body[1])).toContain('41224d776a326fb40f001102');
    expect(JSON.stringify(result.body[1])).toContain('Palma de Mallorca, Spain');
    expect(JSON.stringify(result.body[1])).toContain('Mediterranean');


    expect(result.body[2]).toHaveProperty('_id');
    expect(result.body[2]).toHaveProperty('portName');
    expect(result.body[2]).toHaveProperty('destinationName');
    expect(JSON.stringify(result.body[2])).toContain('41224d776a326fb40f001103');
    expect(JSON.stringify(result.body[2])).toContain('Genoa, Italy');
    expect(JSON.stringify(result.body[2])).toContain('Mediterranean');


    expect(result.body[3]).toHaveProperty('_id');
    expect(result.body[3]).toHaveProperty('portName');
    expect(result.body[3]).toHaveProperty('destinationName');
    expect(JSON.stringify(result.body[3])).toContain('41224d776a326fb40f001104');
    expect(JSON.stringify(result.body[3])).toContain('Fethiye, Turkey');
    expect(JSON.stringify(result.body[3])).toContain('Mediterranean');


    expect(result.body[4]).toHaveProperty('_id');
    expect(result.body[4]).toHaveProperty('portName');
    expect(result.body[4]).toHaveProperty('destinationName');
    expect(JSON.stringify(result.body[4])).toContain('41224d776a326fb40f001105');
    expect(JSON.stringify(result.body[4])).toContain('Hong Kong');
    expect(JSON.stringify(result.body[4])).toContain('Asia');


    expect(result.body[5]).toHaveProperty('_id');
    expect(result.body[5]).toHaveProperty('portName');
    expect(result.body[5]).toHaveProperty('destinationName');
    expect(JSON.stringify(result.body[5])).toContain('41224d776a326fb40f001106');
    expect(JSON.stringify(result.body[5])).toContain('Victoria, British Columbia');
    expect(JSON.stringify(result.body[5])).toContain('West Coast North America');


    expect(result.body[6]).toHaveProperty('_id');
    expect(result.body[6]).toHaveProperty('portName');
    expect(result.body[6]).toHaveProperty('destinationName');
    expect(JSON.stringify(result.body[6])).toContain('41224d776a326fb40f001107');
    expect(JSON.stringify(result.body[6])).toContain('Ensenada, Mexico');
    expect(JSON.stringify(result.body[6])).toContain('West Coast North America');


    expect(result.body[7]).toHaveProperty('_id');
    expect(result.body[7]).toHaveProperty('portName');
    expect(result.body[7]).toHaveProperty('destinationName');
    expect(JSON.stringify(result.body[7])).toContain('41224d776a326fb40f001108');
    expect(JSON.stringify(result.body[7])).toContain('Golfito, Costa Rica');
    expect(JSON.stringify(result.body[7])).toContain('Central America');


    expect(result.body[8]).toHaveProperty('_id');
    expect(result.body[8]).toHaveProperty('portName');
    expect(result.body[8]).toHaveProperty('destinationName');
    expect(JSON.stringify(result.body[8])).toContain('41224d776a326fb40f001109');
    expect(JSON.stringify(result.body[8])).toContain('Tortola, British Virgin Islands');
    expect(JSON.stringify(result.body[8])).toContain('Caribbean');


    done();
  })

});
