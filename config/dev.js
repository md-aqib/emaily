require('dotenv').config()

module.exports = {
    googleClientID:
      '1036547047589-03jqfu5q92mnp0dpvddqrjpnqav61uq3.apps.googleusercontent.com',
    googleClientSecret: process.env.GOOGLE_CLIENT_SECRET,
    mongoURI: process.env.MONGO_URI,
    cookieKey: '123123123ggfxgxfgdh',
    stripePublishableKey: 'pk_test_51JH5QMSCm4PrTlRfuTsIDkhCZjQ3FOCg7a6QCwMA9LsTHeVUsNCeeyUIsbEdfpVlgw066I1Tt10re2l8DA0TLu59009mBlffUW',
    stripeSecretKey: 'sk_test_51JH5QMSCm4PrTlRfTWS7Z1nZnE0cyPeMO1dTA9YCZwMD6ZZpOtbcFb0HErvx8vMiNJbTVjZOS8EieJV5tbN8m04r004k3nGLvn'
  };