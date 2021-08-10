const sgMail = require('@sendgrid/mail');
const { sendGridKey } = require('../config/dev')
sgMail.setApiKey(sendGridKey);

const sendMail = async (to, subject, text, html) => {
  //ES8
    try {
      const msg = {
        to: to,
        from: 'mdaquib327@gmail.com', // Use the email address or domain you verified above
        subject: 'Sending with Twilio SendGrid is Fun',
        text: 'and easy to do anywhere, even with Node.js',
        html: '<strong>and easy to do anywhere, even with Node.js</strong>',
      };
      await sgMail.send(msg);
    } catch (error) {
      console.error(error);
      if (error.response) {
        console.error(error.response.body)
      }
    }
}

module.exports = {
  sendMail
};
