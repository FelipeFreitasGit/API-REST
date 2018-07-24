const Raven = require('raven');
const sentryConfig = require('../../config/sentry');

const ravenCliente = Raven.config(sentryConfig.sentryDSN).install();

module.exports = ravenCliente;
