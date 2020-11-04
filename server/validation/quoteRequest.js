const Validator = require("validator");
const isEmpty = require("is-empty");


module.exports = function validateQuoteRequestInput(data) {
  let errors = {};
  // Convert empty fields to an empty string so we can use validator functions
  data.firstName = !isEmpty(data.firstName) ? data.firstName : "";
  data.lastName = !isEmpty(data.lastName) ? data.lastName : "";
  // First Name check
  if (Validator.isEmpty(data.firstName)) {
    errors.firstName = "First Name is required";
  }
  // Last Name check
  if (Validator.isEmpty(data.lastName)) {
    errors.lastName = "Last Name is required";
  }
  // Phone number check
  if (Validator.isEmpty(data.phoneNumber)) {
    errors.phoneNumber = "Phone Number is required";
  }
  // Email check
  if (Validator.isEmpty(data.email)) {
    errors.email = "Email field is required";
  } else if (!Validator.isEmail(data.email)) {
    errors.email = "Email is invalid";
  }
  return {
    errors,
    isValid: isEmpty(errors)
  };
};
