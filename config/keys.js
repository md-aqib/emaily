require('dotenv').config()

module.exports = {
    googleClientID:
      '76928983917-c9atlhnui6fl2tr36rqj8ji8t9glbsat.apps.googleusercontent.com',
    googleClientSecret: process.env.GOOGLE_CLIENT_SECRET,
    mongoURI: "mongodb://localhost:27017/emaily",
    cookieKey: '123123123',
  };