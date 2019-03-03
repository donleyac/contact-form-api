const emails = require('./emails.json');
const options = {
  sourceEmail: process.env.SOURCE_EMAIL,
  myEmails: emails,
  myDomain: process.env.DOMAIN
}
const { sendJSON, sendFormEncoded } = require('./lambdaMailer')(options)
module.exports.sendJSON = sendJSON
module.exports.sendFormEncoded = sendFormEncoded