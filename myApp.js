const express = require('express');
const app = express();
const helmet = require('helmet');
const bcrypt = require('bcryptjs');

const ninetyDaysInSeconds = 90 * 24 * 60 * 60;

app.use(
  helmet({
    frameguard: {
      action: 'deny'
    },
    contentSecurityPolicy: {
      directives: {
        defaultSrc: ["'self'"],
        scriptSrc: ["'self'", 'trusted-cdn.com']
      }
    },
    hsts: {
      maxAge: ninetyDaysInSeconds,
      force: true // Included if following freeCodeCamp's specific test requirements
    },
    noCache: true
  })
);
