import mongoose from "mongoose";
import validateQuoteRequestInput from '../validation/quoteRequest';


export default function emailController(mailer, QuoteRequest) {

  async function send(emailMessage) {
    // using Twilio SendGrid's v3 Node.js Library
    // https://github.com/sendgrid/sendgrid-nodejs
    return mailer.send(emailMessage);
  }

  async function sendQuoteRequest(req, res) {
    const { errors, isValid } = validateQuoteRequestInput(req.body);
    // Check validation
    if (!isValid) {
      res.status(400);
      res.json(errors);
      return res;
    }

    const quoteRequest = req.body;
    const emailMessage = getQuoteRequestEmail(quoteRequest);
    console.log("emailMessage: ",emailMessage);

    await storeQuoteRequest(quoteRequest.email, emailMessage.text)
      .then(
        () => {
          send(emailMessage)
            .then(() => {return res.status(200).json("Email sent successfully!")})
            .catch(() => {return res.status(400)});
        }
      )
  }

  function getQuoteRequestEmail(quoteRequest) {
    const subject = getQuoteEmailSubject(quoteRequest);
    const messageText = getQuoteRequestEmailText(quoteRequest);
    const html = getQuoteRequestEmailHTMLBody(quoteRequest);
    const alliedOceanEmail = getQuoteRequestDestinationEmail();
    console.log("alliedOceanEmail: ",alliedOceanEmail);

    const emailMessage = {
      to: alliedOceanEmail,
      from: quoteRequest.email,
      subject: subject,
      text: messageText,
      html: html
    };
    return emailMessage;
  }

  function getQuoteEmailSubject(quoteRequest) {
    const subject = quoteRequest.yachtModel && quoteRequest.yachtModel.length > 0 ? `New Quote Request from ${quoteRequest.firstName} ${quoteRequest.lastName} for ${quoteRequest.yachtModel}` : `New Quote Request from ${quoteRequest.firstName} ${quoteRequest.lastName}`;
    return subject;
  }

  function getQuoteRequestDestinationEmail() {
    const email = process.env.NODE_ENV === 'Docker-Google-Prod' ? 'sales@allied-yacht.com' : 'dmitry.ivanov.iamm@gmail.com';
    return email;
  }

  function getQuoteRequestEmailText(quoteRequest) {
    const messageText = `Name: ${quoteRequest.firstName} ${quoteRequest.lastName}\n`+
      `Phone: ${quoteRequest.phoneNumber}\n` +
      `Email: ${quoteRequest.email}\n` +
      `Best Time to Contact: ${quoteRequest.bestTimeToContact ? quoteRequest.bestTimeToContact : '-'}\n` +
      `Yacht Make and Model: ${quoteRequest.yachtModel ? quoteRequest.yachtModel : '-'}\n` +
      `Length: ${quoteRequest.length ? quoteRequest.length.concat(' '+quoteRequest.lengthUnit) : '-'}\n` +
      `Beam: ${quoteRequest.beam ? quoteRequest.beam.concat(' '+quoteRequest.beamUnit) : '-'}\n` +
      `Weight: ${quoteRequest.weight ? (quoteRequest.weight).concat(' '+quoteRequest.weightUnit) : '-'}\n` +
      `Purpose of Transport: ${quoteRequest.purpose ? quoteRequest.purpose : '-'}\n` +
      `Form Where: ${quoteRequest.fromWhere ? quoteRequest.fromWhere : '-'}\n` +
      `To Where: ${quoteRequest.toWhere ? quoteRequest.toWhere : '-'}\n` +
      `When: ${quoteRequest.when ? quoteRequest.when : '-'}`;

    return messageText;
  }

  function getQuoteRequestEmailHTMLBody(quoteRequest) {
    const html =
      '<table>' +
        `<tr><td><strong>Name :</strong></td><td>&nbsp;${quoteRequest.firstName} ${quoteRequest.lastName}</td></tr>`+
        `<tr><td><strong>Phone :</strong></td><td>&nbsp;${quoteRequest.phoneNumber}</td></tr>`+
        `<tr><td><strong>Email :</strong></td><td>&nbsp;${quoteRequest.email}</td></tr>`+
        `<tr><td><strong>Best Time to Contact :</strong></td><td>&nbsp;${quoteRequest.bestTimeToContact ? quoteRequest.bestTimeToContact : '-'}</td></tr>`+
        `<tr><td><strong>Yacht Make and Model :</strong></td><td>&nbsp;${quoteRequest.yachtModel ? quoteRequest.yachtModel : '-'}</td></tr>`+
        `<tr><td><strong>Length :</strong></td><td>&nbsp;${quoteRequest.length ? quoteRequest.length.concat(' '+quoteRequest.lengthUnit) : '-'}</td></tr>`+
        `<tr><td><strong>Beam :</strong></td><td>&nbsp;${quoteRequest.beam ? quoteRequest.beam.concat(' '+quoteRequest.beamUnit) : '-'}</td></tr>`+
        `<tr><td><strong>Weight :</strong></td><td>&nbsp;${quoteRequest.weight ? (quoteRequest.weight).concat(' '+quoteRequest.weightUnit) : '-'}</td></tr>`+
        `<tr><td><strong>Purpose of Transport :</strong></td><td>&nbsp;${quoteRequest.purpose ? quoteRequest.purpose : '-'}</td></tr>`+
        `<tr><td><strong>Form Where :</strong></td><td>&nbsp;${quoteRequest.fromWhere ? quoteRequest.fromWhere : '-'}</td></tr>`+
        `<tr><td><strong>To Where :</strong></td><td>&nbsp;${quoteRequest.toWhere ? quoteRequest.toWhere : '-'}</td></tr>`+
        `<tr><td><strong>When :</strong></td><td>&nbsp;${quoteRequest.when ? quoteRequest.when : '-'}</td></tr>`+
      '</table>'

    return html;
  }

  async function storeQuoteRequest(fromEmail, message) {
    const nowDate = new Date().toLocaleString('us-Us');
    const id = mongoose.Types.ObjectId();
    await QuoteRequest.create(
      new QuoteRequest({_id: id, fromEmail: fromEmail, receivedAt: nowDate, requestData: message})
    )
    .then(() => console.log('New Quote Request Stored in DB.'))
    .catch(err => console.log("Error Store New Quote Request in DB: ", err));
  }

  return { sendQuoteRequest }

}