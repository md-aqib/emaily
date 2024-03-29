const { model } = require('mongoose');
const requireLogin = require('../middlewares/requireLogin');
const requireCredits = require('../middlewares/requireCredits');
const Survey = model('surveys');
const { sendMail } = require('../services/Mailer');
const surveyTemplate = require('../services/emailTemplates/surveyTemplate')


module.exports = (app) => {
    app.get('/api/surveys/thanks', async (req, res) => {
        res.send('Thanks for voting!')
    })


    app.post('/api/surveys', requireLogin, requireCredits, async (req, res) => {
        const { title, subject, body, recipients } = req.body;

        const survey = new Survey({
            title,
            subject,
            body,
            recipients: recipients.split(',').map(email => ({ email: email.trim() })),
            _user: req.user.id,
            dateSent: Date.now()
        });
        try {
            await sendMail(recipients);
            await survey.save();
            req.user.credits -= 1;
            const user = await req.user.save();
            
            res.send(user)
        } catch(e) {
            res.status(422).send(e.message)
        }
    })
}