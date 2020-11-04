const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const QuoteRequestSchema = new Schema({
  fromEmail: { type: String, required: true },
  receivedAt: { type: String, required: true },
  requestData: { type: String, required: true }
});

const QuoteRequest = mongoose.model("quoteRequests", QuoteRequestSchema);
export default QuoteRequest;
