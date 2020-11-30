if (process.env.NODE_ENV === 'production') {
  //when we are using heroku NODE_ENV variable automatic set eaqual to production
  module.exports = require('./prod');
// } else if (process.env.NODE_ENV === 'ci') {
//   module.exports = require('./ci');
} else {
  module.exports = require('./dev');
}