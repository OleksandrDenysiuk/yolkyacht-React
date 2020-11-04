import express from "express";
import emailController from "../../controllers/emailController";


export default function emailRoutes(mailer, QuoteRequest) {
  const emailRouter = express.Router();

  const controller = emailController(mailer, QuoteRequest);

  // @route POST api/email/quote
  // @desc Register user
  // @access Public
  emailRouter.post("/quote", controller.sendQuoteRequest);

  return emailRouter;
}
