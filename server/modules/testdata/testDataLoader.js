import mongoose from "mongoose";
import User from'../../models/User';
import Port from '../../models/Port';
import Route from '../../models/Route';
import logger from '../../utils/logger';


const Types = mongoose.Types;

export default async function testDataLoader()  {
  logger.info('Loading Test Data in Dev mode...');

  // remove existed test data in User collection
  await User.deleteMany()
    .then(() => console.log('Current User collection was removed.'))
    .catch((err) => console.log("Error removing User collection: ", err));
  await User.insertMany([
    new User({_id: "41224d776a326fb40f000001", name: 'Dmitry', email: 'Ivanov', password: 'cap'}),
    new User({_id: "41224d776a326fb40f000002", name: 'Ruslan', email: 'Kharitonov', password: 'cap'}),
    new User({_id: "41224d776a326fb40f000003", name: 'Customer2', email: 'Customer2', password: 'cap'}),
    new User({_id: "41224d776a326fb40f000004", name: 'Customer3', email: 'Customer3', password: 'test'}),
    new User({_id: "41224d776a326fb40f000005", name: 'Customer4', email: 'Customer4', password: 'test'})
  ])
    .then(() => console.log('New Users inserted into DB.'))
    .catch(err => console.log("Failed to save new Users into test data.  Error: ", err));

  // check inserted data
  /*await User.find()
    .then(findedUsers => console.log('findedUsers: ',findedUsers))
    .catch(err => console.log("My log: ",err));*/

  // remove existed test data in Port collection
  await Port.deleteMany()
    .then(() => console.log('Current Port collection was removed.'))
    .catch(err => console.log("Error removing Port collection: ", err));

  await Port.insertMany([
    new Port({_id: Types.ObjectId('41224d776a326fb40f001101'), portName: 'Fort Lauderdale, Florida', destinationName: 'East Coast North America'}),
    new Port({_id: Types.ObjectId('41224d776a326fb40f001102'), portName: 'Palma de Mallorca, Spain', destinationName: 'Mediterranean'}),
    new Port({_id: Types.ObjectId('41224d776a326fb40f001103'), portName: 'Genoa, Italy', destinationName: 'Mediterranean'}),
    new Port({_id: Types.ObjectId('41224d776a326fb40f001104'), portName: 'Fethiye, Turkey', destinationName: 'Mediterranean'}),
    new Port({_id: Types.ObjectId('41224d776a326fb40f001105'), portName: 'Hong Kong', destinationName: 'Asia'}),
    new Port({_id: Types.ObjectId('41224d776a326fb40f001106'), portName: 'Victoria, British Columbia', destinationName: 'West Coast North America'}),
    new Port({_id: Types.ObjectId('41224d776a326fb40f001107'), portName: 'Ensenada, Mexico', destinationName: 'West Coast North America'}),
    new Port({_id: Types.ObjectId('41224d776a326fb40f001108'), portName: 'Golfito, Costa Rica', destinationName: 'Central America'}),
    new Port({_id: Types.ObjectId('41224d776a326fb40f001109'), portName: 'Tortola, British Virgin Islands', destinationName: 'Caribbean'})
  ])
    .then(() => console.log('New Ports inserted into DB.'))
    .catch(err => console.log("Failed to save new Ports into test data.  Error: ",err));
  // check inserted data
  /*await Port.find()
    .then(ports => console.log("Ports: ",ports))
    .catch(err => console.log("My log: ",err));*/

  // remove existed test data in Route collection
  await Route.deleteMany()
    .then(() => console.log('Current Route collection was removed.'))
    .catch(err => console.log("Error removing Route collection: ", err));
  await Route.insertMany([
    // 2020 year
    new Route({_id: "41224d776a326fb40f002101", departureOn: new Date('2020-04-05'), arrivalOn: new Date('2020-04-19'), sailingName: 'Grand Prix Sailing', destinationName: 'Mediterranean', departurePortId: Types.ObjectId('41224d776a326fb40f001101'), destinationPortId: Types.ObjectId('41224d776a326fb40f001102'), miles: 4262, daysAtSea: 15, daysInPort: 2, fileName: 'Mallorca.jpg'}),
    new Route({_id: "41224d776a326fb40f002103", departureOn: new Date('2020-04-21'), arrivalOn: new Date('2020-04-22'), sailingName: 'Grand Prix Sailing', destinationName: 'Mediterranean', departurePortId: Types.ObjectId('41224d776a326fb40f001102'), destinationPortId: Types.ObjectId('41224d776a326fb40f001103'), miles: 441, daysAtSea: 1, daysInPort: 3, fileName: 'Mallorca.jpg'}),
    new Route({_id: "41224d776a326fb40f002104", departureOn: new Date('2020-04-25'), arrivalOn: new Date('2020-05-11'), sailingName: 'Summer Mediterranean Sailing', destinationName: 'East Coast North America', departurePortId: Types.ObjectId('41224d776a326fb40f001103'), destinationPortId: Types.ObjectId('41224d776a326fb40f001101'), miles: 4659, daysAtSea: 16, daysInPort: 5, fileName: 'Mediterranean.jpg'}),
    new Route({_id: "41224d776a326fb40f002105", departureOn: new Date('2020-05-16'), arrivalOn: new Date('2020-05-31'), sailingName: 'Summer Mediterranean Sailing', destinationName: 'Mediterranean', departurePortId: Types.ObjectId('41224d776a326fb40f001101'), destinationPortId: Types.ObjectId('41224d776a326fb40f001102'), miles: 4262, daysAtSea: 15, daysInPort: 2, fileName: 'Mediterranean.jpg'}),
    new Route({_id: "41224d776a326fb40f002106", departureOn: new Date('2020-06-02'), arrivalOn: new Date('2020-06-03'), sailingName: 'Summer Mediterranean Sailing', destinationName: 'Mediterranean', departurePortId: Types.ObjectId('41224d776a326fb40f001102'), destinationPortId: Types.ObjectId('41224d776a326fb40f001103'), miles: 441, daysAtSea: 1, daysInPort: 4, fileName: 'Mediterranean.jpg'}),
    new Route({_id: "41224d776a326fb40f002107", departureOn: new Date('2020-06-07'), arrivalOn: new Date('2020-06-11'), sailingName: 'Summer Mediterranean Sailing', destinationName: 'Mediterranean', departurePortId: Types.ObjectId('41224d776a326fb40f001103'), destinationPortId: Types.ObjectId('41224d776a326fb40f001104'), miles: 1169, daysAtSea: 4, daysInPort: 3, fileName: 'Mediterranean.jpg'}),
    new Route({_id: "41224d776a326fb40f002108", departureOn: new Date('2020-06-14'), arrivalOn: new Date('2020-07-07'), sailingName: 'Europe to Asia Sailing', destinationName: 'Asia', departurePortId: Types.ObjectId('41224d776a326fb40f001104'), destinationPortId: Types.ObjectId('41224d776a326fb40f001105'), miles: 6843, daysAtSea: 23, daysInPort: 2, fileName: 'Beach.jpg'}),
    new Route({_id: "41224d776a326fb40f002109", departureOn: new Date('2020-07-09'), arrivalOn: new Date('2020-07-28'), sailingName: 'Asia to North America Summer Sailing', destinationName: 'West Coast North America', departurePortId: Types.ObjectId('41224d776a326fb40f001105'), destinationPortId: Types.ObjectId('41224d776a326fb40f001106'), miles: 5680, daysAtSea: 19, daysInPort: 2, fileName: 'Beach.jpg'}),
    new Route({_id: "41224d776a326fb40f002110", departureOn: new Date('2020-07-30'), arrivalOn: new Date('2020-08-03'), sailingName: 'North America Eastbound Summer Sailing', destinationName: 'West Coast North America', departurePortId: Types.ObjectId('41224d776a326fb40f001106'), destinationPortId: Types.ObjectId('41224d776a326fb40f001107'), miles: 1201, daysAtSea: 4, daysInPort: 2, fileName: 'Mediterranean.jpg'}),
    new Route({_id: "41224d776a326fb40f002111", departureOn: new Date('2020-08-05'), arrivalOn: new Date('2020-08-13'), sailingName: 'North America Eastbound Summer Sailing', destinationName: 'Central America', departurePortId: Types.ObjectId('41224d776a326fb40f001107'), destinationPortId: Types.ObjectId('41224d776a326fb40f001108'), miles: 2494, daysAtSea: 8, daysInPort: 2, fileName: 'Mediterranean.jpg'}),
    new Route({_id: "41224d776a326fb40f002112", departureOn: new Date('2020-08-15'), arrivalOn: new Date('2020-08-20'), sailingName: 'North America Eastbound Summer Sailing', destinationName: 'East Coast North America', departurePortId: Types.ObjectId('41224d776a326fb40f001108'), destinationPortId: Types.ObjectId('41224d776a326fb40f001101'), miles: 1605, daysAtSea: 5, daysInPort: 1, fileName: 'Mediterranean.jpg'}),
    new Route({_id: "41224d776a326fb40f002113", departureOn: new Date('2020-08-21'), arrivalOn: new Date('2020-09-22'), sailingName: 'Fort Lauderdale Boat Show Sailing', destinationName: 'Mediterranean', departurePortId: Types.ObjectId('41224d776a326fb40f001101'), destinationPortId: Types.ObjectId('41224d776a326fb40f001103'), miles: 4659, daysAtSea: 32, daysInPort: 2, fileName: 'Mediterranean.jpg'}),
    new Route({_id: "41224d776a326fb40f002114", departureOn: new Date('2020-09-24'), arrivalOn: new Date('2020-09-26'), sailingName: 'Fort Lauderdale Boat Show Sailing', destinationName: 'Mediterranean', departurePortId: Types.ObjectId('41224d776a326fb40f001103'), destinationPortId: Types.ObjectId('41224d776a326fb40f001102'), miles: 441, daysAtSea: 1, daysInPort: 4, fileName: 'Mediterranean.jpg'}),
    new Route({_id: "41224d776a326fb40f002115", departureOn: new Date('2020-09-30'), arrivalOn: new Date('2020-10-14'), sailingName: 'Fort Lauderdale Boat Show Sailing', destinationName: 'East Coast North America', departurePortId: Types.ObjectId('41224d776a326fb40f001102'), destinationPortId: Types.ObjectId('41224d776a326fb40f001101'), miles: 4262, daysAtSea: 14, daysInPort: 2, fileName: 'Mediterranean.jpg'}),
    new Route({_id: "41224d776a326fb40f002116", departureOn: new Date('2020-10-16'), arrivalOn: new Date('2020-10-31'), sailingName: 'Christmas Sailing', destinationName: 'Mediterranean', departurePortId: Types.ObjectId('41224d776a326fb40f001101'), destinationPortId: Types.ObjectId('41224d776a326fb40f001103'), miles: 4659, daysAtSea: 16, daysInPort: 3, fileName: 'Mediterranean.jpg'}),
    new Route({_id: "41224d776a326fb40f002117", departureOn: new Date('2020-11-03'), arrivalOn: new Date('2020-11-05'), sailingName: 'Christmas Sailing', destinationName: 'Mediterranean', departurePortId: Types.ObjectId('41224d776a326fb40f001103'), destinationPortId: Types.ObjectId('41224d776a326fb40f001102'), miles: 441, daysAtSea: 1, daysInPort: 2, fileName: 'Mediterranean.jpg'}),
    new Route({_id: "41224d776a326fb40f002118", departureOn: new Date('2020-11-07'), arrivalOn: new Date('2020-11-19'), sailingName: 'Christmas Sailing', destinationName: 'Caribbean', departurePortId: Types.ObjectId('41224d776a326fb40f001102'), destinationPortId: Types.ObjectId('41224d776a326fb40f001109'), miles: 3757, daysAtSea: 13, daysInPort: 3, fileName: 'Mediterranean.jpg'}),
    new Route({_id: "41224d776a326fb40f002119", departureOn: new Date('2020-11-22'), arrivalOn: new Date('2020-11-26'), sailingName: 'Westbound North America and Asia Christmas Sailing', destinationName: 'East Coast North America', departurePortId: Types.ObjectId('41224d776a326fb40f001109'), destinationPortId: Types.ObjectId('41224d776a326fb40f001101'), miles: 974, daysAtSea: 3, daysInPort: 5, fileName: 'Mediterranean.jpg'}),
    new Route({_id: "41224d776a326fb40f002120", departureOn: new Date('2020-12-01'), arrivalOn: new Date('2020-12-06'), sailingName: 'Westbound North America and Asia Christmas Sailing', destinationName: 'Central America', departurePortId: Types.ObjectId('41224d776a326fb40f001101'), destinationPortId: Types.ObjectId('41224d776a326fb40f001108'), miles: 1600, daysAtSea: 5, daysInPort: 2, fileName: 'Mediterranean.jpg'}),
    new Route({_id: "41224d776a326fb40f002121", departureOn: new Date('2020-12-08'), arrivalOn: new Date('2020-12-16'), sailingName: 'Westbound North America and Asia Christmas Sailing', destinationName: 'West Coast North America', departurePortId: Types.ObjectId('41224d776a326fb40f001108'), destinationPortId: Types.ObjectId('41224d776a326fb40f001107'), miles: 2500, daysAtSea: 8, daysInPort: 2, fileName: 'Mediterranean.jpg'}),
    new Route({_id: "41224d776a326fb40f002122", departureOn: new Date('2020-12-18'), arrivalOn: new Date('2020-12-20'), sailingName: 'Westbound North America and Asia Christmas Sailing', destinationName: 'West Coast North America ', departurePortId: Types.ObjectId('41224d776a326fb40f001107'), destinationPortId: Types.ObjectId('41224d776a326fb40f001106'), miles: 1200, daysAtSea: 4, daysInPort: 2, fileName: 'Mediterranean.jpg'}),
    new Route({_id: "41224d776a326fb40f002123", departureOn: new Date('2020-12-22'), arrivalOn: new Date('2021-01-10'), sailingName: 'Westbound North America and Asia Christmas Sailing', destinationName: 'Asia', departurePortId: Types.ObjectId('41224d776a326fb40f001106'), destinationPortId: Types.ObjectId('41224d776a326fb40f001105'), miles: 5680, daysAtSea: 19, daysInPort: 2, fileName: 'Beach.jpg'}),
    // 2021 year
    new Route({_id: "41224d776a326fb40f002201", departureOn: new Date('2021-04-05'), arrivalOn: new Date('2021-04-19'), sailingName: 'Grand Prix Sailing', destinationName: 'Mediterranean', departurePortId: Types.ObjectId('41224d776a326fb40f001101'), destinationPortId: Types.ObjectId('41224d776a326fb40f001102'), miles: 4262, daysAtSea: 15, daysInPort: 2, fileName: 'Mallorca.jpg'}),
    new Route({_id: "41224d776a326fb40f002203", departureOn: new Date('2021-04-21'), arrivalOn: new Date('2021-04-22'), sailingName: 'Grand Prix Sailing', destinationName: 'Mediterranean', departurePortId: Types.ObjectId('41224d776a326fb40f001102'), destinationPortId: Types.ObjectId('41224d776a326fb40f001103'), miles: 441, daysAtSea: 1, daysInPort: 3, fileName: 'Mallorca.jpg'}),
    new Route({_id: "41224d776a326fb40f002204", departureOn: new Date('2021-04-25'), arrivalOn: new Date('2021-05-11'), sailingName: 'Summer Mediterranean Sailing', destinationName: 'East Coast North America', departurePortId: Types.ObjectId('41224d776a326fb40f001103'), destinationPortId: Types.ObjectId('41224d776a326fb40f001101'), miles: 4659, daysAtSea: 16, daysInPort: 5, fileName: 'Mediterranean.jpg'}),
    new Route({_id: "41224d776a326fb40f002205", departureOn: new Date('2021-05-16'), arrivalOn: new Date('2021-05-31'), sailingName: 'Summer Mediterranean Sailing', destinationName: 'Mediterranean', departurePortId: Types.ObjectId('41224d776a326fb40f001101'), destinationPortId: Types.ObjectId('41224d776a326fb40f001102'), miles: 4262, daysAtSea: 15, daysInPort: 2, fileName: 'Mediterranean.jpg'}),
    new Route({_id: "41224d776a326fb40f002206", departureOn: new Date('2021-06-02'), arrivalOn: new Date('2021-06-03'), sailingName: 'Summer Mediterranean Sailing', destinationName: 'Mediterranean', departurePortId: Types.ObjectId('41224d776a326fb40f001102'), destinationPortId: Types.ObjectId('41224d776a326fb40f001103'), miles: 441, daysAtSea: 1, daysInPort: 4, fileName: 'Mediterranean.jpg'}),
    new Route({_id: "41224d776a326fb40f002207", departureOn: new Date('2021-06-07'), arrivalOn: new Date('2021-06-11'), sailingName: 'Summer Mediterranean Sailing', destinationName: 'Mediterranean', departurePortId: Types.ObjectId('41224d776a326fb40f001103'), destinationPortId: Types.ObjectId('41224d776a326fb40f001104'), miles: 1169, daysAtSea: 4, daysInPort: 3, fileName: 'Mediterranean.jpg'}),
    new Route({_id: "41224d776a326fb40f002208", departureOn: new Date('2021-06-14'), arrivalOn: new Date('2021-07-07'), sailingName: 'Europe to Asia Sailing', destinationName: 'Asia', departurePortId: Types.ObjectId('41224d776a326fb40f001104'), destinationPortId: Types.ObjectId('41224d776a326fb40f001105'), miles: 6843, daysAtSea: 23, daysInPort: 2, fileName: 'Beach.jpg'}),
    new Route({_id: "41224d776a326fb40f002209", departureOn: new Date('2021-07-09'), arrivalOn: new Date('2021-07-28'), sailingName: 'Asia to North America Summer Sailing', destinationName: 'West Coast North America', departurePortId: Types.ObjectId('41224d776a326fb40f001105'), destinationPortId: Types.ObjectId('41224d776a326fb40f001106'), miles: 5680, daysAtSea: 19, daysInPort: 2, fileName: 'Beach.jpg'}),
    new Route({_id: "41224d776a326fb40f002210", departureOn: new Date('2021-07-30'), arrivalOn: new Date('2021-08-03'), sailingName: 'North America Eastbound Summer Sailing', destinationName: 'West Coast North America', departurePortId: Types.ObjectId('41224d776a326fb40f001106'), destinationPortId: Types.ObjectId('41224d776a326fb40f001107'), miles: 1201, daysAtSea: 4, daysInPort: 2, fileName: 'Mediterranean.jpg'}),
    new Route({_id: "41224d776a326fb40f002211", departureOn: new Date('2021-08-05'), arrivalOn: new Date('2021-08-13'), sailingName: 'North America Eastbound Summer Sailing', destinationName: 'Central America', departurePortId: Types.ObjectId('41224d776a326fb40f001107'), destinationPortId: Types.ObjectId('41224d776a326fb40f001108'), miles: 2494, daysAtSea: 8, daysInPort: 2, fileName: 'Mediterranean.jpg'}),
    new Route({_id: "41224d776a326fb40f002212", departureOn: new Date('2021-08-15'), arrivalOn: new Date('2021-08-20'), sailingName: 'North America Eastbound Summer Sailing', destinationName: 'East Coast North America', departurePortId: Types.ObjectId('41224d776a326fb40f001108'), destinationPortId: Types.ObjectId('41224d776a326fb40f001101'), miles: 1605, daysAtSea: 5, daysInPort: 1, fileName: 'Mediterranean.jpg'}),
    new Route({_id: "41224d776a326fb40f002213", departureOn: new Date('2021-08-21'), arrivalOn: new Date('2021-09-22'), sailingName: 'Fort Lauderdale Boat Show Sailing', destinationName: 'Mediterranean', departurePortId: Types.ObjectId('41224d776a326fb40f001101'), destinationPortId: Types.ObjectId('41224d776a326fb40f001103'), miles: 4659, daysAtSea: 32, daysInPort: 2, fileName: 'Mediterranean.jpg'}),
    new Route({_id: "41224d776a326fb40f002214", departureOn: new Date('2021-09-24'), arrivalOn: new Date('2021-09-26'), sailingName: 'Fort Lauderdale Boat Show Sailing', destinationName: 'Mediterranean', departurePortId: Types.ObjectId('41224d776a326fb40f001103'), destinationPortId: Types.ObjectId('41224d776a326fb40f001102'), miles: 441, daysAtSea: 1, daysInPort: 4, fileName: 'Mediterranean.jpg'}),
    new Route({_id: "41224d776a326fb40f002215", departureOn: new Date('2021-09-30'), arrivalOn: new Date('2021-10-14'), sailingName: 'Fort Lauderdale Boat Show Sailing', destinationName: 'East Coast North America', departurePortId: Types.ObjectId('41224d776a326fb40f001102'), destinationPortId: Types.ObjectId('41224d776a326fb40f001101'), miles: 4262, daysAtSea: 14, daysInPort: 2, fileName: 'Mediterranean.jpg'}),
    new Route({_id: "41224d776a326fb40f002216", departureOn: new Date('2021-10-16'), arrivalOn: new Date('2021-10-31'), sailingName: 'Christmas Sailing', destinationName: 'Mediterranean', departurePortId: Types.ObjectId('41224d776a326fb40f001101'), destinationPortId: Types.ObjectId('41224d776a326fb40f001103'), miles: 4659, daysAtSea: 16, daysInPort: 3, fileName: 'Mediterranean.jpg'}),
    new Route({_id: "41224d776a326fb40f002217", departureOn: new Date('2021-11-03'), arrivalOn: new Date('2021-11-05'), sailingName: 'Christmas Sailing', destinationName: 'Mediterranean', departurePortId: Types.ObjectId('41224d776a326fb40f001103'), destinationPortId: Types.ObjectId('41224d776a326fb40f001102'), miles: 441, daysAtSea: 1, daysInPort: 2, fileName: 'Mediterranean.jpg'}),
    new Route({_id: "41224d776a326fb40f002218", departureOn: new Date('2021-11-07'), arrivalOn: new Date('2021-11-19'), sailingName: 'Christmas Sailing', destinationName: 'Caribbean', departurePortId: Types.ObjectId('41224d776a326fb40f001102'), destinationPortId: Types.ObjectId('41224d776a326fb40f001109'), miles: 3757, daysAtSea: 13, daysInPort: 3, fileName: 'Mediterranean.jpg'}),
    new Route({_id: "41224d776a326fb40f002219", departureOn: new Date('2021-11-22'), arrivalOn: new Date('2021-11-26'), sailingName: 'Westbound North America and Asia Christmas Sailing', destinationName: 'East Coast North America', departurePortId: Types.ObjectId('41224d776a326fb40f001109'), destinationPortId: Types.ObjectId('41224d776a326fb40f001101'), miles: 974, daysAtSea: 3, daysInPort: 5, fileName: 'Mediterranean.jpg'}),
    new Route({_id: "41224d776a326fb40f002220", departureOn: new Date('2021-12-01'), arrivalOn: new Date('2021-12-06'), sailingName: 'Westbound North America and Asia Christmas Sailing', destinationName: 'Central America', departurePortId: Types.ObjectId('41224d776a326fb40f001101'), destinationPortId: Types.ObjectId('41224d776a326fb40f001108'), miles: 1600, daysAtSea: 5, daysInPort: 2, fileName: 'Mediterranean.jpg'}),
    new Route({_id: "41224d776a326fb40f002221", departureOn: new Date('2021-12-08'), arrivalOn: new Date('2021-12-16'), sailingName: 'Westbound North America and Asia Christmas Sailing', destinationName: 'West Coast North America', departurePortId: Types.ObjectId('41224d776a326fb40f001108'), destinationPortId: Types.ObjectId('41224d776a326fb40f001107'), miles: 2500, daysAtSea: 8, daysInPort: 2, fileName: 'Mediterranean.jpg'}),
    new Route({_id: "41224d776a326fb40f002222", departureOn: new Date('2021-12-18'), arrivalOn: new Date('2021-12-20'), sailingName: 'Westbound North America and Asia Christmas Sailing', destinationName: 'West Coast North America ', departurePortId: Types.ObjectId('41224d776a326fb40f001107'), destinationPortId: Types.ObjectId('41224d776a326fb40f001106'), miles: 1200, daysAtSea: 4, daysInPort: 2, fileName: 'Mediterranean.jpg'}),
    new Route({_id: "41224d776a326fb40f002223", departureOn: new Date('2021-12-22'), arrivalOn: new Date('2022-01-10'), sailingName: 'Westbound North America and Asia Christmas Sailing', destinationName: 'Asia', departurePortId: Types.ObjectId('41224d776a326fb40f001106'), destinationPortId: Types.ObjectId('41224d776a326fb40f001105'), miles: 5680, daysAtSea: 19, daysInPort: 2, fileName: 'Beach.jpg'})
  ])
    .then(() => console.log('New Routes inserted into DB.'))
    .catch(err => console.log("Failed to save new Routes into test data.  Error: ", err));

  logger.info('Test Data loaded successfully.');
}
