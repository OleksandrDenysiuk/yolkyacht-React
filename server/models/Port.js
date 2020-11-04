const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PortSchema = new Schema({
  portName: { type: String, required: true },
  destinationName: { type: String, required: true }
});

const Port = mongoose.model("ports", PortSchema);
export default Port;
