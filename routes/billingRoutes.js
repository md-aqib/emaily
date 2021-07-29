const { stripeSecretKey } = require('../config/keys');
const requireLogin = require('../middlewares/requireLogin')
const stripe = require('stripe')(stripeSecretKey);

module.exports = app => {
    app.post('/api/stripe', requireLogin, async (req, res) => {
        const charge = await stripe.charges.create({
            amount: 500,
            currency: 'inr',
            description: '5 Rs for 5 credits',
            source: req.body.id
        })
        req.user.credits += 5;
        const user = await req.user.save();
        res.send(user);
    })
}