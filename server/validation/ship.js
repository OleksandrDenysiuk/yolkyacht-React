const Validator = require("validator");
const isEmpty = require("is-empty");


module.exports = function validateShip(data) {
  let errors = {};
  // Convert empty fields to an empty string so we can use validator functions
  data.departurePortId = !isEmpty(data.departurePortId) ? data.departurePortId : "";
  data.destinationPortId = !isEmpty(data.destinationPortId) ? data.destinationPortId : "";
  // departurePortId checks
  if (Validator.isEmpty(data.departurePortId)) {
    errors.departurePortId = "Departure Port is required";
  }
  // destinationPortId checks
  if (Validator.isEmpty(data.destinationPortId)) {
    errors.destinationPortId = "Destination Port is required";
  }
  return {
    errors,
    isValid: isEmpty(errors)
  };
};
