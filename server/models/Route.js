const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const RouteSchema = new Schema({
  departureOn: { type: Date, required: true },
  arrivalOn: { type: Date, required: true },
  sailingName: { type: String, required: true },
  destinationName: { type: String, required: true },
  departurePortId: { type: Schema.Types.ObjectId, required: true },
  destinationPortId: { type: Schema.Types.ObjectId, required: true },
  miles: { type: Number, required: false },
  daysAtSea: { type: Number, required: false },
  daysInPort: { type: Number, required: false },
  fileName: { type: String, required: true }
});

const Route = mongoose.model("routes", RouteSchema);
export default Route;
